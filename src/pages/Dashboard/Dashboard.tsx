
export default function Dashboard() {
  return (
    <main className="p-6 bg-slate-50 min-h-screen">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Executive Dashboard
        </h1>
        <p className="text-slate-500 mt-2">
          Workforce Intelligence Overview
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="rounded-xl bg-white p-6 shadow">
          <p>Total Employees</p>
          <h2 className="text-3xl font-bold mt-2">15,247</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p>Workforce Health</p>
          <h2 className="text-3xl font-bold mt-2">82%</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p>AI Confidence</p>
          <h2 className="text-3xl font-bold mt-2">89%</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p>Data Quality</p>
          <h2 className="text-3xl font-bold mt-2">92%</h2>
        </div>

      </section>

      <section className="grid xl:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Executive AI Insight
          </h2>

          <ul className="space-y-3">
            <li>• 132 Employees Need Reskilling</li>
            <li>• 27 Promotion Candidates</li>
            <li>• 18 Critical Hiring</li>
            <li>• AI Confidence 89%</li>
          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            High Priority Alerts
          </h2>

          <ul className="space-y-3">
            <li>🔴 124 Attrition Risk</li>
            <li>🟠 42 Skill Gap</li>
            <li>🟡 38 Human Review Queue</li>
            <li>🟢 Data Quality Improved</li>
          </ul>

        </div>

      </section>

      <section className="grid xl:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow h-72 p-6">
          <h2 className="font-semibold">
            Workforce Health Trend
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow h-72 p-6">
          <h2 className="font-semibold">
            Attrition Risk by Branch
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow h-72 p-6">
          <h2 className="font-semibold">
            Skill Gap Analysis
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow h-72 p-6">
          <h2 className="font-semibold">
            Hiring Pipeline
          </h2>
        </div>

      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Recommended Actions
        </h2>

        <ul className="space-y-2">
          <li>Review AI Recommendation</li>
          <li>Launch Reskilling Program</li>
          <li>Open Human Review</li>
          <li>Download Executive Report</li>
        </ul>

      </section>

      <section className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-2">
          <li>AI Model Updated</li>
          <li>Data Sync Completed</li>
          <li>Dataset Improved</li>
          <li>18 Employees Added</li>
        </ul>

      </section>

    </main>
  );
}
