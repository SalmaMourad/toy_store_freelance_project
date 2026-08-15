import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaTimes,
} from "react-icons/fa";

export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl animate-fadeIn"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 text-gray-500 shadow-md transition hover:scale-110 hover:text-red-500"
                >
                    <FaTimes />
                </button>

                {/* Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover"
                />

                <div className="p-6">

                    {/* Category */}
                    <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-600">
                        {product.category}
                    </span>

                    {/* Name */}
                    <h2 className="mt-2 text-3xl font-bold text-gray-800">
                        {product.name}
                    </h2>

                    {/* Price */}
                    <p className=" text-2xl font-bold text-blue-600">
                        {product.price} EGP
                    </p>

                    {/* Divider */}
                    <div className="my-2 h-px bg-gray-200"></div>

                    {/* Description */}
                    <p className="leading-7 text-gray-600">
                        {product.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-3 space-y-3">

                        <a
                            href={`https://wa.me/201122527771?text=${encodeURIComponent(
                                `Hi, I want to order: ${product.name} - ${product.price} EGP`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
                        >
                            <FaWhatsapp size={20} />
                            Order on WhatsApp
                        </a>

                        <a
                            href="https://facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-xl border border-blue-500 py-3 font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white"
                        >
                            <FaFacebook size={20} />
                            Facebook
                        </a>

                        <a
                            href="https://instagram.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-xl border border-pink-500 py-3 font-semibold text-pink-600 transition hover:bg-pink-500 hover:text-white"
                        >
                            <FaInstagram size={20} />
                            Instagram
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
// export default function ProductModal({ product, onClose }) {
//   if (!product) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-xl text-gray-400 hover:text-gray-700"
//         >
//           ✕
//         </button>

//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className="mb-4 h-64 w-full rounded-lg object-cover"
//         />

//         {/* Name */}
//         <h3 className="text-2xl font-bold text-gray-800">
//           {product.name}
//         </h3>

//         {/* Price */}
//         <p className="mt-2 text-lg font-semibold text-blue-500">
//           {product.price} EGP
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-gray-600">
//           {product.description}
//         </p>

//         {/* WhatsApp */}
//         <a
//           href={`https://wa.me/201122527771?text=${encodeURIComponent(
//             `Hi, I want to order: ${product.name} - ${product.price} EGP`
//           )}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-6 block w-full rounded-lg bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-600"
//         >
//           Order on WhatsApp
//         </a>

//         {/* Facebook */}
//         <a
//           href="https://facebook.com/yourpage"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-3 block text-center text-blue-600 hover:underline"
//         >
//           Contact on Facebook
//         </a>

//         {/* Instagram */}
//         <a
//           href="https://instagram.com/yourpage"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-1 block text-center text-pink-500 hover:underline"
//         >
//           Contact on Instagram
//         </a>
//       </div>
//     </div>
//   );
// }