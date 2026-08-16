import AdminProductCard from "./AdminProductCard";

export default function ProductList({
  products,
  onProductClick,
  onEdit,
  onDelete,
}) {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-4">
      {products.map((product) => (
        <AdminProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}