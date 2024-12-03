import React, { useState } from 'react';
import { MessageSquare, Users, ExternalLink } from 'lucide-react';
import { OrderModal } from './OrderModal';

export function StickyOrderBar() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="https://chat.whatsapp.com/EJo3AG9yz0TIHyQsc8sPR1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 group"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Join WhatsApp Group</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://t.me/muahibstores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 group"
              >
                <Users className="w-5 h-5" />
                <span>Join Telegram Group</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            
            <button
              onClick={() => setShowOrderModal(true)}
              className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              Order Now - ₦35,150
            </button>
          </div>
        </div>
      </div>

      {showOrderModal && (
        <OrderModal onClose={() => setShowOrderModal(false)} />
      )}
    </>
  );
}