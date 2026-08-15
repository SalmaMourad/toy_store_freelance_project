import { useEffect, useState } from "react";
import defaultProducts from "../data/products";

export default function useProducts() {

    const [products, setProducts] = useState(() => {
        if (typeof window === "undefined") {
            return defaultProducts;
        }

        const stored = localStorage.getItem("products");

        return stored ? JSON.parse(stored) : defaultProducts;
    });

    useEffect(() => {
        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );
    }, [products]);

    const addProduct = (product) => {
        setProducts((prev) => [product, ...prev]);
    };

    const editProduct = (updatedProduct) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts((prev) =>
            prev.filter((product) => product.id !== id)
        );
    };

    return {
        products,
        addProduct,
        editProduct,
        deleteProduct,
    };
}
// import { useEffect, useState } from "react";
// import defaultProducts from "../data/products";

// export default function useProducts() {

//     const [products, setProducts] = useState(() => {
//         if (typeof window === "undefined") {
//             return defaultProducts;
//         }

//         const stored = localStorage.getItem("products");

//         return stored ? JSON.parse(stored) : defaultProducts;
//     });

//     useEffect(() => {
//         localStorage.setItem(
//             "products",
//             JSON.stringify(products)
//         );
//     }, [products]);

//     return {
//         products,
//         setProducts,
//     };
// }

// // localStorage.removeItem("products"); in console to reset the products to defaultProducts