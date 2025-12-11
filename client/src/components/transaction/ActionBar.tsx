// src/components/transactions/ActionBar.tsx
"use client";
import { PlusIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { MdRefresh } from "react-icons/md";

export default function ActionBar({
  onAddClick,
  isFormOpen,
  onRefresh,
  onExport,
}: {
  onAddClick: () => void;
  isFormOpen: boolean;
  onRefresh: () => void;
  onExport: () => void;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">Transactions</h1>
          <p className="text-sm text-gray-400 mt-1">History, add and manage your transactions</p>
        </div>

        <div className="flex items-center gap-3">
           <button
             onClick={onRefresh}
             className="inline-flex items-center cursor-pointer gap-2 px-3 py-2 rounded-md bg-white/5 text-gray-200 hover:bg-white/7 transition"
             aria-label="Refresh transactions"
             title="Refresh"

           >
             <MdRefresh className="h-4 w-4" />
             <span className="text-sm hidden sm:inline">Refresh</span>
           </button>

           <button
             onClick={onAddClick}
             className={`inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md font-semibold transition
               ${isFormOpen ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-md" : "bg-cyan-500 text-black hover:brightness-95"}`}
             aria-expanded={isFormOpen}
             aria-controls="add-transaction-panel"
           >
             <PlusIcon className="h-5 w-5" />
             <span className="text-sm">Add Transaction</span>
           </button>

           <button
             onClick={onExport}
             className="inline-flex items-center cursor-pointer gap-2 px-3 py-2 rounded-md bg-white/5 text-gray-200 hover:bg-white/7 transition"
             aria-label="Export transactions to CSV"
             title="Export CSV"

           >
             <DocumentArrowDownIcon className="h-4 w-4" />
             <span className="text-sm hidden sm:inline">Export CSV</span>
           </button>


        </div>
      </div>
    </div>
  );
}
