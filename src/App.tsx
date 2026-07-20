import "./index.css";

export default function App() {
  return (
    <div className="app">

      <header className="hero">

        <div className="badge">
          Prototype for Medika Nusantara
        </div>

        <h1>
          Workforce Intelligence Platform
        </h1>

        <h2>
          Powered by Investment Technology Indonesia
        </h2>

        <p>
          AI-powered workforce decision platform designed to help HR leaders
          transform fragmented workforce data into trusted business decisions.
        </p>

        <div className="buttons">
          <button>Launch Demo</button>
          <button className="secondary">View Case Study</button>
        </div>

      </header>

      <section className="cards">

        <div className="card">
          <h3>15,000</h3>
          <span>Employees</span>
        </div>

        <div className="card">
          <h3>90</h3>
          <span>Branches</span>
        </div>

        <div className="card">
          <h3>40%</h3>
          <span>Missing Skills</span>
        </div>

        <div className="card">
          <h3>AI</h3>
          <span>Decision Intelligence</span>
        </div>

      </section>

      <footer>
        © 2026 Investment Technology Indonesia
      </footer>

    </div>
  );
}
