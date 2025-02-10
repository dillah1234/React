import { create } from "zustand";

const useCustomerStore = create((set) => ({
  customerCount: 0,
  addCustomer: () => set((state) => ({ customerCount: state.customerCount + 1 })),
  removeCustomer: () => set((state) => ({ customerCount: Math.max(0, state.customerCount - 1) })),
}));

export default function CustomerCounter() {
  const { customerCount, addCustomer, removeCustomer } = useCustomerStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6 animate-pulse">Jumlah Pelanggan: {customerCount}</h1>
      <div className="flex gap-6">
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-110 hover:bg-green-600"
          onClick={addCustomer}
        >
          Tambah Pelanggan
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-110 hover:bg-red-600"
          onClick={removeCustomer}
        >
          Kurangi Pelanggan
        </button>
      </div>
    </div>
  );
}
