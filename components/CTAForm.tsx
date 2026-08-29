import { FlodeskForm } from "@/components/FlodeskForm";

export function CTAForm() {
  return (
    <section className="form-section" id="consultation" aria-labelledby="booking-heading">
      <div className="container form-layout">
        <aside className="form-intro">
          <p className="eyebrow">BOOK THE CALL</p>
          <h2 id="booking-heading">A focused conversation about what comes next.</h2>
          <div className="booking-points">
            <div><span aria-hidden="true">✦</span><div><h3>One-to-One Consultation</h3><p>Get direct guidance based on your business, customers, and current marketing.</p></div></div>
            <div><span aria-hidden="true">✦</span><div><h3>Customized Strategy for Your Business</h3><p>Discover what you should focus on next and how AI can support your marketing.</p></div></div>
          </div>
        </aside>
        <div className="consultation-form flodesk-shell">
          <div className="form-heading"><p>FREE CONSULTATION</p><h3>Get your free AI marketing roadmap.</h3></div>
          <FlodeskForm />
          <p className="privacy-line"><span aria-hidden="true">⌁</span> We respect your privacy. No spam.</p>
        </div>
      </div>
    </section>
  );
}
