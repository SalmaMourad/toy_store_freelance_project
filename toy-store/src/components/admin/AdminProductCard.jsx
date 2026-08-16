import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function AdminProductCard({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex w-full items-center gap-5 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">

      {/* Product Image */}
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0 flex-1">

        {/* Name */}
        <h3 className="truncate text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        {/* Category */}
        <span className="mt-1 inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {product.category}
        </span>

        {/* Description */}
        <p className="mt-2 truncate text-sm text-gray-500">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="hidden w-28 shrink-0 text-center sm:block">
        <p className="text-xs font-medium uppercase text-gray-400">
          Price
        </p>

        <p className="mt-1 text-lg font-bold text-blue-600">
          {product.price} EGP
        </p>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">

        {/* Edit */}
        <button
          onClick={() => onEdit(product)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          title="Edit product"
        >
          <FaEdit />
        </button>

        {/* Delete */}
        <button
          onClick={() => onDelete(product.id)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
          title="Delete product"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
}