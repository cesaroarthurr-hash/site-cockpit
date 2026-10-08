"use client";

import { video } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import MediaPlaceholder from "./ui/MediaPlaceholder";

/**
 * Transforme une URL de partage en URL intégrable.
 * Renvoie null si la source n'est pas une plateforme reconnue
 * (dans ce cas on la traite comme un fichier vidéo).
 */
function toEmbedUrl(src: string): string | null {
  const youtube = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?rel=0`;

  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return null;
}

function Player() {
  const { src, poster, media } = video;

  if (!src) {
    return <MediaPlaceholder label={media.label} hint={media.hint} variant="video" dark />;
  }

  const embed = toEmbedUrl(src);

  if (embed) {
    return (
      <iframe
        src={embed}
        title={media.label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-2xl"
      />
    );
  }

  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={poster || undefined}
      className="aspect-video w-full rounded-2xl bg-black"
    >
      <source src={src} />
      Votre navigateur ne peut pas lire cette vidéo.
    </video>
  );
}

export default function VideoSection() {
  // Pas de vidéo renseignée : on masque la section en ligne pour ne pas
  // exposer un encadré vide aux visiteurs. Elle reste visible en local.
  const isPlaceholder = !video.src;
  const hiddenOnline =
    isPlaceholder &&
    process.env.NODE_ENV === "production" &&
    !video.showPlaceholderOnline;

  if (hiddenOnline) return null;

  return (
    <section id="video" className="bg-gradient-to-b from-white to-gray-50/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
            {video.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {video.headline} <span className="gradient-text">{video.highlight}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{video.subheadline}</p>
        </Reveal>

        <Reveal className="mt-12">
          {/* Cadre sombre : met la vidéo en valeur et masque les bords du lecteur */}
          <div className="relative rounded-3xl bg-gradient-to-br from-night-50 to-night-900 p-2.5 shadow-2xl shadow-gray-900/20 sm:p-3">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#8DC63F]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl">
              <Player />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
