"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import ProductForm from "@/components/admin/ProductForm";
import AdminProductList from "@/components/admin/AdminProductList";
import AdminStats from "@/components/admin/AdminStats";
export default function AdminPage() {
    const router = useRouter();

    const [editingProduct, setEditingProduct] = useState(null);

    const [toast, setToast] = useState("");

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });
    const showToast = (message) => {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2500);
    };
    const {
        products,
        addProduct,
        editProduct,
        deleteProduct,
    } = useProducts();
    const handleSubmit = () => {

        if (!newProduct.name || !newProduct.price) return;

        if (editingProduct) {

            editProduct({
                ...newProduct,
                id: editingProduct.id,
            });

            showToast("Product updated ✏️");

            setEditingProduct(null);

        } else {

            addProduct({
                id: Date.now(),
                ...newProduct,
                price: Number(newProduct.price),
            });

            showToast("Product added 🎉");

        }

        setNewProduct({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
        });

    };
    const handleDelete = (id) => {

        if (
            !window.confirm(
                "Delete this product?"
            )
        ) return;

        deleteProduct(id);

        showToast("Product deleted 🗑");

    };
    // const { products } = useProducts();
const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    router.push("/");
};
    const totalCategories =
        new Set(
            products.map(
                (product) => product.category
            )
        ).size;

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

}, []);
    return (
        
        <main className="min-h-screen bg-gray-100">

           <div className="mx-auto max-w-7xl p-8">

    <div className="flex items-center justify-between">

        <div>

            <h1 className="text-4xl font-bold text-gray-800">
                🧸 Toy Store Admin
            </h1>

            <p className="mt-2 text-gray-500">
                Manage your products easily.
            </p>

        </div>

        <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
        >
            Logout
        </button>

    </div>

</div>
            {/* <AdminStats
                totalProducts={products.length}
                totalCategories={totalCategories}
            />
            <ProductForm />

            <AdminProductList /> */}
            <AdminStats
                products={products}
            />
            <div className="mt-10">

                <ProductForm
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    editingProduct={editingProduct}
                    onSubmit={handleSubmit}
                />

            </div>
            <div className="mt-10">

                <AdminProductList
                    products={products}
                    onEdit={(product) => {

                        setEditingProduct(product);
                        setNewProduct(product);

                    }}
                    onDelete={handleDelete}
                />

            </div>
            {toast && (
                <div className="fixed bottom-6 right-6 rounded-lg bg-black px-6 py-3 text-white">
                    {toast}
                </div>
            )}
            <div className="mt-10 rounded-xl bg-white p-8 text-center shadow">
                <h2 className="text-2xl font-semibold text-gray-700">
                    🚧 Product Management
                </h2>

                <p className="mt-3 text-gray-500">
                    Add, edit and delete products will be implemented here.
                </p>
            </div>
        </main>
    );
}