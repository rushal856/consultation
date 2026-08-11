const benefits = [
  "Identify what’s holding your marketing back.",
  "Get a clear direction for your next marketing steps.",
  "Discover where AI can help your business.",
  "Find opportunities to attract and generate more leads.",
  "Get a customized marketing roadmap for your business.",
];

export function Benefits() {
  return (
    <section className="section benefits-section" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">HOW YOU BENEFIT</p>
          <h2 id="benefits-heading">Clear marketing direction, built around your business.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit}>
              <span className="benefit-card__number">0{index + 1}</span>
              <span className="benefit-card__check" aria-hidden="true">✓</span>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
