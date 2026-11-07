type ArchitectureDiagramProps = {
  title: string;
  caption: string;
  steps: { heading: string; detail: string }[];
  proposed?: boolean;
};

export default function ArchitectureDiagram({ title, caption, steps, proposed = false }: ArchitectureDiagramProps) {
  return (
    <figure className={`architecture-card${proposed ? " architecture-proposed" : ""}`}>
      <figcaption>
        <span className="architecture-caption">{caption}</span>
        <h3>{title}</h3>
      </figcaption>
      <ol className="architecture-flow" aria-label={`${title} architecture flow`}>
        {steps.map((step) => (
          <li key={step.heading}>
            <span className="architecture-node-mark" aria-hidden="true" />
            <strong>{step.heading}</strong>
            <small>{step.detail}</small>
          </li>
        ))}
      </ol>
      {proposed && <p className="architecture-note">Conceptual flow · ongoing research direction</p>}
    </figure>
  );
}
