import { useState } from "react";
import * as mockApi from "../mock/mockApi";

/**
 * useWorkOrders: local hook that stores work orders (frontend-first).
 * - addWorkOrder(data)
 * - syncWorkOrder(id) : calls mockApi.syncWithSalesforce(workOrderNumber)
 * - syncAll() : iterate and sync each
 */
export function useWorkOrders() {
  const [workOrders, setWorkOrders] = useState([]);

  async function addWorkOrder(data) {
    setWorkOrders(prev => [data, ...prev]);
  }

  async function syncWorkOrder(id) {
    const wo = workOrders.find(w => w.id === id);
    if (!wo) return;
    // call service - this will be replaced by real backend
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
