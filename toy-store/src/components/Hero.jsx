export default function Hero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden">

            {/* Background Image */}
            <img
                src="/hero.jpg"
                alt="Toy Store"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

                <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                    Welcome to Toy Store
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-gray-200">
                    Discover amazing toys that bring joy, creativity, and endless fun for
                    children of all ages.
                </p>

                {/* <button className="mt-8 rounded-full bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600 hover:scale-105">
          Explore Products
        </button> */}
                <a
                    href="#products"
                    className="mt-8 rounded-full bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600 hover:scale-105"
                >
                    Explore Products
                </a>
            </div>

        </section>
    );
}