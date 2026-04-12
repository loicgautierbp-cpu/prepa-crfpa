import EcritsClient from './EcritsClient';

export const metadata = {
  title: "Entraînement épreuves écrites",
  description: "Entraînez-vous aux épreuves écrites du CRFPA : note de synthèse, épreuve de spécialité et procédure. Exercices générés et corrigés.",
};

export default function EcritsPage() {
  return <EcritsClient />;
}
