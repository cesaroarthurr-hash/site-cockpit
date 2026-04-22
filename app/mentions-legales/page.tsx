import Link from "next/link";

export default function MentionsLegales() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentions légales</h1>
          <p className="text-sm text-gray-400">Dernière mise à jour : avril 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Éditeur du site</h2>
            <p><strong>SAHANEST SAS</strong><br />
            Société par Actions Simplifiée au capital de [X] €<br />
            SIRET : [À compléter]<br />
            Siège social : [Adresse à compléter]<br />
            Email : contact@sahanest.fr<br />
            Directeur de la publication : Arthur Cesaro</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Hébergement</h2>
            <p>Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
            Les données de santé traitées via la solution Cockpit sont hébergées en France sur une infrastructure certifiée HDS.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive de SAHANEST SAS, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Limitation de responsabilité</h2>
            <p>SAHANEST SAS s&apos;efforce de maintenir les informations de ce site à jour et exactes. Cependant, elle ne saurait être tenue responsable des erreurs, omissions ou résultats qui pourraient être obtenus par un mauvais usage de ces informations.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Contact</h2>
            <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l&apos;adresse : <a href="mailto:contact@sahanest.fr" className="text-[#8DC63F] hover:underline">contact@sahanest.fr</a></p>
          </section>

        </div>
      </div>
    </main>
  );
}
