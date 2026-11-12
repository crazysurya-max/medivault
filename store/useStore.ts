import { create } from 'zustand';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  packSize: string;
  requiresPrescription: boolean;
};

export const demoInventory: Product[] = [
  { id: '1', name: 'Paracetamol 500mg', category: 'General Wellness', price: 30, stock: 15, packSize: 'Strip of 10', requiresPrescription: false },
  { id: '2', name: 'Ibuprofen 400mg', category: 'General Wellness', price: 45, stock: 10, packSize: 'Strip of 10', requiresPrescription: false },
  { id: '3', name: 'Amoxicillin 250mg', category: 'Antibiotics', price: 80, stock: 5, packSize: 'Strip of 6', requiresPrescription: true },
  { id: '4', name: 'First Aid Kit', category: 'First-aid', price: 250, stock: 0, packSize: '1 Box', requiresPrescription: false },
];

type Store = {
  cart: { product: Product; quantity: number }[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  prescriptionStatus: 'none' | 'uploaded' | 'verified';
  setPrescriptionStatus: (status: 'none' | 'uploaded' | 'verified') => void;
  paymentStatus: 'pending' | 'success';
  setPaymentStatus: (status: 'pending' | 'success') => void;
  dispensingStatus: 'idle' | 'processing' | 'dispensed';
  setDispensingStatus: (status: 'idle' | 'processing' | 'dispensed') => void;
};

export const useStore = create<Store>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existing = state.cart.find(item => item.product.id === product.id);
    if (existing) {
      return { cart: state.cart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
    }
    return { cart: [...state.cart, { product, quantity: 1 }] };
  }),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.product.id !== id) })),
  clearCart: () => set({ cart: [] }),
  prescriptionStatus: 'none',
  setPrescriptionStatus: (status) => set({ prescriptionStatus: status }),
  paymentStatus: 'pending',
  setPaymentStatus: (status) => set({ paymentStatus: status }),
  dispensingStatus: 'idle',
  setDispensingStatus: (status) => set({ dispensingStatus: status })
}));
