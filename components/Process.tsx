const steps = [
  {
    title: "Tell Us About Your Business",
    text: "Fill out the short form and share a few details about your business and current marketing.",
  },
  {
    title: "Get Your Free Consultation",
    text: "Meet one-to-one and discuss your business, customers, and marketing challenges.",
  },
  {
    title: "Get Your Customized Strategy",
    text: "Receive practical recommendations and an AI-powered marketing roadmap built around your business.",
  },
];

export function Process() {
  return (
    <section className="section process-section" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">A SIMPLE PROCESS</p>
          <h2 id="process-heading">From your business details to a clearer way forward.</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span className="process-step__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
