import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee360 from "./pages/Employee360/Employee360";
import About from "./pages/About/About";
import PlatformStrategy from "./pages/PlatformStrategy/PlatformStrategy";
import ExecutiveDashboard from "./pages/ExecutiveDashboard/ExecutiveDashboard";
import DataPipeline from "./pages/DataPipeline/DataPipeline";
import HumanReview from "./pages/HumanReview/HumanReview";
import HRActionCenter from "./pages/HRActionCenter/HRActionCenter";
import DatasetComparison from "./pages/DatasetComparison/DatasetComparison";
import ImpactMonitoring from "./pages/ImpactMonitoring/ImpactMonitoring";

import AIRecommendation from "./pages/AIRecommendation/AIRecommendation";
import SkillGapAnalysis from "./pages/SkillGapAnalysis/SkillGapAnalysis";
import AIHiring from "./pages/AIHiring/AIHiring";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/employee-360" element={<Employee360 />} />
<Route path="/ai-recommendation" element={<AIRecommendation />} />
<Route path="/skill-gap" element={<SkillGapAnalysis />} />
<Route path="/ai-hiring" element={<AIHiring />} />
      
<Route path="/dashboard" element={<ExecutiveDashboard />} />
<Route path="/data-pipeline" element={<DataPipeline />} />
<Route path="/human-review" element={<HumanReview />} />
<Route path="/hr-action-center" element={<HRActionCenter />} />
<Route path="/dataset-comparison" element={<DatasetComparison />} />
<Route path="/impact-monitoring" element={<ImpactMonitoring />} />

<Route 
path="/platform-strategy" 
element={<PlatformStrategy />} 
/>

<Route path="/about" element={<About />} />
</Routes>
    </BrowserRouter>
  );
}
