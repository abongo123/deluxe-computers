import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ASSIGNEES = ["Alice", "Jacqueline", "Mary", "Unassigned"];
const OUTCOMES = ["PDOA/Outreach Date Pushed", "Mx Self / Auto Activated w/out Mx Contact", "PDOA - Marketplace SMB Activations", "N/A"];

export default function WorkOrderForm({ onClose, onSave, initial = {} }) {
  const [date, setDate] = useState(initial.date || "");
  const [workOrderNumber, setWorkOrderNumber] = useState(initial.workOrderNumber || "");
  const [storeId, setStoreId] = useState(initial.storeId || "");
  const [storeName, setStoreName] = useState(initial.storeName || "");
  const [assignee, setAssignee] = useState(initial.assignee || ASSIGNEES[3]);
  const [day1Outcome, setDay1Outcome] = useState(initial.day1Outcome || OUTCOMES[0]);
  const [day2Outcome, setDay2Outcome] = useState(initial.day2Outcome || OUTCOMES[0]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!workOrderNumber) {
      alert("Work Order Number is required");
      return;
    }
    onSave({
      id: uuidv4(),
      date,
      workOrderNumber,
      storeId,
      storeName,
      assignee,
      day1Outcome,
      day2Outcome,
      sf: null,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-start justify-center p-6 text-black">
      <form className="bg-[#43696e] rounded-lg shadow p-6 w-full max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Work Order</h2>
          <button type="button" className="text-gray-500" onClick={onClose}>✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-black">
          <label className="block">
            <div className="text-xs text-black">Date</div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="input" />
          </label>

          <label className="block">
            <div className="text-xs text-black">Work Order Number *</div>
            <input value={workOrderNumber} onChange={e => setWorkOrderNumber(e.target.value)} className="input" placeholder="WO-12345" />
          </label>

          <label className="block">
            <div className="text-xs text-black">Store ID</div>
            <input value={storeId} onChange={e => setStoreId(e.target.value)} className="input" />
          </label>

          <label className="block">
            <div className="text-xs text-black">Store Name</div>
            <input value={storeName} onChange={e => setStoreName(e.target.value)} className="input" />
          </label>

          <label className="block">
            <div className="text-xs text-black">Assignee</div>
            <select value={assignee} onChange={e => setAssignee(e.target.value)} className="input">
              {ASSIGNEES.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </label>

          <label className="block">
            <div className="text-xs text-black">Day 1 Outcome</div>
            <select value={day1Outcome} onChange={e => setDay1Outcome(e.target.value)} className="input">
              {OUTCOMES.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          <label className="block">
            <div className="text-xs text-black">Day 2 Outcome</div>
            <select value={day2Outcome} onChange={e => setDay2Outcome(e.target.value)} className="input">
              {OUTCOMES.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-3 text-black">
          <button type="button" className="btn-muted" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
