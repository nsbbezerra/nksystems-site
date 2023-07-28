"use client";
import Menu from "@/components/Menu";
import Link from "next/link";
import { ClipboardText, Phone, SignIn } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-neutral-950">
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
        <div className="z-10 flex flex-col items-center justify-center max-w-3xl text-center gap-4">
          <span className="font-mono text-5xl sm:text-6xl text-zinc-50 max-w-3xl">
            Com nossas ferramentas sua{" "}
            <span className="text-sky-300">Empresa</span> terá mais
            Produtividade, Gestão e Segurança
          </span>
          <span className="text-md max-w-[250px] sm:text-xl font-light text-zinc-50 sm:max-w-lg">
            Sistemas de Gestão Locais e Online, Ecommerces, Gestão Fiscal,
            Pagamentos Automatizados, Sistemas sob Encomenda
          </span>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-6 w-full justify-center">
            <Link
              href={"/"}
              className="w-full max-w-[260px] bg-opacity-90 backdrop-blur-md bg-sky-500 rounded-lg h-12 px-6 flex items-center justify-center font-semibold text-lg gap-3 text-white hover:bg-sky-600 transition-colors shadow-xl"
            >
              <SignIn /> <span>Junte-se a nós</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-16 px-5">
        <div className="container mx-auto max-w-5xl">
          <h1 className="w-full text-center text-xl sm:text-2xl md:text-3xl text-zinc-300 leading-relaxed font-normal">
            Nossos softwares de{" "}
            <span className="font-extrabold">
              gestão empresarial e ecommerce
            </span>{" "}
            são projetados para ajudá-lo a gerenciar seu{" "}
            <span className="text-sky-500 font-extrabold">negócio</span> de{" "}
            <span className="font-extrabold">forma eficiente e eficaz</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-16">
            <div className="rounded-lg bg-neutral-900 shadow-black shadow-lg flex flex-col items-center overflow-hidden h-[550px]">
              <div className="w-60 p-3">
                <Image
                  src={"/img/ecommerce.svg"}
                  alt="Ecommerce NK systems"
                  height={350}
                  width={500}
                />
              </div>

              <div className="w-full text-center font-mono text-sky-500 text-4xl bg-neutral-950/30 py-2 block">
                Ecommerce
              </div>

              <div className="flex-1"></div>
              <div className="p-3 w-full">
                <Link
                  href={"/"}
                  className="h-12 w-full justify-center flex rounded-lg shadow-md bg-sky-500 px-4 items-center gap-3 text-white hover:bg-sky-600 transition-colors text-lg"
                >
                  <ClipboardText />
                  Ver Planos
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-neutral-900 shadow-black shadow-lg flex flex-col items-center overflow-hidden h-[550px]">
              <div className="w-60 p-3">
                <Image
                  src={"/img/system.svg"}
                  alt="Ecommerce NK systems"
                  height={350}
                  width={500}
                />
              </div>

              <div className="w-full text-center font-mono text-sky-500 text-4xl bg-neutral-950/30 py-2 block">
                Gestão Empresarial
              </div>

              <div className="flex-1"></div>
              <div className="p-3 w-full">
                <Link
                  href={"/"}
                  className="h-12 w-full justify-center flex rounded-lg shadow-md bg-sky-500 px-4 items-center gap-3 text-white hover:bg-sky-600 transition-colors text-lg"
                >
                  <ClipboardText />
                  Ver Planos
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-neutral-900 shadow-black shadow-lg flex flex-col items-center overflow-hidden h-[550px]">
              <div className="w-60 p-3">
                <Image
                  src={"/img/dev.svg"}
                  alt="Ecommerce NK systems"
                  height={350}
                  width={500}
                />
              </div>

              <div className="w-full text-center font-mono text-sky-500 text-4xl bg-neutral-950/30 py-2 block">
                Sistemas sob Ecomenda
              </div>

              <div className="flex-1"></div>
              <div className="p-3 w-full">
                <Link
                  href={"/"}
                  className="h-12 w-full justify-center flex rounded-lg shadow-md bg-sky-500 px-4 items-center gap-3 text-white hover:bg-sky-600 transition-colors text-lg"
                >
                  <Phone />
                  Faça uma cotação
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
