export default function ProductCard({ product, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group flex h-[390px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                    {/* <p className="text-sm leading-relaxed text-white">
                        {product.description}
                    </p> */}

                    <span className="mt-10 rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition group-hover:bg-white group-hover:text-gray-900">
                        View Details
                    </span>

                </div>

            </div>

            {/* Content */}

            <div className="flex flex-1 flex-col px-4 py-4">

                {/* Category */}

                <span className="mb-3 w-fit rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-600">

                    {product.category}

                </span>

                {/* Name */}

                <h3 className="line-clamp-2 text-xl font-bold text-gray-800">

                    {product.name}

                </h3>

                {/* Price */}

                <p className="mt-1 pt-1 text-xl font-bold text-blue-600">

                    {product.price} EGP

                </p>

            </div>

        </div>
    );
}