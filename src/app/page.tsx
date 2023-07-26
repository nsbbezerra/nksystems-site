"use client";
import Menu from "@/components/Menu";
import Link from "next/link";
import { Phone, SignIn } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="w-full">
      <Menu />
      <section className="w-full relative flex items-center flex-col justify-center h-screen bg-white px-5">
        <video
          autoPlay
          loop
          muted
          className="object-cover object-bottom absolute top-0 bottom-0 left-0 right-0 h-screen w-screen"
          disablePictureInPicture
        >
          <source src="/video/tech.mp4" type="video/mp4" />
        </video>
        <div className="z-10 flex flex-col items-center justify-center max-w-2xl text-center gap-4">
          <span className="font-mono text-5xl sm:text-6xl text-zinc-50 max-w-2xl">
            Ajudamos a sua <span className="text-sky-300">Empresa</span> a ter
            Produtividade, Gestão e Segurança
          </span>
          <span className="text-md max-w-[250px] sm:text-2xl font-light text-zinc-50 sm:max-w-md">
            Temos a tecnologia certa para seu negócio!
          </span>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-6 w-full justify-center">
            <Link
              href={"/"}
              className="w-full max-w-[260px] bg-opacity-90 backdrop-blur-md bg-sky-500 rounded-lg h-12 lg:h-14 px-6 flex items-center justify-center font-semibold text-lg gap-3 text-white hover:bg-sky-600 transition-colors shadow-xl"
            >
              <SignIn /> <span>Cadastre-se</span>
            </Link>
            <Link
              href={"/"}
              className="w-full max-w-[260px] bg-opacity-90 backdrop-blur-md bg-zinc-50 rounded-lg h-12 lg:h-14 px-6 flex items-center justify-center font-semibold text-lg gap-3 text-sky-500 hover:bg-zinc-100 transition-colors shadow-xl"
            >
              <Phone /> <span>Entre em contato</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
