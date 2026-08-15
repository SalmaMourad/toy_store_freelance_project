// import ProductCard from "../ProductCard";
import AdminProductCard from "./AdminProductCard";
export default function ProductList({
  products,
  onProductClick,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid cursor-pointer justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        // <ProductCard
        //   key={product.id}
        //   product={product}
        //   onClick={() => onProductClick(product)}
        //   onEdit={onEdit}
        //   onDelete={onDelete}
        // />
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