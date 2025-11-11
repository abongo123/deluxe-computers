import React, { useState } from "react";
import WorkOrdersTable from "../components/WorkOrdersTable";
import WorkOrderForm from "../components/WorkOrderForm";
import { useWorkOrders } from "../hooks/useWorkOrders";

export default function WorkOrdersPage() {
  const { workOrders, addWorkOrder, syncWorkOrder, syncAll } = useWorkOrders();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="btn-primary mr-2" onClick={() => setShowForm(true)}>
            + Add Work Order
          </button>
          <button className="btn-secondary" onClick={() => syncAll()}>
            Sync All
          </button>
        </div>
        <div className="text-sm text-gray-600">Auto-sync: disabled</div>
      </div>

      <WorkOrdersTable
        workOrders={workOrders}
        onSync={(id) => syncWorkOrder(id)}
      />

      {showForm && (
        <WorkOrderForm
          onClose={() => setShowForm(false)}
          onSave={(data) => {
            addWorkOrder(data);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}
