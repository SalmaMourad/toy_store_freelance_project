export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center">

        {/* Brand */}
        <h2 className="text-2xl font-bold text-pink-400">
          🧸 Toy Store
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400">
          Bringing joy to every child 💖
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6 text-sm">

          <a
            href="https://wa.me/201234567890"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </a>

          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            Instagram
          </a>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 Toy Store. All rights reserved.
        </p>

      </div>
    </footer>
  );
}