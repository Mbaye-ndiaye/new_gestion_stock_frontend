
import { useState } from 'react'
import { FiSearch, FiDownload, FiPlus, FiFilter, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi'

interface Product {
  id: number
  sku: string
  name: string
  category: string
  stock: number
  price: number
  status: 'En Stock' | 'Rupture' | 'Stock Faible'
}

function Products() {
  const [products] = useState<Product[]>([
    { id: 1, sku: 'SKU001', name: 'Laptop Dell XPS 15', category: 'Informatique', stock: 15, price: 1500000, status: 'En Stock' },
    { id: 2, sku: 'SKU002', name: 'iPhone 14 Pro', category: 'Téléphonie', stock: 8, price: 850000, status: 'En Stock' },
    { id: 3, sku: 'SKU003', name: 'Samsung Galaxy Tab S9', category: 'Tablettes', stock: 2, price: 450000, status: 'Stock Faible' },
    { id: 4, sku: 'SKU004', name: 'MacBook Air M2', category: 'Informatique', stock: 0, price: 1200000, status: 'Rupture' },
    { id: 5, sku: 'SKU005', name: 'iPad Pro 12.9', category: 'Tablettes', stock: 12, price: 750000, status: 'En Stock' },
    { id: 6, sku: 'SKU006', name: 'AirPods Pro 2', category: 'Accessoires', stock: 25, price: 125000, status: 'En Stock' },
    { id: 7, sku: 'SKU007', name: 'Logitech MX Master 3', category: 'Accessoires', stock: 3, price: 45000, status: 'Stock Faible' },
    { id: 8, sku: 'SKU008', name: 'Samsung Monitor 4K', category: 'Informatique', stock: 7, price: 320000, status: 'En Stock' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Toutes')

  const categories = ['Toutes', 'Informatique', 'Téléphonie', 'Tablettes', 'Accessoires']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Toutes' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Stock': return 'text-green-600 bg-green-100'
      case 'Rupture': return 'text-red-600 bg-red-100'
      case 'Stock Faible': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Produits</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white hover:shadow-sm transition-all">
            <FiDownload className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Import CSV</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            <FiPlus className="w-4 h-4" />
            <span>Ajouter un produit</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-all">
          <FiFilter className="w-4 h-4 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="outline-none bg-transparent text-gray-700"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">SKU</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Produit</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Catégorie</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Stock Actuel</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Prix Unitaire</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Statut</th>
              <th className="text-left p-4 font-medium text-gray-700 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="text-sm font-mono text-gray-600">{product.sku}</span>
                </td>
                <td className="p-4">
                  <div className="font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="p-4">
                  <span className="text-sm text-gray-600">{product.category}</span>
                </td>
                <td className="p-4">
                  <span className="font-medium text-gray-900">{product.stock}</span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-gray-900">{product.price.toLocaleString()} FCFA</span>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <FiEye className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <FiEdit2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <FiTrash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-600">
          Affichage de <span className="font-medium">1</span> à <span className="font-medium">{filteredProducts.length}</span> sur <span className="font-medium">{filteredProducts.length}</span> produits
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm text-gray-700">
            Précédent
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm">1</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm text-gray-700">
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products