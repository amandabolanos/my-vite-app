import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#38050F] to-[#660924] text-white">
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-[#CC3E5E] tracking-wide uppercase">
          RomComs Cinema
        </h1>
        <p className="mt-4 text-[#F5E9E9] text-lg max-w-xl mx-auto">
          Comedias románticas 
        </p>
      </header>

      <section className="relative max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden mb-16">
        <img
          src="/assets/romcom-banner.jpg"
          alt="RomCom Banner"
          className="w-full h-96 object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Historias que inspiran y entretienen
          </h2>
          <p className="mt-2 text-lg text-[#F5E9E9]">
            Vive la magia del cine
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <Link
          to="/movies"
          className="px-8 py-4 bg-[#941737] text-white font-semibold rounded-lg shadow-md hover:bg-[#CC3E5E] transition"
        >
          🎥 See Movies
        </Link>
      </div>
    </div>
  );
}