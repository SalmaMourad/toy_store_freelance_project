"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    FaPlus,
    FaSignOutAlt,
    FaBoxOpen,
    FaHome,
} from "react-icons/fa";

import useProducts from "@/hooks/useProducts";
import ProductForm from "@/components/admin/ProductForm";
import AdminProductList from "@/components/admin/AdminProductList";
import AdminStats from "@/components/admin/AdminStats";

export default function AdminPage() {
    const router = useRouter();

    // =========================
    // State
    // =========================

    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [toast, setToast] = useState("");
    const [productToDelete, setProductToDelete] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });

    // =========================
    // Products
    // =========================

    const {
        products,
        addProduct,
        editProduct,
        deleteProduct,
    } = useProducts();

    // =========================
    // Toast
    // =========================

    const showToast = (message) => {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2500);
    };

    // =========================
    // Open Add Form
    // =========================

    const handleAddClick = () => {
        setEditingProduct(null);

        setNewProduct({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
        });

        setShowForm(true);
    };

    // =========================
    // Open Edit Form
    // =========================

    const handleEdit = (product) => {
        setEditingProduct(product);

        setNewProduct({
            ...product,
            price: product.price,
        });

        setShowForm(true);
    };

    // =========================
    // Submit
    // =========================

    const handleSubmit = () => {
        if (!newProduct.name || !newProduct.price) {
            return;
        }

        if (editingProduct) {
            editProduct({
                ...newProduct,
                id: editingProduct.id,
                price: Number(newProduct.price),
            });

            showToast("Product updated successfully ✏️");
        } else {
            addProduct({
                id: Date.now(),
                ...newProduct,
                price: Number(newProduct.price),
            });

            showToast("Product added successfully 🎉");
        }

        // Reset
        setNewProduct({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
        });

        setEditingProduct(null);

        // Close popup
        setShowForm(false);
    };

    // =========================
    // Delete
    // =========================

    const handleDelete = (id) => {
        const product = products.find(
            (product) => product.id === id
        );

        if (!product) return;

        setProductToDelete(product);
    };

    // =========================
    // Logout
    // =========================

    const handleLogout = () => {
        sessionStorage.removeItem("isAdmin");
        router.push("/");
    };

    // =========================
    // Admin Authentication
    // =========================

    useEffect(() => {
        const isAuthenticated =
            sessionStorage.getItem("isAdmin");

        if (isAuthenticated === "true") {
            return;
        }

        const password = prompt("Enter admin password");

        if (password === "1234") {
            sessionStorage.setItem(
                "isAdmin",
                "true"
            );
        } else {
            router.push("/");
        }
    }, [router]);

    // =========================
    // Render
    // =========================
    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-3xl">
                    📦
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">
                    No products yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                    Add your first product to start building your toy collection.
                </p>
            </div>
        );
    }
    return (

        <main className="min-h-screen bg-gray-50">

            {/* ================= HEADER ================= */}

            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-8">

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* Title */}
                        <div>
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                                    <FaBoxOpen size={22} />
                                </div>

                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">
                                       Batates Toy Store Admin
                                    </h1>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Manage your products and store collection.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-3">

                            {/* Back to Store */}
                            <button
                                onClick={() => router.push("/")}
                                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-800"
                            >
                                <FaHome size={15} />
                                Back to Store
                            </button>

                            {/* Add Product */}
                            <button
                                onClick={handleAddClick}
                                className="flex items-center gap-2 rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-pink-600 hover:shadow-md"
                            >
                                <FaPlus size={14} />
                                Add Product
                            </button>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 font-medium text-red-500 transition hover:bg-red-50"
                            >
                                <FaSignOutAlt size={15} />
                                Logout
                            </button>

                        </div>

                    </div>

                </div>
            </header>

            {/* ================= CONTENT ================= */}

            <div className="mx-auto max-w-7xl px-6 py-10">

                {/* Stats */}
                <AdminStats
                    products={products}
                />

                {/* Products Section */}
                <section className="mt-10">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Products
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                View and manage your toy collection.
                            </p>
                        </div>

                        <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
                            {products.length}{" "}
                            {products.length === 1
                                ? "Product"
                                : "Products"}
                        </span>

                    </div>

                    {/* Product List */}
                    <AdminProductList
                        products={products}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </section>

            </div>

            {/* ================= PRODUCT FORM POPUP ================= */}

            <ProductForm
                isOpen={showForm}
                onClose={() => {
                    setShowForm(false);
                    setEditingProduct(null);
                }}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                editingProduct={editingProduct}
                onSubmit={handleSubmit}
            />
            {productToDelete && (
                <div
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={() => setProductToDelete(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fadeIn"
                    >

                        {/* Icon */}
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                            🗑️
                        </div>

                        {/* Title */}
                        <h2 className="mt-5 text-center text-2xl font-bold text-gray-800">
                            Delete Product?
                        </h2>

                        {/* Message */}
                        <p className="mt-3 text-center leading-6 text-gray-500">
                            Are you sure you want to delete{" "}
                            <span className="font-semibold text-gray-700">
                                {productToDelete.name}
                            </span>
                            ?
                            <br />
                            This action cannot be undone.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-3">

                            <button
                                onClick={() => setProductToDelete(null)}
                                className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold text-gray-600 transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    deleteProduct(productToDelete.id);

                                    setProductToDelete(null);

                                    showToast(
                                        "Product deleted successfully 🗑️"
                                    );
                                }}
                                className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                </div>
            )}
            {/* ================= TOAST ================= */}

            {toast && (
                <div className="fixed bottom-6 right-6 z-[100] rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-xl animate-fadeIn">
                    {toast}
                </div>
            )}

        </main>
    );
}