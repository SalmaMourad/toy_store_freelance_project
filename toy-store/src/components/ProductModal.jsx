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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    grid
                    w-full
                    max-w-5xl
                    h-[80vh]
                    max-h-[650px]
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    shadow-2xl
                    animate-fadeIn
                    md:grid-cols-2
                "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-4
                        top-4
                        z-30
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-gray-500
                        shadow-lg
                        transition
                        hover:scale-110
                        hover:text-red-500
                    "
                >
                    <FaTimes size={18} />
                </button>

                {/* ================= IMAGE ================= */}
                <div className="flex items-center justify-center bg-gray-100 p-6 md:p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="
                            h-full
                            w-full
                            object-contain
                            rounded-2xl
                        "
                    />
                </div>

                {/* ================= INFORMATION ================= */}
                <div className="flex flex-col overflow-y-auto p-7 sm:p-9 md:p-10">

                    {/* Category */}
                    <div>
                        <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-600">
                            {product.category}
                        </span>
                    </div>

                    {/* Name */}
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
                        {product.name}
                    </h2>

                    {/* Price */}
                    <p className="mt-3 text-2xl font-bold text-blue-600">
                        {product.price} EGP
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gray-200"></div>

                    {/* Description */}
                    <div>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                            Description
                        </h3>

                        <p className="leading-7 text-gray-600">
                            {product.description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto pt-8 space-y-3">

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/201122527771?text=${encodeURIComponent(
                                `Hi, I want to order: ${product.name} - ${product.price} EGP`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-green-500
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-green-600
                                hover:scale-[1.02]
                            "
                        >
                            <FaWhatsapp size={20} />
                            Order on WhatsApp
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                border
                                border-blue-500
                                py-3
                                font-semibold
                                text-blue-600
                                transition
                                hover:bg-blue-500
                                hover:text-white
                            "
                        >
                            <FaFacebook size={20} />
                            Facebook
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                border
                                border-pink-500
                                py-3
                                font-semibold
                                text-pink-600
                                transition
                                hover:bg-pink-500
                                hover:text-white
                            "
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