import DataTable from "../../shared/components/table/DataTable"
import { columns } from "../../shared/components/table/columns"
import TableToolbar from "../../shared/components/table/TableToolbar"
import CreateProductModal from "../../shared/components/modals/CreateProductModal"
import ProductGrid from "../../shared/components/table/ProductGrid"
import img from "../../assets/img.png"
import img1 from "../../assets/img (1).png"
import img2 from "../../assets/img (2).png"
import img3 from "../../assets/img (3).png"
import { useState } from "react"



interface Product {
  id: number
  sku: string
  name: string
  category: string
  stock: number
  price: number
  status: 'En Stock' | 'Rupture' | 'Stock Faible'
}


export default function Products() {
  const [search, setSearch] = useState("")
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')
  const [category, setCategory] = useState("")
const [status, setStatus] = useState("")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  // 🔥 LES DONNÉES TEMPORAIRES ICI
  const data = [

    {
      name: "Produit 1",
      sku: "PROD-001",
      category: "Catégorie 1",
      stock: 10,
      price: 100000,
      status: "IN_STOCK",
      image: img,
    },
    {
      name: "iPhone 15 Pro Max",
      sku: "APL-IP15-PMAX",
      category: "Électronique",
      stock: 24,
      price: 850000,
      status: "IN_STOCK",
      image: img1,
    },
    {
      name: "MacBook Air M2",
      sku: "APL-MAC-M2",
      category: "Électronique",
      stock: 8,
      price: 1200000,
      status: "LOW",
      image: img2,
    },
    {
      name: "AirPods Pro",
      sku: "APL-AIRPRO",
      category: "Électronique",
      stock: 2,
      price: 250000,
      status: "CRITICAL",
      image: img3,
    },

 {
      name: "Produit 1",
      sku: "PROD-001",
      category: "Catégorie 1",
      stock: 10,
      price: 100000,
      status: "IN_STOCK",
      image: img,
    },
    {
      name: "iPhone 15 Pro Max",
      sku: "APL-IP15-PMAX",
      category: "Électronique",
      stock: 24,
      price: 850000,
      status: "IN_STOCK",
      image: img1,
    },
    {
      name: "MacBook Air M2",
      sku: "APL-MAC-M2",
      category: "Électronique",
      stock: 8,
      price: 1200000,
      status: "LOW",
      image: img2,
    },
    {
      name: "AirPods Pro",
      sku: "APL-AIRPRO",
      category: "Électronique",
      stock: 2,
      price: 250000,
      status: "CRITICAL",
      image: img3,
    },

     {
      name: "Produit 1",
      sku: "PROD-001",
      category: "Catégorie 1",
      stock: 10,
      price: 100000,
      status: "IN_STOCK",
      image: img,
    },
    {
      name: "iPhone 15 Pro Max",
      sku: "APL-IP15-PMAX",
      category: "Électronique",
      stock: 24,
      price: 850000,
      status: "IN_STOCK",
      image: img1,
    },
    {
      name: "MacBook Air M2",
      sku: "APL-MAC-M2",
      category: "Électronique",
      stock: 8,
      price: 1200000,
      status: "LOW",
      image: img2,
    },
    {
      name: "AirPods Pro",
      sku: "APL-AIRPRO",
      category: "Électronique",
      stock: 2,
      price: 250000,
      status: "CRITICAL",
      image: img3,
    },

     {
      name: "Produit 1",
      sku: "PROD-001",
      category: "Catégorie 1",
      stock: 10,
      price: 100000,
      status: "IN_STOCK",
      image: img,
    },
    {
      name: "iPhone 15 Pro Max",
      sku: "APL-IP15-PMAX",
      category: "Électronique",
      stock: 24,
      price: 850000,
      status: "IN_STOCK",
      image: img1,
    },
    {
      name: "MacBook Air M2",
      sku: "APL-MAC-M2",
      category: "Électronique",
      stock: 8,
      price: 1200000,
      status: "LOW",
      image: img2,
    },
    {
      name: "AirPods Pro",
      sku: "APL-AIRPRO",
      category: "Électronique",
      stock: 2,
      price: 250000,
      status: "CRITICAL",
      image: img3,
    },
  ]

  // const rechercheData = data.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase()) ||
  //   item.sku.toLowerCase().includes(search.toLowerCase())
  // )

const filteredData = data.filter((item) => {
  const matchSearch =
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.sku.toLowerCase().includes(search.toLowerCase())

  const matchCategory = category ? item.category === category : true
  const matchStatus = status ? item.status === status : true

  return matchSearch && matchCategory && matchStatus
})
  

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--color-foreground)]">Catalogue Produits</h1>
          <p className="text-sm text-[var(--color-muted)] pt-2">
            Gestion et suivi des produits <span className="text-[var(--color-stock-ok)]">6 références</span> actives
          </p>
        </div>

        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[var(--color-stock-ok)] text-white px-3 py-1 rounded-2xl shadow-lg"
        >
          + Nouveau Produit
        </button>
      </div>

      {/* 🔍 Toolbar */}
      <TableToolbar
        search={search}
        setSearch={setSearch}
        viewMode={viewMode}
        setViewMode={setViewMode}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      {viewMode === 'table' ? (
        <DataTable columns={columns} data={filteredData}  />

      ) : (
        <ProductGrid 
          data={filteredData} 
          onAddProduct={() => setIsCreateModalOpen(true)}
        />
      )}

      {/* Table */}

      <CreateProductModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  )
}