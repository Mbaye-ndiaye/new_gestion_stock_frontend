export default function ProductGrid({ data, onAddProduct }: { data: any[], onAddProduct?: () => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product, index) => (
        <div key={index} className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="relative h-60 bg-gray-50 m-2 rounded-2xl overflow-hidden flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-3 right-3">
              {product.status === 'IN_STOCK' && (
                <span className="bg-[#E8F5E9] text-[#16A085] text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide">IN STOCK</span>
              )}
              {product.status === 'LOW' && (
                <span className="bg-[#FFF8E1] text-[#F59E0B] text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide">LOW STOCK</span>
              )}
              {product.status === 'CRITICAL' && (
                <span className="bg-[#FEE2E2] text-[#EF4444] text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide">CRITICAL</span>
              )}
            </div>
          </div>

          <div className="p-5 pt-3 flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">
                <span>{product.category}</span>
                <span>{product.sku}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Prix unitaire</p>
                <p className="text-[19px] font-extrabold text-[#16A085] flex items-baseline gap-1 leading-none">
                  {product.price.toLocaleString('fr-FR')} <span className="text-[10px] font-extrabold">FCFA</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Stock</p>
                <p className="text-[19px] font-extrabold text-gray-900 leading-none">{product.stock}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Add Product Card */}
      <div 
        onClick={onAddProduct}
        className="bg-[#F8FAFC]  rounded-[20px] border-dashed border-gray-200 border-2 flex flex-col justify-center items-center h-full min-h-[360px] cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-3">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <p className="text-sm font-semibold text-gray-400">Ajouter un produit</p>
      </div>
    </div>
  )
}
