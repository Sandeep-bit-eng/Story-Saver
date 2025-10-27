import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 max-w-md text-center text-white border border-white/20">
          <h1 className="text-4xl font-bold mb-3">🚀 Next.js + Tailwind</h1>
          <p className="text-lg mb-6 opacity-90">
            Congrats Sandy! Your setup is working perfectly 🎉
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-xl hover:bg-blue-100 transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white/40 py-2 px-5 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          <footer className="mt-8 text-xs opacity-70">
            Built with ❤️ using Next.js + TypeScript + Tailwind
          </footer>
        </div>
      </main>

    </>

  );
}
