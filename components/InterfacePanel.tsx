'use client';
import { useState } from 'react';
import { useStore, demoInventory } from '@/store/useStore';

export default function InterfacePanel() {
  const [step, setStep] = useState<'home' | 'inventory' | 'prescription' | 'cart' | 'payment' | 'success'>('home');
  const { cart, addToCart, removeFromCart, clearCart, prescriptionStatus, setPrescriptionStatus, paymentStatus, setPaymentStatus, dispensingStatus, setDispensingStatus } = useStore();

  const handleCheckout = () => {
    const requiresPresc = cart.some(item => item.product.requiresPrescription);
    if (requiresPresc && prescriptionStatus !== 'verified') {
      setStep('prescription');
    } else {
      setStep('payment');
    }
  };

  const handlePayment = (method: string) => {
    setPaymentStatus('success');
    setStep('success');
  };

  const startDispensing = () => {
    setDispensingStatus('processing');
    setTimeout(() => {
      setDispensingStatus('dispensed');
    }, 2000);
  };

  const resetAll = () => {
    clearCart();
    setPrescriptionStatus('none');
    setPaymentStatus('pending');
    setDispensingStatus('idle');
    setStep('home');
  };

  const totalAmount = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div className="h-full flex flex-col bg-[#0f172a] text-white p-6 relative">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <h3 className="font-bold text-lg text-brand-teal">Medivault Touchscreen</h3>
        <div className="text-xs bg-slate-800 px-2 py-1 rounded">SIMULATION</div>
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        {step === 'home' && (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <h2 className="text-2xl font-bold">Welcome to Medivault</h2>
            <p className="text-slate-400 text-center text-sm">Touch to begin browsing essential medicines.</p>
            <button onClick={() => setStep('inventory')} className="bg-brand-teal text-brand-navy px-8 py-3 rounded font-bold hover:bg-white transition">Start</button>
          </div>
        )}

        {step === 'inventory' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Demo Inventory</h4>
              <button onClick={() => setStep('cart')} className="text-sm bg-slate-800 px-3 py-1 rounded hover:text-brand-teal">Cart ({cart.length})</button>
            </div>
            <div className="grid gap-3">
              {demoInventory.map(item => (
                <div key={item.id} className="bg-slate-800 p-3 rounded flex justify-between items-center border border-slate-700">
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.category} • ₹{item.price}</div>
                    {item.requiresPrescription && <div className="text-[10px] text-red-400 mt-1">Prescription Required</div>}
                  </div>
                  {item.stock > 0 ? (
                    <button onClick={() => addToCart(item)} className="bg-brand-teal/20 text-brand-teal px-3 py-1 rounded text-sm hover:bg-brand-teal hover:text-brand-navy transition">Add</button>
                  ) : (
                    <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">Out of stock</span>
                  )}
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <button onClick={() => setStep('cart')} className="w-full mt-4 bg-brand-teal text-brand-navy py-2 rounded font-bold">View Cart</button>
            )}
          </div>
        )}

        {step === 'cart' && (
          <div className="space-y-4">
            <button onClick={() => setStep('inventory')} className="text-xs text-brand-teal mb-4">← Back to Inventory</button>
            <h4 className="font-semibold mb-2">Order Summary</h4>
            {cart.length === 0 ? (
              <p className="text-slate-500 text-sm">Cart is empty.</p>
            ) : (
              <div className="space-y-2">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between text-sm bg-slate-800 p-2 rounded">
                    <span>{item.product.name} (x{item.quantity})</span>
                    <span>₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-slate-700 pt-2 mt-4 flex justify-between font-bold">
                  <span>Total Payable:</span>
                  <span className="text-brand-teal">₹{totalAmount}</span>
                </div>
                <button onClick={handleCheckout} className="w-full mt-6 bg-brand-teal text-brand-navy py-3 rounded font-bold">Proceed to Checkout</button>
              </div>
            )}
          </div>
        )}

        {step === 'prescription' && (
          <div className="space-y-4">
            <button onClick={() => setStep('cart')} className="text-xs text-brand-teal mb-4">← Back to Cart</button>
            <h4 className="font-semibold text-red-400">Prescription Required</h4>
            <p className="text-xs text-slate-400">Your cart contains restricted items. Upload a demo prescription to proceed.</p>
            
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 flex flex-col items-center justify-center mt-4">
              {prescriptionStatus === 'none' ? (
                <>
                  <div className="text-sm text-slate-300 mb-2">Upload File (PDF, JPG, PNG)</div>
                  <button onClick={() => setPrescriptionStatus('uploaded')} className="bg-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-600">Simulate Upload</button>
                </>
              ) : prescriptionStatus === 'uploaded' ? (
                <>
                  <div className="text-sm text-yellow-400 mb-2">Verification Pending...</div>
                  <button onClick={() => setPrescriptionStatus('verified')} className="bg-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-600">Simulate Admin Approval</button>
                </>
              ) : (
                <div className="text-sm text-green-400 font-bold">✓ Verified (Demo)</div>
              )}
            </div>

            {prescriptionStatus === 'verified' && (
              <button onClick={() => setStep('payment')} className="w-full mt-4 bg-brand-teal text-brand-navy py-3 rounded font-bold">Continue to Payment</button>
            )}
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            <button onClick={() => setStep('cart')} className="text-xs text-brand-teal mb-2">← Back</button>
            <div className="bg-slate-800 p-4 rounded text-center">
              <div className="text-sm text-slate-400">Amount to pay</div>
              <div className="text-3xl font-bold text-white mb-1">₹{totalAmount}</div>
              <div className="text-[10px] text-yellow-400">DEMO PAYMENT — NO REAL TRANSACTION</div>
            </div>

            <div className="space-y-3">
              <button onClick={() => handlePayment('UPI')} className="w-full bg-[#5f259f] hover:bg-[#4a1c7c] text-white py-3 rounded font-bold flex items-center justify-center transition">
                Pay via UPI / PhonePe (Simulated)
              </button>
              <button onClick={() => handlePayment('Cash')} className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded font-bold flex items-center justify-center transition">
                Pay with Cash (Simulated)
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
            {dispensingStatus === 'idle' ? (
              <>
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl mb-2">✓</div>
                <h2 className="text-2xl font-bold text-white">Payment Successful!</h2>
                <div className="text-sm text-slate-400 bg-slate-800 px-4 py-2 rounded w-full">
                  <p>Order ID: DEMO-{Math.floor(Math.random() * 10000)}</p>
                  <p>Status: Ready to Dispense</p>
                </div>
                <button onClick={startDispensing} className="w-full bg-brand-teal text-brand-navy py-3 rounded font-bold mt-4 animate-pulse">Confirm Dispensing</button>
              </>
            ) : dispensingStatus === 'processing' ? (
              <>
                 <div className="text-brand-teal text-xl animate-pulse">Processing Order...</div>
                 <p className="text-sm text-slate-400 mt-2">Watch the 3D machine</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-brand-teal">Your Order Is Ready!</h2>
                <p className="text-sm text-slate-400">Please collect your items from the tray below.</p>
                <button onClick={resetAll} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded mt-6 text-sm">Start Again</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
