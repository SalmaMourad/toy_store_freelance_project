"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductModal from "./ProductModal";
import useProducts from "../hooks/useProducts";
import ProductForm from "./admin/ProductForm";
// import ProductList from "./admin/AdminProductList";
// import {
//     FaWhatsapp,
//     FaFacebook,
//     FaInstagram,
//     FaSearch,
// } from "react-icons/fa";
export default function ProductsSection() {
    // const [selectedCategory, setSelectedCategory] = useState("All");
    // const [selectedProduct, setSelectedProduct] = useState(null);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [products, setProducts] = useState([]);
    // const { products, setProducts } = useProducts();
    // const {
    //     products,
    //     addProduct,
    //     editProduct,
    //     deleteProduct,
    // } = useProducts();
    const { products } = useProducts();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // const [showForm, setShowForm] = useState(false);
    // const [editingProduct, setEditingProduct] = useState(null);
    // const [toast, setToast] = useState("");
    // const showToast = (message) => {
    //     setToast(message);

    //     setTimeout(() => {
    //         setToast("");
    //     }, 2500);
    // };
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });
    const categories = [
        "All",
        "Educational",
        "Dolls",
        "Cars",
        "Plush",
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
            // const updated = products.map((p) =>
            //     p.id === editingProduct.id
            //         ? { ...newProduct, id: editingProduct.id }
            //         : p
            // );

            // setProducts(updated);
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

        // const updated = products.filter((p) => p.id !== id);
        // setProducts(updated);
        deleteProduct(id);
        showToast("Product deleted 🗑");
    };
    return (
        // <section id="products" className="bg-gray-50 py-24">
        <section
            id="products"
            className="bg-gradient-to-b from-white to-gray-50 pt-15"
        // py-28
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* <div className="mb-6 flex justify-end">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
                    >
                        {showForm ? "Close" : "+ Add Product"}
                    </button>
                </div> */}
                {/* add edit form */}
                {/* {showForm && (
                    <ProductForm
                        newProduct={newProduct}
                        setNewProduct={setNewProduct}
                        editingProduct={editingProduct}
                        onSubmit={handleAddProduct}
                    />
                )} */}

                {/* <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Collection
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Find the perfect toy for every little adventure.
                    </p>
                </div> */}
                {/* Title */}
                <div className="mb-5 text-center">

                    <h2 className="text-5xl font-extrabold text-gray-800">

                        Our Collection

                    </h2>

                    {/* <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">

                        Discover our carefully selected toys that inspire creativity,
                        learning and endless fun.

                    </p> */}

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

                    {/* <div className="grid cursor-pointer justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4"> */}
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
            {/* {toast && (
                <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-black px-6 py-3 text-white shadow-lg animate-fadeIn">
                    {toast}
                </div>
            )} */}
        </section>
    );
}