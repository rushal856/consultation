export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--green" aria-hidden="true" />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">FREE ONE-TO-ONE CONSULTATION</p>
          <h1 id="hero-heading">Get a Free <span>AI Marketing Roadmap</span> for Your Business</h1>
          <p className="hero__subheadline">Know what to fix, what to focus on, and how AI can help you attract and convert more customers.</p>
          <p className="hero__description">Stop guessing what to post, where to market, or how to use AI. Get a customized marketing strategy built around your business.</p>
          <a className="button button--primary" href="#consultation">Book Free Consultation <span aria-hidden="true">→</span></a>
          <p className="hero__note"><i aria-hidden="true" /> Personalized guidance for your business</p>
        </div>
        <div className="roadmap-visual" aria-hidden="true">
          <div className="roadmap-visual__halo" />
          <div className="roadmap-window">
            <div className="roadmap-window__top"><span /><span /><span /><p>AI MARKETING ROADMAP</p></div>
            <div className="roadmap-window__body">
              <p className="roadmap-window__label">CUSTOMIZED STRATEGY</p>
              <h2>Your next marketing steps, made clear.</h2>
              <div className="roadmap-flow"><div><b>01</b><span>Your business</span></div><i /><div><b>02</b><span>Your customers</span></div><i /><div><b>03</b><span>Marketing opportunities</span></div></div>
            </div>
          </div>
          <div className="floating-card floating-card--top"><small>AI FOCUS</small><strong>Clear direction</strong><em /></div>
          <div className="floating-card floating-card--bottom"><small>YOUR ROADMAP</small><strong>Built around your business</strong></div>
        </div>
      </div>
    </section>
  );
}
