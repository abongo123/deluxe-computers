import React from "react";
import WorkOrdersPage from "./pages/WorkOrdersPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Work Orders — Onboarding Sync</h1>
      </header>

      <main>
        <WorkOrdersPage />
      </main>
    </div>
  );
}
