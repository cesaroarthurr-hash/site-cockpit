import Link from "next/link";

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Politique de confidentialité</h1>
          <p className="text-sm text-gray-400">Dernière mise à jour : avril 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Responsable du traitement</h2>
            <p>SAHANEST SAS — contact@sahanest.fr</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Données collectées</h2>
            <p>Dans le cadre du formulaire de contact du site, nous collectons :</p>
            <ul className="mt-2 ml-4 list-disc flex flex-col gap-1 text-gray-500">
              <li>Nom et prénom</li>
              <li>Nom de la structure</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>
            <p className="mt-3">Ces données sont utilisées uniquement pour vous recontacter dans le cadre de votre demande de démonstration.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Base légale</h2>
            <p>Le traitement est fondé sur votre consentement explicite lors de la soumission du formulaire (article 6.1.a du RGPD).</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Conservation des données</h2>
            <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact. Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Hébergement et sécurité</h2>
            <p>Les données de santé traitées via la solution Cockpit sont hébergées sur une infrastructure certifiée <strong>HDS (Hébergeur de Données de Santé)</strong>, exclusivement en France. Les données du site vitrine transitent via Vercel et Resend, prestataires conformes au RGPD.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 ml-4 list-disc flex flex-col gap-1 text-gray-500">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo;&nbsp;droit à l&apos;oubli&nbsp;&raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@sahanest.fr" className="text-[#8DC63F] hover:underline">contact@sahanest.fr</a></p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Cookies</h2>
            <p>Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Réclamation</h2>
            <p>En cas de litige, vous pouvez déposer une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#8DC63F] hover:underline">www.cnil.fr</a></p>
          </section>

        </div>
      </div>
    </main>
  );
}
