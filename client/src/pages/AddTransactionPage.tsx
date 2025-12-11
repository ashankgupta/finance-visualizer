"use client";

import TransactionForm from "../components/TransactionForm";
import { useNavigate } from "react-router-dom";

export default function AddTransactionPage() {
  const navigate = useNavigate();

  const handleAdd = () => {
    // After successful add, redirect to transactions page
    navigate("/transactions");
  };

  return (
    <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-xl border border-[#2a2a2a] max-w-md mx-auto text-white">
      <TransactionForm onAdd={handleAdd} />
    </div>
  );
}

