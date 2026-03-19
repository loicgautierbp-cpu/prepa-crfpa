import ContactPage from './ContactClient';

export const metadata = {
  title: 'Contact - Prépa CRFPA',
  description: 'Contactez l\'équipe Prépa CRFPA. Signalez un bug, posez une question ou envoyez une suggestion.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
