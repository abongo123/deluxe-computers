export default function SidebarFilters({ categories, filters, setFilters, maxPrice }) {
  return (
    <aside className="w-64 p-4 border-r border-white/20 min-h-screen">
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">All Products</h3>
        <ul className="space-y-2 text-sm">
          <li
            onClick={() => setFilters({ ...filters, type: "All" })}
            className={`cursor-pointer ${filters.type === "All" ? "underline" : ""}`}
          >
            All Products
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setFilters({ ...filters, type: cat })}
              className={`cursor-pointer ${filters.type === cat ? "underline" : ""}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Filters */}
      <div>
        <h3 className="font-semibold mb-3">Filter By:</h3>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm mb-1">
            Kshs 0 - Kshs {filters.price.toLocaleString("en-KE")}
          </label>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="1"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Minimum Quantity</label>
          <input
            type="number"
            min="0"
            value={filters.quantity}
            onChange={(e) => setFilters({ ...filters, quantity: Number(e.target.value) })}
            className="w-full p-1 rounded text-black"
          />
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm mb-1">Size (ml)</label>
          <select
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            className="w-full p-1 rounded text-black"
          >
            <option value="All">Any</option>
            <option value="30">30ml</option>
            <option value="50">50ml</option>
            <option value="75">75ml</option>
            <option value="100">100ml</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
