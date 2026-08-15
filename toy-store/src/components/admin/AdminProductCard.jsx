export default function AdminProductCard({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">

      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-800">
        {product.name}
      </h3>

      <p className="mt-1 text-blue-500 font-semibold">
        {product.price} EGP
      </p>

      <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
        {product.category}
      </span>

      <div className="mt-5 flex gap-3">

        <button
          onClick={() => onEdit(product)}
          className="flex-1 rounded-lg bg-blue-500 py-2 text-white transition hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="flex-1 rounded-lg bg-red-500 py-2 text-white transition hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}