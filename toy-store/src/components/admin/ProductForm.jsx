export default function ProductForm({
  newProduct,
  setNewProduct,
  editingProduct,
  onSubmit,
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              name: e.target.value,
            })
          }
          className="rounded border p-2"
        />

        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              price: e.target.value,
            })
          }
          className="rounded border p-2"
        />

        <select
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              category: e.target.value,
            })
          }
          className="rounded border p-2"
        >
          <option value="">Select Category</option>
          <option value="Educational">Educational</option>
          <option value="Dolls">Dolls</option>
          <option value="Cars">Cars</option>
          <option value="Plush">Plush</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              image: e.target.value,
            })
          }
          className="rounded border p-2"
        />

        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              description: e.target.value,
            })
          }
          className="rounded border p-2 md:col-span-2"
        />

      </div>

      <button
        onClick={onSubmit}
        className="mt-6 w-full rounded-lg bg-pink-500 py-3 text-white transition hover:bg-pink-600"
      >
        {editingProduct ? "Update Product" : "Add Product"}
      </button>

    </div>
  );
}