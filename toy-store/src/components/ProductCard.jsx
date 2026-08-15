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
// // export default function ProductCard({ product }) {
// // export default function ProductCard({ product, onClick }) {
// export default function ProductCard({ product, onClick, onDelete, onEdit }) {
//     return (
//         <div onClick={onClick} className="group flex h-full w-full max-w-[270px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg">      {/* Image */}
//             <div className="relative h-64 overflow-hidden">

//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

//                     <p className="text-sm text-white">
//                         {product.description}
//                     </p>

//                 </div>

//             </div>

//             {/* Card Content */}
//             {/* <div className="p-5"> */}
//             <div className="flex flex-1 flex-col p-5">
//                 {/* <h3 className="text-xl font-bold text-gray-800">
//           {product.name}
//         </h3> */}
//                 <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
//                     {product.name}
//                 </h3>
//                 {/* <div className="mt-4 flex items-center justify-between"> */}
//                 <div className="mt-auto flex items-center justify-between">
//                     <span className="font-semibold text-blue-500">
//                         {product.price} EGP
//                     </span>

//                     <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">
//                         {product.category}
//                     </span>

//                 </div>
//                 <div className="mt-3 flex justify-between">

//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             onEdit(product);
//                         }}
//                         className="text-sm text-blue-500 hover:underline"
//                     >
//                         Edit
//                     </button>

//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             onDelete(product.id);
//                         }}
//                         className="text-sm text-red-500 hover:underline"
//                     >
//                         Delete
//                     </button>

//                 </div>
//             </div>

//         </div>
//     );
// }