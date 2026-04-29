'use client';

import { useState, useMemo, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { usePremium } from '@/contexts/PremiumContext';
import { useAuth } from '@/contexts/AuthContext';
import { SUBJECTS } from '@/data/subjects';
import { SUBJECT_COLORS, SUBJECT_ICONS, getSubjectName } from '@/data/constants';
import { formatDate, formatDuration, scoreClass, scoreBarClass } from '@/utils/format';
import { FICHES_DATA } from '@/data/fiches';
import { loadCoursForFiche } from '@/data/cours';
import { supabase } from '@/lib/supabase';

/* ========== HELPERS ========== */
function getSubjectBadgeColors(subjectId) {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  return SUBJECT_COLORS[subject?.color] || SUBJECT_COLORS.primary;
}

const TYPE_BADGE = {
  'Écrits': 'bg-slate-100 text-slate-700',
  'Oraux': 'bg-violet-100 text-violet-700',
};

/* ========== CRFPA EXAM SUBJECTS ========== */
const ECRIT_SUBJECTS = [
  { code: 'E1', name: 'Note de synthèse', tone: 'e1' },
  { code: 'E2', name: 'Droit des obligations', tone: 'e2' },
  { code: 'E3', name: 'Spécialité', tone: 'e3' },
  { code: 'E4', name: 'Procédure', tone: 'e4' },
];
const ORAL_SUBJECTS = [
  { code: 'O1', name: 'Grand Oral — Libertés fondamentales', tone: 'o1' },
  { code: 'O2', name: 'Anglais juridique', tone: 'o2' },
];
const SPECIALITES = ['Droit civil', 'Droit des affaires', 'Droit social', 'Droit pénal', 'Droit administratif', 'Droit international'];
const TONE_STYLES = {
  e1: { bg: '#fdfaf4', border: '#ede8d8', code: '#8a6a1f' },
  e2: { bg: '#f5faf6', border: '#d8eadb', code: '#2e6040' },
  e3: { bg: '#f3f8fc', border: '#d4e4ef', code: '#2c5778' },
  e4: { bg: '#f7f4fb', border: '#ddd5ec', code: '#553c7a' },
  o1: { bg: '#fdf5f6', border: '#ecd4d8', code: '#8b2035' },
  o2: { bg: '#fdf8f3', border: '#e8dccc', code: '#6a4520' },
};

/* ========== SIDEBAR MENU ITEMS ========== */
const MENU_ITEMS = [
  {
    id: 'overview', label: 'Vue d\'ensemble', premium: false, color: 'primary',
    activeClasses: 'bg-slate-50 text-slate-700 border-slate-600',
    iconActiveClass: 'text-slate-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>,
  },
  {
    id: 'historique', label: 'Historique', premium: false, color: 'amber',
    activeClasses: 'bg-amber-50 text-amber-700 border-amber-600',
    iconActiveClass: 'text-amber-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>,
  },
  {
    id: 'progression', label: 'Progression', premium: true, color: 'emerald',
    activeClasses: 'bg-emerald-50 text-emerald-700 border-emerald-600',
    iconActiveClass: 'text-emerald-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>,
  },
  {
    id: 'objectifs', label: 'Objectifs', premium: true, color: 'violet',
    activeClasses: 'bg-violet-50 text-violet-700 border-violet-600',
    iconActiveClass: 'text-violet-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>,
  },
  {
    id: 'classement', label: 'Classement', premium: true, color: 'rose',
    activeClasses: 'bg-rose-50 text-rose-700 border-rose-600',
    iconActiveClass: 'text-rose-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.52.587 6.023 6.023 0 0 1-2.52-.587" /></svg>,
  },
  {
    id: 'fiches', label: 'Fiches & Cours', premium: false, color: 'sky',
    activeClasses: 'bg-sky-50 text-sky-700 border-sky-600',
    iconActiveClass: 'text-sky-600',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2V5zM19 18v3H6" /></svg>,
  },
  {
    id: 'account', label: 'Mon compte', premium: false, color: 'gray',
    activeClasses: 'bg-gray-100 text-gray-700 border-gray-400',
    iconActiveClass: 'text-gray-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>,
  },
];

/* ========== MAIN PAGE ========== */
export default function DashboardPage() {
  const { user, loading: authLoading, logOut } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('overview');
  const [historyFilter, setHistoryFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(10);
  const [chartMode, setChartMode] = useState('epreuves');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/connexion');
    }
  }, [authLoading, user, router]);

  const [qcmStats] = useLocalStorage('prepa-qcm-stats', { sessions: [], totalCorrect: 0, totalAnswered: 0 });
  const [examStats] = useLocalStorage('prepa-examen-stats', { sessions: [], totalCorrect: 0, totalAnswered: 0 });

  const { isPremiumPlus, tier } = usePremium();
  const [activeFicheSubject, setActiveFicheSubject] = useState('all');
  const [selectedFiche, setSelectedFiche] = useState(null);
  const [selectedCours, setSelectedCours] = useState(null);
  const [coursLoading, setCoursLoading] = useState(false);

  // ---- Tag sessions with type ----
  const allSessions = useMemo(() => [
    ...qcmStats.sessions.map(s => ({ ...s, _type: 'Écrits' })),
    ...examStats.sessions.map(s => ({ ...s, _type: 'Oraux' })),
  ], [qcmStats.sessions, examStats.sessions]);

  // ---- Centralized data computation ----
  const data = useMemo(() => {
    const today = new Date();
    const sorted = [...allSessions].filter(s => s.date).sort((a, b) => new Date(a.date) - new Date(b.date));

    const totalSessions = allSessions.length;
    const avgScore = totalSessions > 0
      ? Math.round(allSessions.reduce((sum, s) => sum + (s.percentage || 0), 0) / totalSessions)
      : 0;
    const totalTime = allSessions.reduce((sum, s) => sum + (s.duration || 0), 0);

    // Streak
    const dateSet = new Set(sorted.map(s => s.date?.split('T')[0]).filter(Boolean));
    let currentStreak = 0;
    const d = new Date(today);
    if (!dateSet.has(d.toISOString().split('T')[0])) d.setDate(d.getDate() - 1);
    while (dateSet.has(d.toISOString().split('T')[0])) { currentStreak++; d.setDate(d.getDate() - 1); }

    let bestStreak = 0, tempStreak = 0, prevDate = null;
    const sortedDates = [...dateSet].sort();
    for (const ds of sortedDates) {
      const dt = new Date(ds);
      if (prevDate && (dt - prevDate) === 86400000) tempStreak++; else tempStreak = 1;
      bestStreak = Math.max(bestStreak, tempStreak);
      prevDate = dt;
    }

    // Trend
    const last10 = sorted.slice(-10);
    const last5Avg = last10.length >= 5 ? Math.round(last10.slice(-5).reduce((s, x) => s + (x.percentage || 0), 0) / 5) : null;
    const prev5Avg = last10.length >= 10 ? Math.round(last10.slice(0, 5).reduce((s, x) => s + (x.percentage || 0), 0) / 5) : null;
    const trend = (last5Avg !== null && prev5Avg !== null) ? (last5Avg > prev5Avg + 2 ? 'up' : last5Avg < prev5Avg - 2 ? 'down' : 'stable') : 'neutral';

    // This week
    const startOfThisWeek = new Date(today);
    startOfThisWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    startOfThisWeek.setHours(0, 0, 0, 0);
    const thisWeekSessions = sorted.filter(s => new Date(s.date) >= startOfThisWeek).length;
    const thisWeekTime = sorted.filter(s => new Date(s.date) >= startOfThisWeek).reduce((sum, s) => sum + (s.duration || 0), 0);
    const startOfLastWeek = new Date(startOfThisWeek); startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);
    const lastWeekTime = sorted.filter(s => { const dd = new Date(s.date); return dd >= startOfLastWeek && dd < startOfThisWeek; }).reduce((sum, s) => sum + (s.duration || 0), 0);

    // Subject stats
    const subjectStats = {};
    SUBJECTS.forEach(s => {
      const sess = allSessions.filter(x => x.subject === s.id);
      const avg = sess.length > 0 ? Math.round(sess.reduce((sum, x) => sum + (x.percentage || 0), 0) / sess.length) : 0;
      const bestScore = sess.length > 0 ? Math.max(...sess.map(x => x.percentage || 0)) : 0;
      subjectStats[s.id] = { id: s.id, name: s.name, color: s.color, avg, count: sess.length, bestScore, totalTime: sess.reduce((sum, x) => sum + (x.duration || 0), 0) };
    });
    const withSessions = Object.values(subjectStats).filter(s => s.count > 0);
    const sortedByAvg = [...withSessions].sort((a, b) => b.avg - a.avg);
    const strengths = sortedByAvg.slice(0, Math.min(2, Math.ceil(sortedByAvg.length / 2)));
    const strengthIds = new Set(strengths.map(s => s.id));
    const weaknesses = sortedByAvg.filter(s => !strengthIds.has(s.id)).slice(-2).reverse();

    // Recent 5
    const recent5 = [...allSessions].filter(s => s.date).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    // Score evolution (last 20)
    const last20 = sorted.slice(-20);
    const last5AvgFull = last20.length >= 5 ? Math.round(last20.slice(-5).reduce((s, x) => s + (x.percentage || 0), 0) / 5) : null;
    const prev5AvgFull = last20.length >= 10 ? Math.round(last20.slice(-10, -5).reduce((s, x) => s + (x.percentage || 0), 0) / 5) : null;

    // Type counts
    const qcmCount = qcmStats.sessions.length;
    const examCount = examStats.sessions.length;

    // Heatmap (90 days)
    const dayMap = {};
    sorted.forEach(s => { if (!s.date) return; const dk = new Date(s.date).toISOString().split('T')[0]; dayMap[dk] = (dayMap[dk] || 0) + 1; });
    const heatStart = new Date(today); heatStart.setDate(today.getDate() - 89);
    while (heatStart.getDay() !== 1) heatStart.setDate(heatStart.getDate() - 1);
    const heatmapDays = []; const hd = new Date(heatStart);
    while (hd <= today) { const key = hd.toISOString().split('T')[0]; heatmapDays.push({ date: new Date(hd), count: dayMap[key] || 0, key }); hd.setDate(hd.getDate() + 1); }
    const maxHeatCount = Math.max(...heatmapDays.map(x => x.count), 1);
    const weeks = []; for (let i = 0; i < heatmapDays.length; i += 7) weeks.push(heatmapDays.slice(i, i + 7));

    // This week heatmap
    const thisWeekStart = new Date(today); thisWeekStart.setDate(today.getDate() - ((today.getDay() + 6) % 7)); thisWeekStart.setHours(0, 0, 0, 0);
    const thisWeekDays = [];
    for (let i = 0; i < 7; i++) { const dd = new Date(thisWeekStart); dd.setDate(dd.getDate() + i); const key = dd.toISOString().split('T')[0]; thisWeekDays.push({ date: new Date(dd), count: dayMap[key] || 0, key, label: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i] }); }
    const thisWeekActiveDays = thisWeekDays.filter(d => d.count > 0).length;

    const overallAvg = avgScore;
    const targetScore = Math.min(100, Math.ceil((overallAvg + 5) / 5) * 5);

    return {
      totalSessions, avgScore, totalTime, currentStreak, bestStreak, trend,
      thisWeekSessions, thisWeekTime, lastWeekTime,
      subjectStats, strengths, weaknesses,
      recent5, last20, last5Avg: last5AvgFull, prev5Avg: prev5AvgFull,
      qcmCount, examCount,
      weeks, maxHeatCount, thisWeekDays, thisWeekActiveDays,
      overallAvg, targetScore,
      hasAnySessions: totalSessions > 0,
      hasMultipleSubjects: withSessions.length >= 2,
    };
  }, [allSessions, qcmStats.sessions, examStats.sessions]);

  // ---- Filtered history ----
  const filteredHistory = useMemo(() => {
    let sessions = allSessions;
    if (historyFilter !== 'all') {
      const filterMap = { ecrits: 'Écrits', oraux: 'Oraux' };
      sessions = sessions.filter(s => s._type === filterMap[historyFilter]);
    }
    return sessions.filter(s => s.date).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [allSessions, historyFilter]);

  useEffect(() => { setVisibleCount(10); }, [historyFilter]);

  // ---- Chart data for score evolution ----
  const chartData = useMemo(() => {
    const sorted = [...allSessions].filter(s => s.date).sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sorted.length === 0) return [];

    if (chartMode === 'epreuves') {
      const sessions = isPremiumPlus ? sorted.slice(-20) : sorted.slice(-10);
      return sessions.map(s => ({
        label: new Date(s.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
        value: s.percentage || Math.round((s.correct / s.total) * 100),
      }));
    }

    if (chartMode === 'jours') {
      const dayMap = {};
      sorted.forEach(s => {
        const key = s.date.split('T')[0];
        if (!dayMap[key]) dayMap[key] = [];
        dayMap[key].push(s.percentage || Math.round((s.correct / s.total) * 100));
      });
      const days = Object.entries(dayMap).sort(([a], [b]) => a.localeCompare(b));
      const sliced = isPremiumPlus ? days.slice(-30) : days.slice(-14);
      return sliced.map(([key, scores]) => ({
        label: new Date(key).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
        value: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      }));
    }

    if (chartMode === 'semaines') {
      const weekMap = {};
      sorted.forEach(s => {
        const d = new Date(s.date);
        const monday = new Date(d);
        monday.setDate(d.getDate() - ((d.getDay() + 6) % 7));
        const key = monday.toISOString().split('T')[0];
        if (!weekMap[key]) weekMap[key] = [];
        weekMap[key].push(s.percentage || Math.round((s.correct / s.total) * 100));
      });
      const weeks = Object.entries(weekMap).sort(([a], [b]) => a.localeCompare(b));
      const sliced = isPremiumPlus ? weeks.slice(-12) : weeks.slice(-8);
      return sliced.map(([key, scores]) => ({
        label: new Date(key).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
        value: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      }));
    }

    return [];
  }, [allSessions, chartMode, isPremiumPlus]);

  // Dynamic subtitle
  const heroSubtitle = !data.hasAnySessions
    ? 'Commencez votre premiere session pour suivre votre progression !'
    : data.currentStreak > 0
      ? `${data.currentStreak} jour${data.currentStreak > 1 ? 's' : ''} consécutif${data.currentStreak > 1 ? 's' : ''} — continue !`
      : 'Reprenez la ou vous vous etes arrete.';

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin w-10 h-10 text-[#991b1b] mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-sm text-gray-500">Chargement...</p>
        </div>
      </div>
    );
  }

  // Donut chart data (used in objectifs section)
  const segments = [
    { label: 'QCM', count: data.qcmCount, color: '#c92150' },
    { label: 'Examens', count: data.examCount, color: '#8b5cf6' },
  ];
  let cumulative = 0;
  const totalTypeCount = data.qcmCount + data.examCount;
  const conicStops = segments.map(seg => {
    const start = cumulative;
    const end = cumulative + (seg.count / Math.max(totalTypeCount, 1)) * 100;
    cumulative = end;
    return `${seg.color} ${start}% ${end}%`;
  }).join(', ');

  const firstName = user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Loic';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#f5f6f8', display: 'flex', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>

      {/* Backdrop mobile */}
      {drawerOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 15, background: 'rgba(0,0,0,0.5)' }} onClick={() => setDrawerOpen(false)} />
      )}

      {/* SIDEBAR */}
      <CRFPADashSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        user={user}
        isPremiumPlus={isPremiumPlus}
        logOut={logOut}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />

      {/* MAIN */}
      <main style={{ flex: 1, overflowY: 'auto', height: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f6f8' }}>

        {/* Topbar mobile */}
        <div className="md:hidden flex items-center justify-between" style={{ padding: '0 16px', height: 56, background: '#7a1a2b', flexShrink: 0 }}>
          <button onClick={() => setDrawerOpen(true)} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
          <span style={{ fontFamily: "'Source Serif 4', serif", color: 'white', fontWeight: 700, fontSize: 15 }}>Prépa <b>CRFPA</b></span>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12, fontWeight: 700 }}>{firstName[0].toUpperCase()}</div>
        </div>

        <div style={{ padding: '0 28px 48px', width: '100%', boxSizing: 'border-box' }}>

          {/* ===== VUE D'ENSEMBLE ===== */}
          {activeSection === 'overview' && (
            <OverviewSection data={data} firstName={firstName} specialOpen={specialOpen} setSpecialOpen={setSpecialOpen} />
          )}

          {/* ===== HISTORIQUE ===== */}
          {activeSection === 'historique' && (
            <div style={{ paddingTop: 24 }}>
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 600, color: '#1c1410', marginBottom: 20 }}>Historique</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span>Historique des sessions</h3>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { key: 'all', label: 'Tout', count: allSessions.length },
                      { key: 'ecrits', label: 'Écrits', count: data.qcmCount },
                      { key: 'oraux', label: 'Oraux', count: data.examCount },
                    ].map(f => (
                      <button key={f.key} onClick={() => setHistoryFilter(f.key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${historyFilter === f.key ? 'bg-[#b91c1c] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {f.label} ({f.count})
                      </button>
                    ))}
                  </div>
                </div>
                {filteredHistory.length === 0 ? (
                  <div className="px-6 pb-6">
                    <EmptyState title="Aucune session" description="Aucune session trouvée pour ce filtre." ctaHref="/entrainement-ecrits" ctaLabel="Commencer une session" />
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50/80 border-b border-gray-100">
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Type</th>
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Matière</th>
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Thème</th>
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Score</th>
                            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Durée</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredHistory.slice(0, visibleCount).map((s, i) => {
                            const colors = getSubjectBadgeColors(s.subject);
                            const pct = s.percentage || Math.round((s.correct / s.total) * 100);
                            return (
                              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                                <td className="py-3 px-4 text-sm text-gray-500">{formatDate(s.date)}</td>
                                <td className="py-3 px-4"><span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${TYPE_BADGE[s._type] || TYPE_BADGE['Écrits']}`}>{s._type}</span></td>
                                <td className="py-3 px-4"><span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>{s.subjectName || getSubjectName(s.subject)}</span></td>
                                <td className="py-3 px-4 text-sm text-gray-700 hidden md:table-cell">{s.topic || '—'}</td>
                                <td className="py-3 px-4"><div className="flex items-center gap-2"><div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${scoreBarClass(pct)}`} style={{ width: `${pct}%` }} /></div><span className={`text-sm font-bold ${scoreClass(pct)}`}>{pct}%</span></div></td>
                                <td className="py-3 px-4 text-sm text-gray-500">{formatDuration(s.duration)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {visibleCount < filteredHistory.length && (
                      <div className="p-4 text-center border-t border-gray-100">
                        <button onClick={() => setVisibleCount(v => v + 10)} className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                          Voir plus ({Math.min(visibleCount + 10, filteredHistory.length)} / {filteredHistory.length})
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ===== PROGRESSION ===== */}
          {activeSection === 'progression' && (
            <div style={{ paddingTop: 24 }}>
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 600, color: '#1c1410', marginBottom: 20 }}>Progression</h2>
              {!isPremiumPlus ? (
                <PremiumLock title="Progression détaillée" description="Visualisez votre courbe de progression, vos points forts et axes d'amélioration avec Premium+." />
              ) : !data.hasAnySessions || data.last20.length < 2 ? (
                <EmptyState title="Pas assez de données" description="Effectuez plusieurs sessions pour voir votre progression." ctaHref="/entrainement-ecrits" ctaLabel="Commencer une session" />
              ) : (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Évolution des scores</h3>
                      <div className="flex items-center gap-2">
                        {data.trend === 'up' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">↑ En progression</span>}
                        {data.trend === 'down' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600">↓ En baisse</span>}
                        {data.trend === 'stable' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">→ Stable</span>}
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      {[{ key: 'epreuves', label: 'Par épreuve' }, { key: 'jours', label: 'Par jour' }, { key: 'semaines', label: 'Par semaine' }].map(f => (
                        <button key={f.key} onClick={() => setChartMode(f.key)} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${chartMode === f.key ? 'bg-emerald-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{f.label}</button>
                      ))}
                    </div>
                    <ScoreLineChart points={chartData} />
                    {data.last5Avg !== null && data.prev5Avg !== null && (
                      <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-sm"><span className="text-gray-500">5 dernières :</span><span className={`font-bold ${scoreClass(data.last5Avg)}`}>{data.last5Avg}%</span></div>
                        <div className="flex items-center gap-1.5 text-sm"><span className="text-gray-500">5 précédentes :</span><span className={`font-bold ${scoreClass(data.prev5Avg)}`}>{data.prev5Avg}%</span></div>
                        <span className={`inline-flex items-center gap-0.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${data.last5Avg >= data.prev5Avg ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>{data.last5Avg >= data.prev5Avg ? '+' : ''}{data.last5Avg - data.prev5Avg}%</span>
                      </div>
                    )}
                  </div>
                  {data.hasMultipleSubjects && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Points forts &amp; axes d&apos;amélioration</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3">↑ Points forts</h4>
                          <div className="space-y-3">{data.strengths.map(s => { const colors = SUBJECT_COLORS[s.color] || SUBJECT_COLORS.primary; return (<div key={s.id} className={`p-3 rounded-xl border ${colors.border} ${colors.bg}`}><div className="flex justify-between items-center"><span className={`text-sm font-bold ${colors.text}`}>{s.name}</span><span className={`text-lg font-black ${scoreClass(s.avg)}`}>{s.avg}%</span></div><p className="text-[10px] text-gray-400 mt-0.5">{s.count} session{s.count > 1 ? 's' : ''}</p></div>); })}</div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-3">À améliorer</h4>
                          <div className="space-y-3">{data.weaknesses.map(s => { const colors = SUBJECT_COLORS[s.color] || SUBJECT_COLORS.primary; return (<div key={s.id} className={`p-3 rounded-xl border ${colors.border} ${colors.bg}`}><div className="flex justify-between items-center"><span className={`text-sm font-bold ${colors.text}`}>{s.name}</span><span className={`text-lg font-black ${scoreClass(s.avg)}`}>{s.avg}%</span></div><p className="text-[10px] text-gray-400 mt-0.5">{s.count} session{s.count > 1 ? 's' : ''}</p></div>); })}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ===== OBJECTIFS ===== */}
          {activeSection === 'objectifs' && (
            <div style={{ paddingTop: 24 }}>
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 600, color: '#1c1410', marginBottom: 20 }}>Objectifs</h2>
              {!isPremiumPlus ? (
                <PremiumLock title="Objectifs et statistiques détaillées" description="Suivez vos objectifs et visualisez la répartition de vos sessions avec Premium+." />
              ) : !data.hasAnySessions ? (
                <EmptyState title="Aucune donnée" description="Effectuez des sessions pour voir vos objectifs." ctaHref="/entrainement-ecrits" ctaLabel="Commencer une session" />
              ) : (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-500"></span>Objectifs de la semaine</h3>
                    <div className="space-y-4">
                      {(() => { const pct = Math.min(100, Math.round((data.thisWeekSessions / 5) * 100)); return (<div><div className="flex justify-between items-center mb-1"><span className="text-sm text-gray-600">Sessions réalisées</span><span className="text-sm font-bold text-gray-900">{data.thisWeekSessions}/5 {pct >= 100 && '✓'}</span></div><div className="h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-violet-500 rounded-full" style={{ width: `${pct}%` }} /></div></div>); })()}
                      {(() => { const mins = Math.round(data.thisWeekTime / 60000); const target = 120; const pct = Math.min(100, Math.round((mins / target) * 100)); return (<div><div className="flex justify-between items-center mb-1"><span className="text-sm text-gray-600">Temps d&apos;étude</span><span className="text-sm font-bold text-gray-900">{mins >= 60 ? `${Math.floor(mins / 60)}h${mins % 60 > 0 ? String(mins % 60).padStart(2, '0') : ''}` : `${mins} min`} / 2h</span></div><div className="h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#991b1b] rounded-full" style={{ width: `${pct}%` }} /></div></div>); })()}
                      {(() => { const pct = Math.min(100, Math.round((data.thisWeekActiveDays / 5) * 100)); return (<div><div className="flex justify-between items-center mb-1"><span className="text-sm text-gray-600">Jours actifs</span><span className="text-sm font-bold text-gray-900">{data.thisWeekActiveDays}/5</span></div><div className="h-2.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-purple-500 rounded-full" style={{ width: `${pct}%` }} /></div></div>); })()}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400"></span>Régularité</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-violet-50 rounded-xl p-4 text-center"><p className="text-3xl font-black text-violet-700">{data.currentStreak}</p><p className="text-xs font-medium text-violet-500 mt-1">Jours consécutifs</p><p className="text-xs text-gray-400 mt-1">Record : {data.bestStreak} jours</p></div>
                      <div className="bg-slate-50 rounded-xl p-4 text-center">{(() => { const thisW = Math.round(data.thisWeekTime / 60000); const lastW = Math.round(data.lastWeekTime / 60000); const diff = lastW > 0 ? Math.round(((thisW - lastW) / lastW) * 100) : (thisW > 0 ? 100 : 0); return (<><p className="text-3xl font-black text-slate-700">{thisW >= 60 ? `${Math.floor(thisW / 60)}h${thisW % 60 > 0 ? String(thisW % 60).padStart(2, '0') : ''}` : `${thisW}m`}</p><p className="text-xs font-medium text-slate-500 mt-1">Cette semaine</p><p className={`text-xs mt-1 font-semibold ${diff > 0 ? 'text-emerald-600' : diff < 0 ? 'text-red-500' : 'text-gray-400'}`}>{diff > 0 ? `↑ +${diff}%` : diff < 0 ? `↓ ${diff}%` : '→ Identique'} vs sem. passée</p></>); })()}</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Objectif score</h3>
                    <div className="flex items-center gap-6">
                      <MiniProgressRing value={data.overallAvg} max={data.targetScore} color="#8b5cf6" />
                      <div className="flex-1"><p className="text-sm font-bold text-gray-900">Score moyen : {data.overallAvg}%</p><p className="text-sm text-gray-500">Prochain palier : {data.targetScore}%</p></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400"></span>Répartition des sessions</h3>
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24 shrink-0"><div className="w-full h-full rounded-full" style={{ background: totalTypeCount > 0 ? `conic-gradient(${conicStops})` : '#e5e7eb' }} /><div className="absolute inset-3 bg-white rounded-full flex items-center justify-center"><span className="text-base font-black text-gray-900">{totalTypeCount}</span></div></div>
                      <div className="space-y-2">{segments.map(seg => (<div key={seg.label} className="flex items-center gap-2"><div className="w-3 h-3 rounded-full shrink-0" style={{ background: seg.color }} /><span className="text-sm text-gray-700">{seg.label}</span><span className="text-sm font-bold text-gray-900">{seg.count}</span><span className="text-xs text-gray-400">({totalTypeCount > 0 ? Math.round((seg.count / totalTypeCount) * 100) : 0}%)</span></div>))}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===== CLASSEMENT ===== */}
          {activeSection === 'classement' && (
            <div style={{ paddingTop: 24 }}>
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 600, color: '#1c1410', marginBottom: 20 }}>Classement</h2>
              {!isPremiumPlus ? (
                <PremiumLock title="Classement et comparaison" description="Comparez vos performances avec les autres étudiants en droit grâce à Premium+." />
              ) : (
                <ClassementSection allSessions={allSessions} />
              )}
            </div>
          )}

          {/* ===== FICHES & COURS ===== */}
          {activeSection === 'fiches' && (
            <div style={{ paddingTop: 24 }}>
              <FichesSection
                activeFicheSubject={activeFicheSubject}
                setActiveFicheSubject={setActiveFicheSubject}
                isPremiumPlus={isPremiumPlus}
                onOpenFiche={(fiche) => setSelectedFiche(fiche)}
              />
            </div>
          )}

          {/* ===== MON COMPTE ===== */}
          {activeSection === 'account' && (
            <div style={{ paddingTop: 24 }}>
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 600, color: '#1c1410', marginBottom: 20 }}>Mon compte</h2>
              <AccountSection user={user} tier={tier} />
            </div>
          )}

        </div>

        {/* MODALS */}
        {selectedFiche && (
          <FicheDetailModal
            fiche={selectedFiche}
            onClose={() => setSelectedFiche(null)}
            onOpenCours={async (fiche) => {
              setCoursLoading(true);
              const cours = await loadCoursForFiche(fiche.id);
              setCoursLoading(false);
              if (cours) setSelectedCours({ cours, fiche });
            }}
            coursLoading={coursLoading}
          />
        )}
        {selectedCours && (
          <CoursModal
            cours={selectedCours.cours}
            fiche={selectedCours.fiche}
            onClose={() => setSelectedCours(null)}
          />
        )}

      </main>
    </div>
  );
}

/* ============================================================
   CRFPA DASH SIDEBAR
   ============================================================ */
function CRFPADashSidebar({ activeSection, setActiveSection, user, isPremiumPlus, logOut, drawerOpen, setDrawerOpen }) {
  const firstName = user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Loic';

  const navItems = [
    {
      id: 'overview', label: "Vue d'ensemble",
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>,
    },
    {
      id: 'fiches', label: 'Fiches & Cours', badge: '12 ch.',
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2V5zM19 18v3H6" /></svg>,
    },
    {
      id: 'ecrit', label: 'Épreuves écrites', href: '/entrainement-ecrits',
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" /></svg>,
    },
    {
      id: 'oral', label: 'Épreuves orales', href: '/entrainement-oraux',
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>,
    },
    {
      id: 'examen', label: 'Mode Examen', href: '/examen-blanc',
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>,
    },
    {
      id: 'historique', label: 'Historique',
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    },
    {
      id: 'progression', label: 'Progression', locked: !isPremiumPlus,
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>,
    },
    {
      id: 'objectifs', label: 'Objectifs', locked: !isPremiumPlus,
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>,
    },
    {
      id: 'classement', label: 'Classement', locked: !isPremiumPlus,
      icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.52.587 6.023 6.023 0 0 1-2.52-.587" /></svg>,
    },
  ];

  const SidebarInner = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 0 }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.10)', marginBottom: 14, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg,#fff 0%,#f0e8e0 100%)', display: 'grid', placeItems: 'center', fontSize: 18, flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>⚖︎</div>
        <div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15, fontWeight: 600, color: 'white', lineHeight: 1.2 }}>Prépa <b>CRFPA</b></div>
          <div style={{ fontSize: 10, letterSpacing: '0.14em', opacity: 0.7, color: 'white', textTransform: 'uppercase' }}>Tableau de bord</div>
        </div>
      </div>

      {/* Nav label */}
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', opacity: 0.55, color: 'white', textTransform: 'uppercase', marginBottom: 6, flexShrink: 0 }}>Navigation</div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, overflowY: 'auto' }}>
        {navItems.map(item => {
          const isActive = activeSection === item.id;
          const baseStyle = {
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 10px', borderRadius: 9,
            color: isActive ? 'white' : 'rgba(255,255,255,0.82)',
            fontSize: 13.5, fontWeight: isActive ? 600 : 500,
            textDecoration: 'none', border: 'none', cursor: 'pointer',
            background: isActive ? 'rgba(255,255,255,0.14)' : 'transparent',
            textAlign: 'left', width: '100%', boxSizing: 'border-box',
            transition: 'background 120ms',
          };
          if (item.href) {
            return (
              <Link key={item.id} href={item.href} style={baseStyle}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ opacity: 0.85, display: 'flex' }}>{item.icon}</span>
                <span style={{ flex: 1 }}>{item.label}</span>
              </Link>
            );
          }
          return (
            <button key={item.id}
              onClick={() => { if (!item.locked) { setActiveSection(item.id); setDrawerOpen(false); } }}
              style={{ ...baseStyle, cursor: item.locked ? 'default' : 'pointer', opacity: item.locked ? 0.65 : 1 }}
              onMouseEnter={e => { if (!isActive && !item.locked) e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = item.locked ? 'transparent' : 'transparent'; }}
            >
              <span style={{ opacity: isActive ? 1 : 0.85, display: 'flex' }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', padding: '1px 6px', borderRadius: 4 }}>{item.badge}</span>}
              {item.locked && <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.55)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>}
            </button>
          );
        })}
      </nav>

      {/* Premium card */}
      {!isPremiumPlus && (
        <div style={{ margin: '14px 0 10px', padding: 14, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, flexShrink: 0 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 6 }}>Plan Essentiel</div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', margin: '0 0 10px', lineHeight: 1.45 }}>Débloquez Progression, Objectifs &amp; Classement</p>
          <Link href="/tarifs" style={{ display: 'block', padding: '7px 12px', background: 'white', color: '#7a1a2b', borderRadius: 8, fontSize: 12, fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>Passer Premium →</Link>
        </div>
      )}

      {/* User + logout */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 2px 6px' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', color: 'white', fontSize: 11.5, fontWeight: 700, flexShrink: 0 }}>{firstName[0].toUpperCase()}</div>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.9)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{firstName}</span>
          <button onClick={() => setActiveSection('account')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: 2, display: 'flex' }} title="Mon compte">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
          </button>
        </div>
        <button onClick={logOut} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 2px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffb4b8', fontSize: 12, fontWeight: 500, width: '100%' }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg>
          Se déconnecter
        </button>
      </div>
    </div>
  );

  const sidebarStyle = {
    width: 248, flexShrink: 0, background: '#7a1a2b',
    padding: '18px 14px', height: '100vh', overflowY: 'auto',
    boxSizing: 'border-box',
  };

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:block" style={sidebarStyle}>
        <SidebarInner />
      </aside>
      {/* Mobile drawer */}
      <div className="md:hidden" style={{ ...sidebarStyle, position: 'fixed', top: 0, left: drawerOpen ? 0 : -260, zIndex: 20, transition: 'left 240ms ease', width: 260 }}>
        <SidebarInner />
      </div>
    </>
  );
}

/* ============================================================
   OVERVIEW SECTION
   ============================================================ */
function OverviewSection({ data, firstName, specialOpen, setSpecialOpen }) {
  const today = new Date();
  const FR_DAYS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const FR_MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const dateStr = `${FR_DAYS[today.getDay()]} ${today.getDate()} ${FR_MONTHS[today.getMonth()]}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* Topbar desktop */}
      <div className="hidden md:flex" style={{ alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 4 }}>
        <span style={{ fontSize: 13, color: '#9da3ae' }}>{dateStr}</span>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#7a1a2b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12.5, fontWeight: 700 }}>
          {firstName[0].toUpperCase()}
        </div>
      </div>

      {/* Greeting */}
      <h1 className="hidden md:block" style={{ fontFamily: "'Source Serif 4', serif", fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: '#1e2128', margin: 0 }}>
        Bonjour {firstName}
      </h1>

      {/* Hero card */}
      <div style={{ background: 'linear-gradient(135deg, #8b2035 0%, #a83450 55%, #c25570 100%)', borderRadius: 14, padding: '22px 120px 22px 26px', position: 'relative', overflow: 'hidden', color: 'white', minHeight: 100 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.75, marginBottom: 6, textTransform: 'uppercase' }}>Bienvenue</div>
        <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 21, fontWeight: 600, margin: '0 0 7px', lineHeight: 1.25 }}>Deux épreuves, un seul terrain d&apos;entraînement</h2>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, opacity: 0.88, margin: 0 }}>Côté écrit : note de synthèse, obligations, spécialité, procédure. Côté oral : Grand Oral et Anglais juridique.</p>
        {/* Seal */}
        <div style={{ position: 'absolute', right: 22, top: '50%', transform: 'translateY(-50%)', width: 78, height: 78, borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.35)', display: 'grid', placeItems: 'center' }}>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.82)', textAlign: 'center', lineHeight: 1.1 }}>CRFPA</span>
        </div>
        <div style={{ position: 'absolute', top: -50, right: 100, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      {/* KPI row */}
      <CRFPAKPIRow data={data} />

      {/* Two-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <ColumnPane kind="ecrit" title="Épreuves écrites" sub="Synthèse · Obligations · Spécialité · Procédure" subjects={ECRIT_SUBJECTS} specialOpen={specialOpen} setSpecialOpen={setSpecialOpen} />
        <ColumnPane kind="oral" title="Épreuves orales" sub="Grand Oral · Anglais juridique" subjects={ORAL_SUBJECTS} />
      </div>

      {/* Suggest footer */}
      <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', background: '#ffffff', border: '1px solid #e8eaed', borderRadius: 10, textDecoration: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f0f2f5', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', margin: 0 }}>Un bug ou une suggestion ?</p>
          <p style={{ fontSize: 11.5, color: '#9da3ae', margin: 0 }}>Aidez-nous à améliorer la plateforme</p>
        </div>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c0c4cc" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
      </Link>
    </div>
  );
}


/* ============================================================
   CRFPA KPI ROW
   ============================================================ */
function CRFPAKPIRow({ data }) {
  const kpis = [
    {
      label: 'Jours consécutifs',
      value: data.currentStreak > 0 ? `${data.currentStreak}j` : '0j',
      icoColor: '#b07a0a', icoFill: '#fff4d6',
      icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /></svg>,
    },
    {
      label: 'Score moyen',
      value: data.hasAnySessions ? `${data.avgScore}%` : '—',
      icoColor: '#2e6a47', icoFill: '#e3f1e8',
      icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>,
    },
    {
      label: 'Cette semaine',
      value: `${data.thisWeekSessions}`,
      suffix: 'sessions',
      icoColor: '#345f8a', icoFill: '#e1ebf6',
      icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
    },
    {
      label: 'Progression',
      value: data.trend === 'up' ? '↑' : data.trend === 'down' ? '↓' : data.trend === 'stable' ? '→' : '—',
      icoColor: '#4f4287', icoFill: '#ece6f5',
      icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>,
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
      {kpis.map((kpi, i) => (
        <div key={i} style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: kpi.icoFill, display: 'grid', placeItems: 'center', color: kpi.icoColor, flexShrink: 0, opacity: 0.9 }}>
            {kpi.icon}
          </div>
          <div>
            <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em', color: '#9da3ae', textTransform: 'uppercase', lineHeight: 1.3 }}>{kpi.label}</div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', color: '#1e2128', lineHeight: 1.15 }}>
              {kpi.value}
              {kpi.suffix && <span style={{ fontSize: 11, fontWeight: 500, color: '#9da3ae', marginLeft: 3 }}>{kpi.suffix}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   COLUMN PANE (Écrites | Oraux)
   ============================================================ */
function ColumnPane({ kind, title, sub, subjects, specialOpen, setSpecialOpen }) {
  const accent = kind === 'ecrit' ? '#7a1a2b' : '#4f4287';
  const icoFill = kind === 'ecrit' ? '#f9e9ec' : '#ece6f5';
  const href = kind === 'ecrit' ? '/entrainement-ecrits' : '/entrainement-oraux';

  const PaneIcon = kind === 'ecrit'
    ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" /></svg>
    : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>;

  return (
    <div style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: 14, padding: '18px 18px 20px', borderTop: `2px solid ${accent}`, display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, display: 'grid', placeItems: 'center', background: icoFill, color: accent, flexShrink: 0 }}>
          {PaneIcon}
        </div>
        <div>
          <h3 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 17, fontWeight: 600, margin: 0, color: '#1c1410' }}>{title}</h3>
          <p style={{ fontSize: 11.5, color: '#8a766f', margin: 0, lineHeight: 1.3 }}>{sub}</p>
        </div>
      </div>

      {/* Subject tiles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {subjects.map(s => {
          const ts = TONE_STYLES[s.tone] || { bg: '#f5f5f5', border: '#ddd', code: '#555' };
          const isE3 = s.code === 'E3';

          if (isE3) {
            return (
              <div key={s.code}>
                <button
                  onClick={() => setSpecialOpen && setSpecialOpen(!specialOpen)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '11px 14px', borderRadius: 10, border: `1px solid ${ts.border}`, background: ts.bg, cursor: 'pointer', textAlign: 'left', transition: 'transform 120ms, box-shadow 120ms', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px -10px rgba(0,0,0,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', color: ts.code, textTransform: 'uppercase', opacity: 0.85 }}>{s.code}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1c1410' }}>{s.name}</div>
                  </div>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={ts.code} strokeWidth="2" style={{ transform: specialOpen ? 'rotate(180deg)' : '', transition: 'transform 120ms', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                {specialOpen && (
                  <div style={{ marginTop: 4, padding: '6px 8px', background: '#f0edf9', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {SPECIALITES.map(sp => (
                      <Link key={sp} href="/entrainement-ecrits" style={{ fontSize: 12.5, color: '#553c7a', padding: '5px 8px', borderRadius: 6, textDecoration: 'none', display: 'block', transition: 'background 80ms' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#e2d9f3'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        {sp}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link key={s.code} href={href}
              style={{ display: 'flex', flexDirection: 'column', padding: '11px 14px', borderRadius: 10, border: `1px solid ${ts.border}`, background: ts.bg, textDecoration: 'none', transition: 'transform 120ms, box-shadow 120ms' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px -10px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', color: ts.code, textTransform: 'uppercase', opacity: 0.85 }}>{s.code}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1c1410' }}>{s.name}</div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <Link href={href} style={{ display: 'block', marginTop: 14, border: `1px dashed ${accent}88`, background: 'transparent', color: accent, padding: '10px 12px', borderRadius: 9, fontWeight: 600, fontSize: 12.5, cursor: 'pointer', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box', transition: 'background 120ms' }}
        onMouseEnter={e => e.currentTarget.style.background = kind === 'ecrit' ? '#f9e9ec' : '#ece6f5'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        + Lancer une session {kind === 'ecrit' ? 'écrite' : 'orale'}
      </Link>
    </div>
  );
}

/* ============================================================
   STAT CARD
   ============================================================ */
function StatCard({ label, value, icon, badge, trend, sublabel, tint }) {
  return (
    <div className={`rounded-2xl border p-5 shadow-sm hover:-translate-y-[2px] transition-transform ${tint || 'bg-white border-gray-100'}`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
        {badge && <span className="text-base">{badge}</span>}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-2xl font-black text-gray-900">{value}</p>
        {sublabel && <span className="text-xs text-gray-400 mt-1">{sublabel}</span>}
        {trend === 'up' && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">↑</span>}
        {trend === 'down' && <span className="text-xs font-bold text-red-500 bg-red-100 px-1.5 py-0.5 rounded-full">↓</span>}
        {trend === 'stable' && <span className="text-xs font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">→</span>}
      </div>
    </div>
  );
}

/* ============================================================
   EMPTY STATE
   ============================================================ */
function EmptyState({ title, description, ctaHref, ctaLabel }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" /></svg>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-5">{description}</p>
      {ctaHref && <Link href={ctaHref} className="inline-flex px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors">{ctaLabel || 'Commencer maintenant'}</Link>}
    </div>
  );
}

/* ============================================================
   PREMIUM LOCK
   ============================================================ */
function PremiumLock({ title, description }) {
  return (
    <div className="relative">
      <div className="pointer-events-none select-none" style={{ filter: 'blur(5px)' }}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-64">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-100 rounded w-5/6 mb-2"></div>
          <div className="h-3 bg-gray-100 rounded w-2/3 mb-6"></div>
          <div className="grid grid-cols-3 gap-3"><div className="h-16 bg-gray-100 rounded-lg"></div><div className="h-16 bg-gray-100 rounded-lg"></div><div className="h-16 bg-gray-100 rounded-lg"></div></div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg p-8 max-w-sm mx-4">
          <div className="w-14 h-14 bg-[#b91c1c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-[#991b1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-5">{description}</p>
          <Link href="/tarifs" className="inline-flex px-6 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors">Passer au Premium+</Link>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MINI PROGRESS RING
   ============================================================ */
function MiniProgressRing({ value, max, color }) {
  const pct = Math.min(100, Math.round((value / Math.max(max, 1)) * 100));
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  return (
    <div className="relative w-20 h-20 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
        <circle cx="40" cy="40" r={radius} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 0.6s ease' }} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-gray-900">{pct}%</span>
    </div>
  );
}

/* ============================================================
   SCORE LINE CHART
   ============================================================ */
function ScoreLineChart({ points }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  if (!points || points.length === 0) return <p className="text-sm text-gray-400 text-center py-8">Pas assez de donnees pour afficher le graphique.</p>;
  const W = 600; const H = 200; const padLeft = 40; const padRight = 20; const padTop = 24; const padBottom = 32;
  const chartW = W - padLeft - padRight; const chartH = H - padTop - padBottom;
  const minVal = 0; const maxVal = 100;
  const getX = (i) => padLeft + (points.length === 1 ? chartW / 2 : (i / (points.length - 1)) * chartW);
  const getY = (v) => padTop + chartH - ((v - minVal) / (maxVal - minVal)) * chartH;
  const linePoints = points.map((p, i) => `${getX(i)},${getY(p.value)}`).join(' ');
  const areaPath = `M${getX(0)},${getY(points[0].value)} ${points.map((p, i) => `L${getX(i)},${getY(p.value)}`).join(' ')} L${getX(points.length - 1)},${padTop + chartH} L${getX(0)},${padTop + chartH} Z`;
  const yTicks = [0, 25, 50, 75, 100];
  const maxLabels = points.length <= 10 ? points.length : Math.min(points.length, 8);
  const labelStep = Math.max(1, Math.ceil(points.length / maxLabels));
  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet" onMouseLeave={() => setHoveredIndex(null)}>
        <defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c92150" stopOpacity="0.2" /><stop offset="100%" stopColor="#c92150" stopOpacity="0.02" /></linearGradient></defs>
        {yTicks.map(tick => (<g key={tick}><line x1={padLeft} y1={getY(tick)} x2={W - padRight} y2={getY(tick)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray={tick === 0 ? 'none' : '4 4'} /><text x={padLeft - 6} y={getY(tick) + 4} textAnchor="end" className="text-[10px]" fill="#9ca3af">{tick}%</text></g>))}
        <path d={areaPath} fill="url(#chartGradient)" />
        <polyline points={linePoints} fill="none" stroke="#c92150" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => { const cx = getX(i); const cy = getY(p.value); const isHovered = hoveredIndex === i; return (<g key={i} onMouseEnter={() => setHoveredIndex(i)} style={{ cursor: 'pointer' }}><circle cx={cx} cy={cy} r={16} fill="transparent" /><circle cx={cx} cy={cy} r={isHovered ? 5.5 : 3.5} fill={isHovered ? '#c92150' : '#fff'} stroke="#c92150" strokeWidth="2" style={{ transition: 'r 0.15s ease' }} />{isHovered && (<g><rect x={cx - 24} y={cy - 28} width="48" height="20" rx="6" fill="#1f2937" /><text x={cx} y={cy - 15} textAnchor="middle" fill="#fff" className="text-[11px]" fontWeight="700">{p.value}%</text></g>)}</g>); })}
        {points.map((p, i) => { if (i % labelStep !== 0 && i !== points.length - 1) return null; return (<text key={i} x={getX(i)} y={H - 6} textAnchor="middle" className="text-[10px]" fill="#9ca3af">{p.label}</text>); })}
      </svg>
    </div>
  );
}

/* ============================================================
   FAKE USERS DATA (120 utilisateurs simulés)
   ============================================================ */
const BASE_USERS = [
  { name: 'Emma L.', baseAvg: 82, baseSessions: 230, growth: 0.18 },
  { name: 'Lucas M.', baseAvg: 80, baseSessions: 210, growth: 0.16 },
  { name: 'Jade F.', baseAvg: 79, baseSessions: 195, growth: 0.17 },
  { name: 'Hugo D.', baseAvg: 77, baseSessions: 185, growth: 0.15 },
  { name: 'Chloé B.', baseAvg: 76, baseSessions: 178, growth: 0.14 },
  { name: 'Arthur C.', baseAvg: 75, baseSessions: 165, growth: 0.15 },
  { name: 'Léa R.', baseAvg: 74, baseSessions: 158, growth: 0.13 },
  { name: 'Inès T.', baseAvg: 73, baseSessions: 148, growth: 0.14 },
  { name: 'Raphaël K.', baseAvg: 72, baseSessions: 140, growth: 0.12 },
  { name: 'Alice G.', baseAvg: 71, baseSessions: 132, growth: 0.13 },
  { name: 'Gabriel N.', baseAvg: 70, baseSessions: 125, growth: 0.11 },
  { name: 'Lina P.', baseAvg: 70, baseSessions: 120, growth: 0.12 },
  { name: 'Théo A.', baseAvg: 69, baseSessions: 115, growth: 0.11 },
  { name: 'Margot V.', baseAvg: 68, baseSessions: 110, growth: 0.10 },
  { name: 'Noah S.', baseAvg: 68, baseSessions: 105, growth: 0.11 },
  { name: 'Zoé H.', baseAvg: 67, baseSessions: 98, growth: 0.10 },
  { name: 'Adam B.', baseAvg: 67, baseSessions: 95, growth: 0.09 },
  { name: 'Juliette M.', baseAvg: 66, baseSessions: 92, growth: 0.10 },
  { name: 'Louis R.', baseAvg: 66, baseSessions: 88, growth: 0.09 },
  { name: 'Rose D.', baseAvg: 65, baseSessions: 85, growth: 0.08 },
  { name: 'Nathan P.', baseAvg: 64, baseSessions: 95, growth: 0.08 },
  { name: 'Camille V.', baseAvg: 63, baseSessions: 90, growth: 0.08 },
  { name: 'Jules A.', baseAvg: 63, baseSessions: 88, growth: 0.07 },
  { name: 'Sarah H.', baseAvg: 62, baseSessions: 85, growth: 0.08 },
  { name: 'Mathis L.', baseAvg: 62, baseSessions: 82, growth: 0.07 },
  { name: 'Eva P.', baseAvg: 61, baseSessions: 78, growth: 0.07 },
  { name: 'Léo T.', baseAvg: 61, baseSessions: 76, growth: 0.06 },
  { name: 'Anaïs M.', baseAvg: 60, baseSessions: 74, growth: 0.07 },
  { name: 'Tom B.', baseAvg: 60, baseSessions: 72, growth: 0.06 },
  { name: 'Clara D.', baseAvg: 59, baseSessions: 70, growth: 0.06 },
  { name: 'Maxime R.', baseAvg: 59, baseSessions: 68, growth: 0.05 },
  { name: 'Manon S.', baseAvg: 58, baseSessions: 66, growth: 0.06 },
  { name: 'Enzo C.', baseAvg: 58, baseSessions: 64, growth: 0.05 },
  { name: 'Charlotte F.', baseAvg: 57, baseSessions: 62, growth: 0.06 },
  { name: 'Axel N.', baseAvg: 57, baseSessions: 60, growth: 0.05 },
  { name: 'Ambre G.', baseAvg: 56, baseSessions: 58, growth: 0.05 },
  { name: 'Victor J.', baseAvg: 56, baseSessions: 56, growth: 0.04 },
  { name: 'Océane K.', baseAvg: 55, baseSessions: 55, growth: 0.05 },
  { name: 'Paul E.', baseAvg: 55, baseSessions: 53, growth: 0.04 },
  { name: 'Mila B.', baseAvg: 55, baseSessions: 52, growth: 0.05 },
  { name: 'Antoine L.', baseAvg: 54, baseSessions: 50, growth: 0.04 },
  { name: 'Clémence R.', baseAvg: 54, baseSessions: 48, growth: 0.04 },
  { name: 'Alexandre D.', baseAvg: 53, baseSessions: 47, growth: 0.04 },
  { name: 'Lucie S.', baseAvg: 53, baseSessions: 46, growth: 0.04 },
  { name: 'Romain H.', baseAvg: 53, baseSessions: 45, growth: 0.03 },
  { name: 'Pauline T.', baseAvg: 52, baseSessions: 44, growth: 0.04 },
  { name: 'Émile V.', baseAvg: 52, baseSessions: 43, growth: 0.03 },
  { name: 'Yasmine A.', baseAvg: 52, baseSessions: 42, growth: 0.04 },
  { name: 'Bastien M.', baseAvg: 52, baseSessions: 41, growth: 0.03 },
  { name: 'Noémie C.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Valentin P.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Marine F.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Simon G.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Elisa B.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Tristan K.', baseAvg: 52, baseSessions: 40, growth: 0.03 },
  { name: 'Maëlys D.', baseAvg: 51, baseSessions: 48, growth: 0.03 },
  { name: 'Corentin R.', baseAvg: 50, baseSessions: 45, growth: 0.03 },
  { name: 'Justine L.', baseAvg: 50, baseSessions: 43, growth: 0.02 },
  { name: 'Dylan M.', baseAvg: 49, baseSessions: 42, growth: 0.03 },
  { name: 'Agathe S.', baseAvg: 49, baseSessions: 40, growth: 0.02 },
  { name: 'Kylian T.', baseAvg: 48, baseSessions: 38, growth: 0.02 },
  { name: 'Léonie V.', baseAvg: 48, baseSessions: 37, growth: 0.02 },
  { name: 'Mattéo F.', baseAvg: 47, baseSessions: 36, growth: 0.02 },
  { name: 'Alicia N.', baseAvg: 47, baseSessions: 35, growth: 0.02 },
  { name: 'Robin H.', baseAvg: 46, baseSessions: 34, growth: 0.02 },
  { name: 'Célia P.', baseAvg: 46, baseSessions: 33, growth: 0.02 },
  { name: 'Nolan G.', baseAvg: 45, baseSessions: 32, growth: 0.02 },
  { name: 'Laura J.', baseAvg: 45, baseSessions: 31, growth: 0.01 },
  { name: 'Sacha B.', baseAvg: 44, baseSessions: 30, growth: 0.02 },
  { name: 'Capucine E.', baseAvg: 44, baseSessions: 29, growth: 0.01 },
  { name: 'Thibault A.', baseAvg: 43, baseSessions: 28, growth: 0.02 },
  { name: 'Lola K.', baseAvg: 43, baseSessions: 27, growth: 0.01 },
  { name: 'Quentin D.', baseAvg: 42, baseSessions: 26, growth: 0.01 },
  { name: 'Romane C.', baseAvg: 42, baseSessions: 25, growth: 0.01 },
  { name: 'Baptiste L.', baseAvg: 41, baseSessions: 25, growth: 0.01 },
  { name: 'Margaux V.', baseAvg: 41, baseSessions: 24, growth: 0.01 },
  { name: 'Alexis R.', baseAvg: 40, baseSessions: 23, growth: 0.01 },
  { name: 'Héloïse M.', baseAvg: 40, baseSessions: 23, growth: 0.01 },
  { name: 'Florian T.', baseAvg: 39, baseSessions: 22, growth: 0.01 },
  { name: 'Salomé H.', baseAvg: 39, baseSessions: 22, growth: 0.01 },
  { name: 'Aurélien F.', baseAvg: 38, baseSessions: 21, growth: 0.01 },
  { name: 'Nina S.', baseAvg: 38, baseSessions: 21, growth: 0.01 },
  { name: 'Timothée P.', baseAvg: 37, baseSessions: 22, growth: 0.01 },
  { name: 'Élise G.', baseAvg: 36, baseSessions: 20, growth: 0.01 },
  { name: 'Dorian B.', baseAvg: 35, baseSessions: 19, growth: 0.01 },
  { name: 'Maëlle J.', baseAvg: 34, baseSessions: 18, growth: 0.01 },
  { name: 'Kévin N.', baseAvg: 34, baseSessions: 17, growth: 0.005 },
  { name: 'Lilou D.', baseAvg: 33, baseSessions: 16, growth: 0.01 },
  { name: 'Rémi A.', baseAvg: 32, baseSessions: 15, growth: 0.005 },
  { name: 'Apolline C.', baseAvg: 32, baseSessions: 15, growth: 0.005 },
  { name: 'Erwan K.', baseAvg: 31, baseSessions: 14, growth: 0.005 },
  { name: 'Constance L.', baseAvg: 30, baseSessions: 13, growth: 0.005 },
  { name: 'Gabin R.', baseAvg: 29, baseSessions: 12, growth: 0.005 },
  { name: 'Adèle V.', baseAvg: 28, baseSessions: 12, growth: 0.005 },
  { name: 'Mathieu T.', baseAvg: 27, baseSessions: 11, growth: 0.003 },
  { name: 'Victoire F.', baseAvg: 27, baseSessions: 10, growth: 0.005 },
  { name: 'Clément S.', baseAvg: 26, baseSessions: 10, growth: 0.003 },
  { name: 'Alix M.', baseAvg: 25, baseSessions: 9, growth: 0.003 },
  { name: 'Loïs H.', baseAvg: 25, baseSessions: 9, growth: 0.003 },
  { name: 'Diane P.', baseAvg: 24, baseSessions: 8, growth: 0.003 },
  { name: 'Eliott B.', baseAvg: 23, baseSessions: 8, growth: 0.003 },
  { name: 'Faustine G.', baseAvg: 22, baseSessions: 8, growth: 0.003 },
  { name: 'Timéo H.', baseAvg: 28, baseSessions: 8, growth: 0 },
  { name: 'Léna F.', baseAvg: 26, baseSessions: 7, growth: 0 },
  { name: 'Malo R.', baseAvg: 24, baseSessions: 6, growth: 0 },
  { name: 'Iris D.', baseAvg: 23, baseSessions: 5, growth: 0 },
  { name: 'Ethan J.', baseAvg: 22, baseSessions: 5, growth: 0 },
  { name: 'Lison V.', baseAvg: 21, baseSessions: 4, growth: 0 },
  { name: 'Oscar T.', baseAvg: 19, baseSessions: 4, growth: 0 },
  { name: 'Célestine B.', baseAvg: 18, baseSessions: 3, growth: 0 },
  { name: 'Ismaël K.', baseAvg: 17, baseSessions: 3, growth: 0 },
  { name: 'Colombe A.', baseAvg: 16, baseSessions: 3, growth: 0 },
  { name: 'Ruben M.', baseAvg: 14, baseSessions: 2, growth: 0 },
  { name: 'Éléonore S.', baseAvg: 13, baseSessions: 2, growth: 0 },
  { name: 'Naël C.', baseAvg: 12, baseSessions: 2, growth: 0 },
  { name: 'Blanche L.', baseAvg: 11, baseSessions: 1, growth: 0 },
  { name: 'Solal P.', baseAvg: 10, baseSessions: 1, growth: 0 },
];

function generateFakeUsers() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today - startOfYear) / 86400000);
  return BASE_USERS.map((u, i) => {
    const seed = Math.sin((dayOfYear + 1) * (i + 1) * 9301) * 10000;
    const rand = Math.abs(seed - Math.floor(seed));
    const avgVariation = Math.round((rand - 0.5) * 6);
    const avg = Math.max(15, Math.min(98, u.baseAvg + avgVariation));
    const sessionGrowth = Math.floor(dayOfYear * u.growth);
    const sessionVariation = Math.floor(rand * 3);
    const sessions = u.baseSessions + sessionGrowth + sessionVariation;
    return { name: u.name, avg, sessions };
  });
}

/* ============================================================
   CLASSEMENT SECTION
   ============================================================ */
function ClassementSection({ allSessions }) {
  const userAvg = allSessions.length > 0 ? Math.round(allSessions.reduce((sum, s) => sum + (s.percentage || 0), 0) / allSessions.length) : 0;
  const userSessionCount = allSessions.length;
  const [expandedGaps, setExpandedGaps] = useState(new Set());
  const fakeUsers = generateFakeUsers();
  const allRanked = [...fakeUsers, { name: 'Vous', avg: userAvg, sessions: userSessionCount, isUser: true }].sort((a, b) => b.avg - a.avg);
  const userRank = allRanked.findIndex(u => u.isUser) + 1;
  const totalParticipants = allRanked.length;
  const percentile = Math.round(((totalParticipants - userRank) / totalParticipants) * 100);
  const medals = ['🥇', '🥈', '🥉'];
  const baseVisible = new Set();
  for (let i = 0; i < Math.min(10, allRanked.length); i++) baseVisible.add(i);
  const userIdx = userRank - 1;
  for (let i = Math.max(0, userIdx - 3); i <= Math.min(allRanked.length - 1, userIdx + 3); i++) baseVisible.add(i);
  for (let i = Math.max(0, allRanked.length - 3); i < allRanked.length; i++) baseVisible.add(i);
  const baseIndices = [...baseVisible].sort((a, b) => a - b);
  const gaps = [];
  for (let p = 1; p < baseIndices.length; p++) { if (baseIndices[p] - baseIndices[p - 1] > 1) { const from = baseIndices[p - 1] + 1; const to = baseIndices[p] - 1; gaps.push({ from, to, key: `${from}-${to}` }); } }
  const visibleSet = new Set(baseVisible);
  for (const gap of gaps) { if (expandedGaps.has(gap.key)) { for (let i = gap.from; i <= gap.to; i++) visibleSet.add(i); } }
  const visibleIndices = [...visibleSet].sort((a, b) => a - b);
  const toggleGap = (gapKey) => { setExpandedGaps(prev => { const next = new Set(prev); if (next.has(gapKey)) next.delete(gapKey); else next.add(gapKey); return next; }); };
  const rows = [];
  for (let pos = 0; pos < visibleIndices.length; pos++) { const idx = visibleIndices[pos]; if (pos > 0 && visibleIndices[pos - 1] < idx - 1) { const gap = gaps.find(g => g.from === visibleIndices[pos - 1] + 1); if (gap) rows.push({ type: 'gap', gap }); } rows.push({ type: 'user', idx, user: allRanked[idx] }); }
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span>Classement</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Votre position</p><p className="text-3xl font-black text-gray-900">{userRank}<span className="text-lg text-gray-400">/{totalParticipants}</span></p></div>
          <div><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Percentile</p><p className="text-3xl font-black text-[#991b1b]">Top {Math.max(1, 100 - percentile)}%</p></div>
          <div><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Score moyen</p><p className={`text-3xl font-black ${scoreClass(userAvg)}`}>{userAvg}%</p></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-50/80 border-b border-gray-100"><th className="text-center py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-16">Rang</th><th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Étudiant</th><th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Score moy.</th><th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sessions</th></tr></thead>
            <tbody>
              {rows.map((row, i) => {
                if (row.type === 'gap') { const isExpanded = expandedGaps.has(row.gap.key); const hiddenCount = row.gap.to - row.gap.from + 1; return (<tr key={`gap-${row.gap.key}`} onClick={() => toggleGap(row.gap.key)} className="cursor-pointer hover:bg-gray-50 transition-colors"><td colSpan="4" className="py-2 text-center text-xs text-gray-400"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">{isExpanded ? (<><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>Masquer</>) : (<><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>Afficher {hiddenCount} étudiant{hiddenCount > 1 ? 's' : ''}</>)}</span></td></tr>); }
                const u = row.user; const rank = row.idx + 1; const medal = rank <= 3 ? medals[rank - 1] : `${rank}`;
                return (<tr key={row.idx} className={`border-b hover:bg-gray-50/50 ${u.isUser ? 'bg-slate-50 border-slate-200 font-bold' : 'border-gray-50'}`}><td className="py-3 px-4 text-center text-lg">{medal}</td><td className={`py-3 px-4 text-sm ${u.isUser ? 'text-slate-700 font-bold' : 'text-gray-700'}`}>{u.name}</td><td className="py-3 px-4"><span className={`text-sm font-bold ${scoreClass(u.avg)}`}>{u.avg}%</span></td><td className="py-3 px-4 text-sm text-gray-500">{u.sessions}</td></tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FICHES SUBJECT COLORS
   ============================================================ */
const FICHES_SUBJECT_COLORS = {
  indigo:  { badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500', icon: 'text-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-100', pill: 'bg-indigo-600 text-white', pillIdle: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500', icon: 'text-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-100', pill: 'bg-emerald-600 text-white', pillIdle: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' },
  violet:  { badge: 'bg-violet-100 text-violet-700', bar: 'bg-violet-500', icon: 'text-violet-500', light: 'bg-violet-50', border: 'border-violet-100', pill: 'bg-violet-600 text-white', pillIdle: 'bg-violet-50 text-violet-700 hover:bg-violet-100' },
  cyan:    { badge: 'bg-cyan-100 text-cyan-700', bar: 'bg-cyan-500', icon: 'text-cyan-500', light: 'bg-cyan-50', border: 'border-cyan-100', pill: 'bg-cyan-600 text-white', pillIdle: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100' },
  rose:    { badge: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500', icon: 'text-rose-500', light: 'bg-rose-50', border: 'border-rose-100', pill: 'bg-rose-600 text-white', pillIdle: 'bg-rose-50 text-rose-700 hover:bg-rose-100' },
  amber:   { badge: 'bg-amber-100 text-amber-700', bar: 'bg-amber-500', icon: 'text-amber-500', light: 'bg-amber-50', border: 'border-amber-100', pill: 'bg-amber-600 text-white', pillIdle: 'bg-amber-50 text-amber-700 hover:bg-amber-100' },
  teal:    { badge: 'bg-teal-100 text-teal-700', bar: 'bg-teal-500', icon: 'text-teal-500', light: 'bg-teal-50', border: 'border-teal-100', pill: 'bg-teal-600 text-white', pillIdle: 'bg-teal-50 text-teal-700 hover:bg-teal-100' },
  sky:     { badge: 'bg-sky-100 text-sky-700', bar: 'bg-sky-500', icon: 'text-sky-500', light: 'bg-sky-50', border: 'border-sky-100', pill: 'bg-sky-600 text-white', pillIdle: 'bg-sky-50 text-sky-700 hover:bg-sky-100' },
  lime:    { badge: 'bg-lime-100 text-lime-700', bar: 'bg-lime-500', icon: 'text-lime-500', light: 'bg-lime-50', border: 'border-lime-100', pill: 'bg-lime-600 text-white', pillIdle: 'bg-lime-50 text-lime-700 hover:bg-lime-100' },
  orange:  { badge: 'bg-orange-100 text-orange-700', bar: 'bg-orange-500', icon: 'text-orange-500', light: 'bg-orange-50', border: 'border-orange-100', pill: 'bg-orange-600 text-white', pillIdle: 'bg-orange-50 text-orange-700 hover:bg-orange-100' },
  yellow:  { badge: 'bg-yellow-100 text-yellow-700', bar: 'bg-yellow-500', icon: 'text-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-100', pill: 'bg-yellow-600 text-white', pillIdle: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100' },
  slate:   { badge: 'bg-slate-100 text-slate-700', bar: 'bg-slate-500', icon: 'text-slate-500', light: 'bg-slate-50', border: 'border-slate-100', pill: 'bg-slate-600 text-white', pillIdle: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  purple:  { badge: 'bg-purple-100 text-purple-700', bar: 'bg-purple-500', icon: 'text-purple-500', light: 'bg-purple-50', border: 'border-purple-100', pill: 'bg-purple-600 text-white', pillIdle: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
  red:     { badge: 'bg-red-100 text-red-700', bar: 'bg-red-500', icon: 'text-red-500', light: 'bg-red-50', border: 'border-red-100', pill: 'bg-red-600 text-white', pillIdle: 'bg-red-50 text-red-700 hover:bg-red-100' },
  primary: { badge: 'bg-red-100 text-red-700', bar: 'bg-red-500', icon: 'text-red-500', light: 'bg-red-50', border: 'border-red-100', pill: 'bg-red-700 text-white', pillIdle: 'bg-red-50 text-red-700 hover:bg-red-100' },
};

/* ============================================================
   FICHES SECTION
   ============================================================ */
function FichesSection({ activeFicheSubject, setActiveFicheSubject, isPremiumPlus, onOpenFiche }) {
  const filteredFiches = activeFicheSubject === 'all'
    ? FICHES_DATA
    : FICHES_DATA.filter(f => f.subject === activeFicheSubject);

  const activeSubject = SUBJECTS.find(s => s.id === activeFicheSubject);
  const activePalette = activeSubject ? (FICHES_SUBJECT_COLORS[activeSubject.color] || FICHES_SUBJECT_COLORS.primary) : FICHES_SUBJECT_COLORS.primary;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
          Fiches &amp; Cours
        </h3>
        <p className="text-sm text-gray-500 mb-5">Révisez vos fiches de synthèse et accédez aux cours détaillés.</p>

        {/* Subject filter pills */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveFicheSubject('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFicheSubject === 'all'
                ? 'bg-[#b91c1c] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Toutes ({FICHES_DATA.length})
          </button>
          {SUBJECTS.map(s => {
            const count = FICHES_DATA.filter(f => f.subject === s.id).length;
            if (count === 0) return null;
            const palette = FICHES_SUBJECT_COLORS[s.color] || FICHES_SUBJECT_COLORS.primary;
            const isActive = activeFicheSubject === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveFicheSubject(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive ? palette.pill : palette.pillIdle
                }`}
              >
                {s.name.length > 20 ? s.name.split(' ').slice(0, 2).join(' ') : s.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Fiche cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFiches.map((fiche, i) => {
          const subject = SUBJECTS.find(s => s.id === fiche.subject);
          const palette = subject ? (FICHES_SUBJECT_COLORS[subject.color] || FICHES_SUBJECT_COLORS.primary) : FICHES_SUBJECT_COLORS.primary;
          const isLocked = !isPremiumPlus && i >= 3;
          const iconPath = SUBJECT_ICONS[fiche.subject];

          return (
            <button
              key={fiche.id}
              onClick={() => !isLocked && onOpenFiche(fiche)}
              className={`text-left bg-white rounded-2xl border shadow-sm p-5 transition-all group ${
                isLocked
                  ? 'border-gray-100 cursor-default opacity-70'
                  : `${palette.border} hover:shadow-md hover:-translate-y-[2px] cursor-pointer`
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`w-10 h-10 ${palette.light} rounded-xl flex items-center justify-center shrink-0`}>
                  {iconPath ? (
                    <svg className={`w-5 h-5 ${palette.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                  ) : (
                    <svg className={`w-5 h-5 ${palette.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  )}
                </div>
                {isLocked ? (
                  <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                ) : (
                  <svg className={`w-4 h-4 text-gray-300 group-hover:${palette.icon} transition-colors shrink-0 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
              <p className="text-sm font-bold text-gray-900 group-hover:text-gray-700 leading-snug mb-2">{fiche.title}</p>
              {subject && (
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${palette.badge}`}>
                  {subject.name.length > 22 ? subject.name.split(' ').slice(0, 2).join(' ') : subject.name}
                </span>
              )}
              {isLocked && (
                <p className="text-[10px] text-gray-400 mt-2">Premium+ requis</p>
              )}
            </button>
          );
        })}
      </div>

      {!isPremiumPlus && FICHES_DATA.length > 3 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#991b1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <p className="text-sm font-bold text-gray-900 mb-1">{FICHES_DATA.length - 3} fiches supplémentaires avec Premium+</p>
          <p className="text-xs text-gray-500 mb-4">Accédez à l&apos;intégralité des fiches de révision et des cours détaillés.</p>
          <Link href="/tarifs" className="inline-flex px-5 py-2 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors">
            Passer au Premium+
          </Link>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   FICHE DETAIL MODAL
   ============================================================ */
function FicheDetailModal({ fiche, onClose, onOpenCours, coursLoading }) {
  const subject = SUBJECTS.find(s => s.id === fiche.subject);
  const palette = subject ? (FICHES_SUBJECT_COLORS[subject.color] || FICHES_SUBJECT_COLORS.primary) : FICHES_SUBJECT_COLORS.primary;
  const iconPath = SUBJECT_ICONS[fiche.subject];

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl mx-auto mt-8 mb-8 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className={`${palette.light} px-6 pt-6 pb-5 border-b ${palette.border}`}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
              {iconPath ? (
                <svg className={`w-6 h-6 ${palette.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${palette.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              {subject && (
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold ${palette.badge} mb-2`}>
                  {subject.name}
                </span>
              )}
              <h2 className="text-xl font-bold text-gray-900 leading-snug">{fiche.title}</h2>
            </div>
            <button onClick={onClose} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-white/80 hover:bg-white text-gray-500 hover:text-gray-900 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div
            className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: fiche.content }}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => onOpenCours(fiche)}
            disabled={coursLoading}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors disabled:opacity-60"
          >
            {coursLoading ? (
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            )}
            Voir le cours détaillé
          </button>
          <Link
            href="/entrainement-ecrits"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
            </svg>
            S&apos;entraîner à l&apos;écrit
          </Link>
          <button onClick={onClose} className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   COURS MODAL
   ============================================================ */
function CoursModal({ cours, fiche, onClose }) {
  const subject = SUBJECTS.find(s => s.id === fiche.subject);
  const palette = subject ? (FICHES_SUBJECT_COLORS[subject.color] || FICHES_SUBJECT_COLORS.primary) : FICHES_SUBJECT_COLORS.primary;

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl mx-auto mt-6 mb-6 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Hero */}
        <div className="shrink-0 px-8 pt-8 pb-6 text-white" style={{ background: 'linear-gradient(135deg, #450a0a 0%, #991b1b 60%, #b91c1c 100%)' }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {subject && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white/90 mb-3">
                  {subject.name}
                </span>
              )}
              <h2 className="text-2xl font-bold leading-snug mb-1">{cours.title || fiche.title}</h2>
              {cours.subtitle && <p className="text-sm text-white/70 mt-1">{cours.subtitle}</p>}
            </div>
            <button onClick={onClose} className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {cours.tags && cours.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {cours.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/15 text-white/90">{tag}</span>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div
            className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-h2:text-lg prose-h3:text-base"
            dangerouslySetInnerHTML={{ __html: cours.content || cours.html || '' }}
          />
        </div>

        {/* Footer */}
        <div className="shrink-0 px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between gap-3">
          <Link href="/entrainement-ecrits" className="flex items-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
            </svg>
            S&apos;entraîner
          </Link>
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ACCOUNT SECTION
   ============================================================ */
function AccountSection({ user, tier }) {
  const [emailForm, setEmailForm] = useState({ email: user?.email || '', loading: false, success: '', error: '' });
  const [pwForm, setPwForm] = useState({ password: '', confirm: '', loading: false, success: '', error: '' });

  async function handleEmailUpdate(e) {
    e.preventDefault();
    if (!emailForm.email || emailForm.email === user?.email) return;
    setEmailForm(f => ({ ...f, loading: true, success: '', error: '' }));
    const { error } = await supabase.auth.updateUser({ email: emailForm.email });
    if (error) {
      setEmailForm(f => ({ ...f, loading: false, error: error.message }));
    } else {
      setEmailForm(f => ({ ...f, loading: false, success: 'Un e-mail de confirmation a été envoyé à votre nouvelle adresse.' }));
    }
  }

  async function handlePasswordUpdate(e) {
    e.preventDefault();
    if (!pwForm.password || pwForm.password !== pwForm.confirm) {
      setPwForm(f => ({ ...f, error: 'Les mots de passe ne correspondent pas.' }));
      return;
    }
    if (pwForm.password.length < 8) {
      setPwForm(f => ({ ...f, error: 'Le mot de passe doit contenir au moins 8 caractères.' }));
      return;
    }
    setPwForm(f => ({ ...f, loading: true, success: '', error: '' }));
    const { error } = await supabase.auth.updateUser({ password: pwForm.password });
    if (error) {
      setPwForm(f => ({ ...f, loading: false, error: error.message }));
    } else {
      setPwForm(f => ({ ...f, loading: false, success: 'Mot de passe mis à jour avec succès.', password: '', confirm: '' }));
    }
  }

  const tierLabel = tier === 'premium+' ? 'Premium+' : tier === 'essentiel' ? 'Essentiel' : 'Gratuit';
  const tierColor = tier === 'premium+' ? 'bg-violet-100 text-violet-700' : tier === 'essentiel' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600';

  return (
    <div className="space-y-6">
      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          Mon profil
        </h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-[#b91c1c]/10 rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-[#991b1b]">
              {(user?.displayName || user?.email || 'U')[0].toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{user?.displayName || user?.email}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <span className={`inline-flex mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tierColor}`}>{tierLabel}</span>
          </div>
        </div>

        {/* Email update */}
        <form onSubmit={handleEmailUpdate} className="space-y-3 border-t border-gray-100 pt-5">
          <label className="block text-sm font-semibold text-gray-700">Changer d&apos;adresse e-mail</label>
          <input
            type="email"
            value={emailForm.email}
            onChange={e => setEmailForm(f => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/30 focus:border-[#b91c1c] transition-all"
            placeholder="nouvelle@adresse.com"
            required
          />
          {emailForm.error && <p className="text-xs text-red-600">{emailForm.error}</p>}
          {emailForm.success && <p className="text-xs text-emerald-600">{emailForm.success}</p>}
          <button
            type="submit"
            disabled={emailForm.loading || emailForm.email === user?.email}
            className="px-5 py-2 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors disabled:opacity-50"
          >
            {emailForm.loading ? 'Mise à jour...' : 'Mettre à jour l\'e-mail'}
          </button>
        </form>
      </div>

      {/* Password update */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          Changer le mot de passe
        </h3>
        <form onSubmit={handlePasswordUpdate} className="space-y-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nouveau mot de passe</label>
            <input
              type="password"
              value={pwForm.password}
              onChange={e => setPwForm(f => ({ ...f, password: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/30 focus:border-[#b91c1c] transition-all"
              placeholder="8 caractères minimum"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirmer le mot de passe</label>
            <input
              type="password"
              value={pwForm.confirm}
              onChange={e => setPwForm(f => ({ ...f, confirm: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/30 focus:border-[#b91c1c] transition-all"
              placeholder="Répétez le mot de passe"
              required
            />
          </div>
          {pwForm.error && <p className="text-xs text-red-600">{pwForm.error}</p>}
          {pwForm.success && <p className="text-xs text-emerald-600">{pwForm.success}</p>}
          <button
            type="submit"
            disabled={pwForm.loading}
            className="px-5 py-2 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors disabled:opacity-50"
          >
            {pwForm.loading ? 'Mise à jour...' : 'Changer le mot de passe'}
          </button>
        </form>
      </div>

      {/* Subscription */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400"></span>
          Abonnement
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-700">Plan actuel</p>
            <span className={`inline-flex mt-1 px-3 py-1 rounded-full text-sm font-bold ${tierColor}`}>{tierLabel}</span>
          </div>
          {tier !== 'premium+' && (
            <Link href="/tarifs" className="px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors">
              Passer au Premium+
            </Link>
          )}
        </div>
        {tier !== 'premium+' && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-3">Avec Premium+ : fiches illimitées, progression détaillée, objectifs, classement.</p>
            <Link href="/tarifs" className="text-xs font-semibold text-[#991b1b] hover:underline">
              Voir tous les avantages →
            </Link>
          </div>
        )}
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
        <h3 className="text-base font-bold text-red-700 mb-3">Zone dangereuse</h3>
        <p className="text-sm text-gray-500 mb-4">La suppression de votre compte est irréversible. Toutes vos données seront effacées.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          Contacter le support
        </Link>
      </div>
    </div>
  );
}
