import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden">

            {/* Background */}
            <img
                src="/hero.jpg"
                alt="Toy Store"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

                <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">

                    Welcome to

                    <span className="mt-2 block text-pink-400">
                        BATATES
                    </span>

                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    Discover amazing toys that inspire imagination,
                    creativity, learning and endless fun for children of all ages.
                </p>

                <a
                    href="#products"
                    className="mt-10 inline-flex items-center rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-pink-600"
                >
                    Browse Collection
                    <FaArrowDown className="ml-3" />
                </a>

            </div>

            {/* Fade to white */}
            <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent"></div>

        </section>
    );
}