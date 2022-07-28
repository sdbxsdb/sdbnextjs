import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';


const Projects = () => {
  return (
    <>
    <Head>
      <title>Projects | Sam Donaghy-Bell</title>
      <meta name="keywords" content="Projects"/>
      <meta name="description" content="A small selection of projects that I&apos;ve built." />
    </Head>
      <div>
      <div className="w-full text-center">
        <h1 className="mb-12 text-4xl font-semibold">Projects</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-start w-1/2 gap-y-12">

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/netflix'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Youtube - Netflix</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/stripeShop'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Stripe Shop</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/cinecopters'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">CineCopters - (Brochure & Order Reqests)</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/smartMirror'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Smart Mirror - (Raspberry Pi Build)</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/coffeeShops'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Coffee Connoisseur - (Location Search & Voting)</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/shoppy'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Faux Shop - (React and Typescript Demo)</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/fauxInstagram'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">Faux Instagram - (Laravel Project)</p>
                </a>
              </Link>
            </div>

            <div className="flex justify-start w-full transition border-b-2 dark:border-lightGrey border-darkGrey group">
              <Link href={'/projects/kidsGame'}>
                <a className="flex items-center justify-start w-full group">
                  <p className="transition transform group-hover:text-blue-400 group-hover:translate-x-4">McDonalds Farm - (Interactive Childrens Game)</p>
                </a>
              </Link>
            </div>

            
            

        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
