"use client";
import products from "../../public/data/products/products";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [
        "All",
        "Educational",
        "Dolls",
        "Cars",
        "Plush",
    ];

    // const filteredProducts =
    //     selectedCategory === "All"
    //         ? products
    //         : products.filter(
    //             (product) => product.category === selectedCategory
    //         );
    const filteredProducts = products.filter((product) => {
        const matchCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });
    return (
        <section id="products" className="bg-gray-50 py-24">
            <div className="mx-auto max-w-6xl px-6">

                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Collection
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Find the perfect toy for every little adventure.
                    </p>
                </div>

                {/* <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for toys..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md rounded-full border border-gray-300 px-5 py-3 text-sm focus:border-pink-400 focus:outline-none"
                    />
                </div> */}
                <div className="mb-6 flex justify-center">
                    <div className="relative w-full max-w-md">

                        <span className="absolute left-4 top-3 text-gray-400">
                            🔍
                        </span>

                        <input
                            type="text"
                            placeholder="Search for toys..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
                        />
                    </div>
                </div>
                {/* Filter */}
                <div className="mb-10 flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition
                ${selectedCategory === cat
                                    ? "bg-pink-500 text-white scale-105 shadow-md"
                                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid cursor-pointer justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        // <ProductCard key={product.id} product={product} />
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
                {selectedProduct && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <div
                            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            {/* <button
                                onClick={() => setSelectedProduct(null)}
                                className="mb-4 text-gray-400 hover:text-gray-700"
                            >
                                ✕
                            </button> */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
                            >
                                ✕
                            </button>
                            {/* Image */}
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="mb-4 h-64 w-full rounded-lg object-cover"
                            />

                            {/* Name */}
                            <h3 className="text-2xl font-bold text-gray-800">
                                {selectedProduct.name}
                            </h3>

                            {/* Price */}
                            <p className="mt-2 text-lg font-semibold text-blue-500">
                                {selectedProduct.price} EGP
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-gray-600">
                                {selectedProduct.description}
                            </p>

                            {/* Button */}
                            <button className="mt-6 w-full rounded-lg bg-pink-500 py-3 text-white font-semibold hover:bg-pink-600 transition">
                                Add to Cart
                            </button>
                            <a
  href={`https://wa.me/201122527771?text=${encodeURIComponent(
    `Hi, I want to order: ${selectedProduct.name} - ${selectedProduct.price} EGP`
  )}`}
  target="_blank"
  className="mt-4 block w-full rounded-lg bg-green-500 py-3 text-center text-white font-semibold hover:bg-green-600 transition"
>
  Order on WhatsApp
</a>
<a
  href="https://facebook.com/yourpage"
  target="_blank"
  className="mt-3 block text-center text-blue-600 hover:underline"
>
  Contact on Facebook
</a>
<a
  href="https://instagram.com/yourpage"
  target="_blank"
  className="mt-1 block text-center text-pink-500 hover:underline"
>
  Contact on Instagram
</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}