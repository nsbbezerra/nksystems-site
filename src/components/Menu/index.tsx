"use client";

import { House, Info, List, Phone, Tag, User, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const MenuList = () => (
    <div className="flex lg:items-center gap-7 flex-col lg:flex-row">
      <Link
        href={"/"}
        className="flex gap-2 items-center text-lg text-sky-200 font-semibold hover:text-sky-200 transition-colors"
      >
        <House />
        Início
      </Link>
      <Link
        href={"/"}
        className="flex gap-2 items-center text-lg text-sky-200 font-semibold hover:text-sky-200 transition-colors"
      >
        <Info />
        Sobre Nós
      </Link>
      <Link
        href={"/"}
        className="flex gap-2 items-center text-lg text-sky-200 font-semibold hover:text-sky-200 transition-colors"
      >
        <Phone />
        Contato
      </Link>
      <Link
        href={"/"}
        className="flex gap-2 items-center text-lg text-sky-200 font-semibold hover:text-sky-200 transition-colors"
      >
        <Tag />
        Planos e Serviços
      </Link>
    </div>
  );

  return (
    <Fragment>
      <nav className="fixed left-0 right-0 h-[70px] bg-black z-40 shadow-xl bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl flex items-center h-full px-5 justify-between">
          <div className="flex items-center gap-16">
            <Link href={"/"} className="block w-20">
              <Image
                src={"/img/logo.svg"}
                width={841}
                height={470}
                alt="Logo NK Systems"
              />
            </Link>

            <div className="hidden lg:block">
              <MenuList />
            </div>
          </div>

          <Link
            href={"/"}
            className="hidden h-10 lg:flex rounded-lg shadow-md bg-sky-500 px-4 items-center gap-3 text-white hover:bg-sky-600 transition-colors"
          >
            <User />
            Área do Cliente
          </Link>

          <button
            className="flex h-10 lg:hidden rounded-lg bg-sky-500 w-10 justify-center items-center gap-3 text-white text-2xl outline-none focus:ring-1 focus:ring-zinc-50 hover:bg-sky-600 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <List />
          </button>
        </div>
      </nav>

      <div
        className={`w-[280px] ${
          isOpen ? "mr-0" : "-mr-[100%]"
        } bg-black h-screen fixed z-20 shadow-2xl bg-opacity-75 backdrop-blur-md right-0 transition-all`}
      >
        <div className="flex items-center gap-3 h-[70px] px-4 border-b border-b-zinc-900 justify-between">
          <span className="text-sky-300 font-bold flex items-center gap-3 text-lg">
            <List /> MENU
          </span>
          <button
            className="flex h-10 lg:hidden rounded-lg bg-sky-500 w-10 justify-center items-center gap-3 text-white text-2xl outline-none focus:ring-1 focus:ring-zinc-50 hover:bg-sky-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>

        <div className="px-4 my-10">
          <MenuList />
        </div>

        <div className="px-4">
          <Link
            href={"/"}
            className="h-10 flex rounded-lg shadow-md bg-sky-500 px-4 items-center gap-3 text-white hover:bg-sky-600 transition-colors"
          >
            <User />
            Área do Cliente
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
