export default function AdminStats({ products }) {
    const totalProducts = products.length;
    const totalCategories = new Set(products.map((product) => product.category)).size;

    return (
        <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <p className="text-gray-500">
                    Total Products
                </p>

                <h2 className="mt-3 text-4xl font-bold text-pink-500">
                    {totalProducts}
                </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <p className="text-gray-500">
                    Categories
                </p>

                <h2 className="mt-3 text-4xl font-bold text-blue-500">
                    {totalCategories}
                </h2>
            </div>

        </div>
    );
}