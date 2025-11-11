import React from "react";

export default function WorkOrderDetailsModal({ workOrder, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-center p-6">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Work Order: {workOrder.workOrderNumber}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-600">Queue</div>
          <div className="mt-1">{workOrder.sf?.queue || "Not synced"}</div>
        </div>

        <div>
          <div className="text-sm text-gray-600 mb-2">Notes</div>
          {workOrder.sf?.notes?.length ? (
            <ul className="space-y-3">
              {workOrder.sf.notes.map(n => (
                <li key={n.id} className="p-3 border rounded">
                  <div className="text-xs text-gray-500">{n.date} • {n.author}</div>
                  <div className="mt-1">{n.text}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500">No notes available. Click Sync to pull notes from the Onboarding Work Plan.</div>
          )}
        </div>

        <div className="mt-6 text-right">
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
