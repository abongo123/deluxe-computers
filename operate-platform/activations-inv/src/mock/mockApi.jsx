// simulate a backend that queries Salesforce's WorkOrder -> WorkPlan(name='Onboarding')
const fakeSalesforceDb = {
  "WO-12345": {
    queue: "Onboarding Queue A",
    notes: [
      { id: "n1", author: "Agent A", text: "Onboarding call completed", date: "2025-11-01" },
      { id: "n2", author: "Agent B", text: "Follow-up scheduled", date: "2025-11-03" }
    ]
  },
  "WO-99999": {
    queue: "Onboarding Queue X",
    notes: [
      { id: "x1", author: "Agent Z", text: "Left voicemail", date: "2025-10-30" }
    ]
  }
};

export async function syncWithSalesforce(workOrderNumber) {
  // Simulate network latency
  await new Promise(res => setTimeout(res, 700));
  const data = fakeSalesforceDb[workOrderNumber];
  if (!data) {
    // return empty object with lastSynced timestamp
    return { syncedAt: new Date().toISOString(), queue: null, notes: [] };
  }
  return { syncedAt: new Date().toISOString(), queue: data.queue, notes: data.notes };
}
