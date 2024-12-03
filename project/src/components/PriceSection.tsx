import React from 'react';
import { Timer } from './Timer';
import { QuantitySelector } from './QuantitySelector';
import { useOrderStore } from '../store/orderStore';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PriceSection() {
  const { quantity, setQuantity } = useOrderStore();
  const navigate = useNavigate();
  const price = 37000;
  const discount = 0.05; // 5% off
  const discountedPrice = price * (1 - discount);
  const savings = price - discountedPrice;

  return (
    <div className="bg-white p-4 space-y-4">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold">₦{discountedPrice.toLocaleString()}</div>
          <div className="text-red-500">
            -{(discount * 100)}% | Save ₦{savings.toLocaleString()}
          </div>
        </div>
        <Timer />
      </div>

      <div className="text-sm text-gray-500">
        Tax excluded, add at checkout if applicable. Extra 1% off with coins
      </div>

      <div className="border-t pt-4">
        <QuantitySelector 
          quantity={quantity}
          onChange={setQuantity}
          max={5}
        />
      </div>
    </div>
  );
}