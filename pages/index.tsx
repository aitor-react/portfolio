import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import Title from "../components/core/Title";
import HeadingWithText from "../components/Layout/HeadingWithText";
import whitelist from '/public/whitelist.png'
import Button from "../components/core/Button";


const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>{"Aitor's Portfolio"}</title>
      </Head>
      <main>
        <section className="py-12">
          <HeadingWithText
            title="Hi! I'm Aitor,"
            style="gradient"
            text="I'm a self-taught Frontend Developer based in Prague, CZ, originally from Spain. Apart from web2 apps I have a very fond interest in Web3 and decentralized applications built using the Ethereum Virtual Machine."
            //label="Redirect to contact form in page"
          />
          
        </section>
        {/* Projects Section */ }
        <section className="py-12">
          <Title
            title="Highlighted projects"
            style="gradient"
          />
          <div className="space-y-12 mb-12">
            {/* Project 1 */}
            <div 
            className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">

              {/*Image Container*/}
              <a href="https://github.com/aitor-react/NFT-collection-whitelist" target='_blank' rel=" noopener noreferrer">
                <Image className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md shadow-lg md:ml-12" 
                src={whitelist}
                alt='project'
                priority
                />
              </a>

              {/*Heading with text*/}
              <div>
                <span className="text-sm text-gray-400 font-light">
                  2022
                </span>
                <HeadingWithText
                  title="NFT Collection Whitelist"
                  text="This site allows the first 10 users to enter a whitelist. It's deployed in the Goerli testnet which is needed to interact with the contract"
                  label="Built using Hardhat, React, Ethers, Next"
                />
              </div>
            </div>
          </div>
          <Button lable="View all projects" />
        </section>
      </main>
    </div>
  );
};

export default Home;