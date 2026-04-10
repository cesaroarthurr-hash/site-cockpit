import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialise Resend avec la clé depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);

// Adresse qui recevra les candidatures
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@sahanest.fr";
// Adresse expéditrice (doit être vérifiée dans Resend)
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Cockpit <noreply@sahanest.fr>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, structure, email, phone } = body;

    if (!name || !structure || !email) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Cockpit] Nouvelle candidature pilote — ${structure}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #8DC63F; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouvelle candidature pilote</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Cockpit</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px; width: 140px;">Nom</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Structure</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${structure}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #8DC63F;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666; font-size: 14px;">Téléphone</td>
              <td style="padding: 12px 0; color: #111; font-size: 14px; font-weight: 600;">${phone || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px; font-size: 12px; color: #999;">
            Envoyé depuis le formulaire de candidature de cockpit.sahanest.fr
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur inattendue." },
      { status: 500 }
    );
  }
}
