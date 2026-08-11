import { Header } from "@/components/Header";

export const metadata = {
  title: "Thank You | Digital Rushal",
  description: "Your free AI marketing consultation is booked.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <Header />
      <section className="thank-you-shell">
        <div className="confirmation-icon" aria-hidden="true">✓</div>
        <p className="eyebrow">CONSULTATION CONFIRMED</p>
        <h1>You&apos;re In! Your Free AI Marketing Consultation Is Booked.</h1>
        <p className="thank-you-lead">
          Thanks for taking the first step toward improving your business marketing.
        </p>

        <div className="video-card">
          <div className="video-card__icon" aria-hidden="true">▶</div>
          <div>
            <h2>Watch This Before Your Consultation</h2>
            <p>Get Ready for Your Free AI Marketing Consultation</p>
          </div>
          <span className="video-card__label">VIDEO</span>
        </div>

        <div className="video-player">
          <video controls playsInline preload="metadata" aria-label="Get Ready for Your Free AI Marketing Consultation">
            <source src="/thank-you-consultation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="video-note">
          Before our consultation, watch the short video to understand what we&apos;ll cover and how to get the most value from your session. In this video, you&apos;ll learn what to expect from the consultation and how we&apos;ll look at your business, marketing, and opportunities to use AI.
        </p>
        <p className="watch-reminder">Watch the video before your call.</p>

        <div className="whatsapp-card">
          <p className="eyebrow">HAVE A QUESTION BEFORE THE CALL?</p>
          <h2>Message us on WhatsApp.</h2>
          <p>Need to share something about your business or want to contact us directly?</p>
          <a className="button button--primary" href="https://wa.me/9779812052089" target="_blank" rel="noreferrer">Chat With Us on WhatsApp <span aria-hidden="true">→</span></a>
          <span className="whatsapp-number">+977 9812052089</span>
        </div>

        <div className="next-steps">
          <p className="eyebrow">YOUR NEXT STEPS</p>
          <h2>Make the most of your consultation.</h2>
          <ol>
            <li><span>1</span><div><strong>Watch the video</strong><p>Take a few minutes to understand what we&apos;ll cover.</p></div></li>
            <li><span>2</span><div><strong>Think about your biggest marketing challenge</strong><p>Be ready to tell us what&apos;s currently not working for your business.</p></div></li>
            <li><span>3</span><div><strong>Join your consultation</strong><p>We&apos;ll discuss your business and create practical recommendations for your marketing.</p></div></li>
          </ol>
        </div>

        <p className="closing-message">We Look Forward to Speaking With You.</p>
        <a className="whatsapp-link" href="https://wa.me/9779812052089" target="_blank" rel="noreferrer">Chat With Us on WhatsApp <span aria-hidden="true">→</span></a>
      </section>
    </main>
  );
}
