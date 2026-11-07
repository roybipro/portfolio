import { benchmarkResults } from "../data";

const metrics = [
  ["ROC-AUC", "auc"],
  ["F1-score", "f1"],
  ["Accuracy", "accuracy"],
] as const;

export default function ResearchMetrics() {
  return (
    <div className="research-results" aria-labelledby="baseline-title">
      <div className="results-heading">
        <div>
          <p className="research-kicker">EXPERIMENTAL RESULTS</p>
          <h3 id="baseline-title">Traditional ML baseline · XGBoost</h3>
        </div>
        <p>Reported scores</p>
      </div>
      <div className="dataset-grid">
        {benchmarkResults.map((result) => (
          <article className="dataset-card" key={result.dataset}>
            <h4>{result.dataset}</h4>
            <div className="metric-rows">
              {metrics.map(([label, key]) => {
                const value = result[key];
                return (
                  <div className="metric-row" key={key}>
                    <span>{label}</span>
                    <span className="metric-track" aria-hidden="true">
                      <span style={{ width: `${value * 100}%` }} />
                    </span>
                    <strong>{value.toFixed(4)}</strong>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <p className="results-footnote">
        Scores are shown as supplied for the XGBoost baseline; they do not represent the LLM results.
      </p>
    </div>
  );
}
