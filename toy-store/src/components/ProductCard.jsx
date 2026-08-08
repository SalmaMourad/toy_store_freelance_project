// export default function ProductCard({ product }) {
export default function ProductCard({ product, onClick }) {
    return (
        <div onClick={onClick} className="group flex h-full w-full max-w-[270px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg">      {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                    <p className="text-sm text-white">
                        {product.description}
                    </p>

                </div>

            </div>

            {/* Card Content */}
            {/* <div className="p-5"> */}
            <div className="flex flex-1 flex-col p-5">
                {/* <h3 className="text-xl font-bold text-gray-800">
          {product.name}
        </h3> */}
                <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                    {product.name}
                </h3>
                {/* <div className="mt-4 flex items-center justify-between"> */}
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold text-blue-500">
                        {product.price} EGP
                    </span>

                    <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">
                        {product.category}
                    </span>

                </div>

            </div>

        </div>
    );
}