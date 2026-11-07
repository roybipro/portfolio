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
      <div className="results-table-wrap">
        <table className="results-table">
          <thead><tr><th scope="col">Dataset</th>{metrics.map(([label]) => <th scope="col" key={label}>{label}</th>)}</tr></thead>
          <tbody>{benchmarkResults.map((result) => (
            <tr key={result.dataset}>
              <th scope="row">{result.dataset}</th>
              {metrics.map(([, key]) => {
                const value = result[key];
                return <td key={key}><span className="metric-viz"><span className="metric-track" aria-hidden="true"><span style={{ width: `${value * 100}%` }} /></span><strong>{value.toFixed(4)}</strong></span></td>;
              })}
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p className="results-footnote">
        Scores are shown as supplied for the XGBoost baseline; they do not represent the LLM results.
      </p>
    </div>
  );
}
