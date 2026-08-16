import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaHeart,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className=" mt-16 bg-gray-900 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-6 text-center">

                <h2 className="text-3xl font-bold text-pink-400">
                    🧸 Batates Toys
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
                    For Ordering, Contact us on WhatsApp or visit our social media pages for the latest updates and promotions.
                </p>
                <div className="mt-5 flex items-center gap-6">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/201037027694"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
                    >
                        <FaWhatsapp size={22} />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/18J8ipJtpi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
                    >
                        <FaFacebookF size={20} />
                    </a>

                    {/* Instagram */}
                    <a
                        href="hhttps://www.instagram.com/batatestoys?igsh=M2FmeXJjZW5ic3pq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
                    >
                        <FaInstagram size={22} />
                    </a>

                </div>

                <div className="mt-5 mb-3 w-full border-t border-gray-700"></div>


                <div className="space-y-1 text-center">

                    <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        Made by Salma Mourad with
                        <FaHeart className="text-pink-500" />
                    </p>

                    <p className="text-sm text-gray-500">
                        © 2026 Batates Toys. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}