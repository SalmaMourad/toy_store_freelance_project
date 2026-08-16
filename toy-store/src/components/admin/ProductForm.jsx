"use client";

import { FaTimes } from "react-icons/fa";

export default function ProductForm({
  isOpen,
  onClose,
  newProduct,
  setNewProduct,
  onSubmit,
  editingProduct,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl animate-fadeIn sm:p-8"
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-100 hover:text-red-500"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {editingProduct
              ? "Edit Product"
              : "Add New Product"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {editingProduct
              ? "Update the product information below."
              : "Add a new toy to your collection."}
          </p>
        </div>

        {/* Form */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              placeholder="e.g. Teddy Bear"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              placeholder="e.g. 250"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            >
              <option value="">
                Select Category
              </option>

              <option value="Educational">
                Educational
              </option>

              <option value="Dolls">
                Dolls
              </option>

              <option value="Cars">
                Cars
              </option>

              <option value="Plush">
                Plush
              </option>
              
              <option value="Plush">
                Gaming
              </option>

              <option value="Plush">
                Outdoor
              </option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              placeholder="https://..."
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  image: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe the product..."
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  description: e.target.value,
                })
              }
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="rounded-lg bg-pink-500 px-6 py-2.5 font-semibold text-white transition hover:bg-pink-600 hover:scale-[1.02]"
          >
            {editingProduct
              ? "Update Product"
              : "Add Product"}
          </button>

        </div>
      </div>
    </div>
  );
}