import { useState } from 'react';
import { Box, DollarSign, Truck, Image as ImageIcon, X, UploadCloud } from 'lucide-react';

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProductModal({ isOpen, onClose }: CreateProductModalProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'stock' | 'supplier' | 'media'>('general');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--color-background)] w-full max-w-3xl rounded-[20px] shadow-2xl flex flex-col mx-4 max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4 relative">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Créer un nouveau produit</h2>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-b border-[var(--color-input)] bg-[var(--color-background)] text-[var(--color-primary-foreground)] px-6 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-2 py-4 px-2 mr-6 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap shrink-0 ${
              activeTab === 'general' 
                ? 'border-[#16A085] text-[#16A085]' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Box size={18} />
            Général
          </button>
          
          <button
            onClick={() => setActiveTab('stock')}
            className={`flex items-center gap-2 py-4 px-2 mr-6 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap shrink-0 ${
              activeTab === 'stock' 
                ? 'border-[#16A085] text-[#16A085]' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <DollarSign size={18} />
            Stock & Prix
          </button>
          
          <button
            onClick={() => setActiveTab('supplier')}
            className={`flex items-center gap-2 py-4 px-2 mr-6 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap shrink-0 ${
              activeTab === 'supplier' 
                ? 'border-[#16A085] text-[#16A085]' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Truck size={18} />
            Fournisseur
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 py-4 px-2 mr-6 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap shrink-0 ${
              activeTab === 'media' 
                ? 'border-[#16A085] text-[#16A085]' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ImageIcon size={18} />
            Média
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-8">
          
          {/* TAB: GENERAL */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Nom du Produit</label>
                  <input 
                    type="text" 
                    placeholder="ex: iPhone 15 Pro Max" 
                    className="w-full  border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">SKU / Code-Barres</label>
                  <input 
                    type="text" 
                    placeholder="ex: APL-IP15-PMAX" 
                    className="w-full border border-[var(--color-input)]  rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Description détaillée..." 
                  className="w-full border border-[var(--color-input)]  rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Catégorie</label>
                  <input 
                    type="text" 
                    placeholder="Électronique" 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Unité</label>
                  <input 
                    type="text" 
                    placeholder="Pièce, Kg, Litre..." 
                    className="w-full border border-[var(--color-input)]  rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: STOCK & PRIX */}
          {activeTab === 'stock' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Prix de Vente (FCFA)</label>
                  <input 
                    type="text"
                    placeholder='250FCF' 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Coût d'Achat (FCFA)</label>
                  <input 
                    type="text"
                    placeholder='250FCF' 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Stock Initial</label>
                  <input 
                    type="text"
                    placeholder='300' 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Seuil d'Alerte</label>
                  <input 
                    type="text"
                    placeholder='2' 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Seuil Critique</label>
                  <input 
                    type="text"
                    placeholder='25' 
                    className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: FOURNISSEUR */}
          {activeTab === 'supplier' && (
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Fournisseur Principal</label>
                <input 
                  type="text" 
                  placeholder='Ali Baba'
                  className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                />
              </div>
              
              <div>
                <label className="block text-[13px] font-semibold text-[var(--color-foreground)] mb-2">Référence Fournisseur</label>
                <input 
                  type="text" 
                  placeholder="Ref-Vendor-123"
                  className="w-full border border-[var(--color-input)] rounded-xl px-4 py-3 text-sm focus:outline-none  transition-all"
                />
              </div>
            </div>
          )}

          {/* TAB: MEDIA */}
          {activeTab === 'media' && (
            <div className="space-y-6 flex flex-col h-full justify-center">
              <div className="border-2 border-dashed border border-[var(--color-input)] rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer  transition-colors">
                <UploadCloud size={48} className="text-[var(--color-foreground)] mb-4" />
                <p className="text-sm font-semibold text-[var(--color-foreground)]">Cliquez ou glissez une image ici</p>
                <p className="text-xs text-[var(--color-foreground)] mt-2">Formats supportés: JPG, PNG, WEBP (Max 5MB)</p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 pt-4 flex justify-end gap-3 mt-auto">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button 
            className="px-6 py-2.5 rounded-xl bg-[#16A085] hover:bg-[#12876f] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            Enregistrer
          </button>
        </div>

      </div>
    </div>
  );
}
