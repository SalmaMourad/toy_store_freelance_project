"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductModal from "./ProductModal";
import useProducts from "../hooks/useProducts";
export default function ProductsSection() {

    const { products } = useProducts();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });
    // const categories = [
    //     "All",
    //     "Educational",
    //     "Dolls",
    //     "Cars",
    //     "Plush",
    // ];
    const categories = [
        "All",
        "Educational",
        "Dolls",
        "Cars",
        "Plush",
        "Gaming",
        "Outdoor",
    ];
    const filteredProducts = products.filter((product) => {
        const matchCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });
    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.price) return;

        if (editingProduct) {
            // EDIT
            editProduct({
                ...newProduct,
                id: editingProduct.id,
            });
            setEditingProduct(null);
            showToast("Product updated successfully ✏️");
        } else {
            // ADD
            const productToAdd = {
                id: Date.now(),
                ...newProduct,
                price: Number(newProduct.price),
            };

            // setProducts([productToAdd, ...products]);
            addProduct(productToAdd);
            showToast("Product added successfully 🎉");
        }

        setNewProduct({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
        });

        setShowForm(false);
    };
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");

        if (!confirmDelete) return;

        deleteProduct(id);
        showToast("Product deleted 🗑");
    };
    return (
        <section
            id="products"
            className="bg-gradient-to-b from-white to-gray-50 pt-15"
        // py-28
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Title */}
                <div className="mb-5 text-center">

                    <h2 className="text-5xl font-extrabold text-gray-800">

                        Our Collection

                    </h2>

                </div>

                {/* Filter */}
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <div className="mb-10 ">
                    <SearchBar

                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    /></div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                            onDelete={handleDelete}
                            onEdit={(product) => {
                                setEditingProduct(product);
                                setShowForm(true);
                                setNewProduct(product);
                            }}
                        />
                    ))}
                </div>
                {filteredProducts.length === 0 && (

                    <div className="py-20 text-center">

                        <h3 className="text-2xl font-semibold text-gray-700">
                            No toys found
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Try another category or search term.
                        </p>

                    </div>

                )}
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    );
}