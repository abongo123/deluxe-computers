import { useState } from "react";
import * as mockApi from "../mock/mockApi";

export function useWorkOrders() {
  const [workOrders, setWorkOrders] = useState([]);

  async function addWorkOrder(data) {
    setWorkOrders(prev => [data, ...prev]);
  }

  async function syncWorkOrder(id) {
    const wo = workOrders.find(w => w.id === id);
    if (!wo) return;
    const result = await mockApi.syncWithSalesforce(wo.workOrderNumber);
    setWorkOrders(prev => prev.map(w => (w.id === id ? { ...w, sf: result } : w)));
  }

  async function syncAll() {
    for (const w of workOrders) {
      await syncWorkOrder(w.id);
    }
  }

  return { workOrders, addWorkOrder, syncWorkOrder, syncAll };
}
