#!/bin/bash
set -e

cd "$HOME/workforce-intelligence-platform"

echo "📦 Installing React Router..."
npm install react-router-dom

cp src/main.tsx src/main.tsx.bak
cp src/App.tsx src/App.tsx.bak

cat > src/main.tsx <<'EOT'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
EOT

cat > src/App.tsx <<'EOT'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<ExecutiveDashboard />} />
    </Routes>
  );
}
EOT

echo "📦 Build..."
npm run build

echo "✅ React Router berhasil dipasang."
echo "Sekarang pastikan tombol Launch Platform menggunakan navigate('/dashboard') atau Link ke /dashboard."
