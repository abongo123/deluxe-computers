import React, { useState } from "react";
import WorkOrderDetailsModal from "./WorkOrderDetailsModal";

export default function WorkOrdersTable({ workOrders = [], onSync = () => {} }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white rounded shadow p-4 text-black">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-sm text-gray-600 border-b">
            <th className="py-2">Date</th>
            <th>WO Number</th>
            <th>Store</th>
            <th>Assignee</th>
            <th>Day1</th>
            <th>Day2</th>
            <th>Queue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.length === 0 && (
            <tr>
              <td colSpan="8" className="py-6 text-center text-gray-500">No work orders yet.</td>
            </tr>
          )}
          {workOrders.map(w => (
            <tr key={w.id} className="border-b">
              <td className="py-2">{w.date || "-"}</td>
              <td>{w.workOrderNumber}</td>
              <td>{w.storeName ? `${w.storeName} (${w.storeId})` : "-"}</td>
              <td>{w.assignee}</td>
              <td>{w.day1Outcome}</td>
              <td>{w.day2Outcome}</td>
              <td>{w.sf?.queue || "-"}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn-secondary" onClick={() => onSync(w.id)}>
                    Sync
                  </button>
                  <button className="btn-muted" onClick={() => setSelected(w)}>
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && <WorkOrderDetailsModal workOrder={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
