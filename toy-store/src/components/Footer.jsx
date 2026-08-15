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

        {/* <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
            Discover a wonderful collection of toys carefully selected to bring
            happiness, creativity and unforgettable moments to every child.
        </p> */}
<p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
            For Ordering, Contact us on WhatsApp or visit our social media pages for the latest updates and promotions.
        </p>
        <div className="mt-5 flex items-center gap-6">

            {/* WhatsApp */}
            <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
            >
                <FaWhatsapp size={22} />
            </a>

            {/* Facebook */}
            <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
                <FaFacebookF size={20} />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
                <FaInstagram size={22} />
            </a>

        </div>

        <div className="mt-5 mb-3 w-full border-t border-gray-700"></div>

        {/* <p className="flex items-center gap-2 text-sm text-gray-500">
            Made with <FaHeart className="text-pink-500" /> © 2026 Little Joy Toys
        </p> */}
<div className="space-y-1 text-center">

    <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
        Made with
        <FaHeart className="text-pink-500" />
    </p>

    <p className="text-sm text-gray-500">
        © 2026 Little Joy Toys. All rights reserved.
    </p>

</div>
    </div>
</footer>
    );
}
// export default function Footer() {
//   return (
//     <footer id="footer" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
//       <div className="mx-auto max-w-6xl px-6 py-12 text-center">

//         {/* Brand */}
//         <h2 className="text-2xl font-bold text-pink-400">
//           🧸 Toy Store
//         </h2>

//         {/* Description */}
//         <p className="mt-4 text-gray-400">
//           Bringing joy to every child 💖
//         </p>

//         {/* Social Links */}
//         <div className="mt-6 flex justify-center gap-6 text-sm">

//           <a
//             href="https://wa.me/201234567890"
//             target="_blank"
//             className="hover:text-green-400 transition"
//           >
//             WhatsApp
//           </a>

//           <a
//             href="https://facebook.com/yourpage"
//             target="_blank"
//             className="hover:text-blue-400 transition"
//           >
//             Facebook
//           </a>

//           <a
//             href="https://instagram.com/yourpage"
//             target="_blank"
//             className="hover:text-pink-400 transition"
//           >
//             Instagram
//           </a>

//         </div>

//         {/* Divider */}
//         <div className="my-6 border-t border-gray-700"></div>

//         {/* Copyright */}
//         <p className="text-xs text-gray-500">
//           © 2026 Toy Store. All rights reserved.
//         </p>

//       </div>
//     </footer>
//   );
// }