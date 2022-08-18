import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import Title from "../components/core/Title";
import HeadingWithText from "../components/Layout/HeadingWithText";
import whitelist from '/public/whitelist.png'
import mynft from '/public/mynft.png' 
import countries from '/public/countries.png' 
import quizz from '/public/quizz.png'

import Button from "../components/core/Button";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Aitor's Portfolio"}</title>
      </Head>
      <main>
        <section className="py-12">
          <HeadingWithText
            title="Hi! I'm Aitor,"
            style="gradient"
            text="I'm a self-taught Frontend Developer based in Prague, Czech Republic, originally from Spain. Apart from web2 apps I'm very passionate about Web3 and decentralized applications built using the Ethereum Virtual Machine. Feel free lo look around and check some of the highlighted projects." 
          />
          <Button lable="View all projects" />
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
                <HeadingWithText
                  title="Crypto Devs Whitelist"
                  text="This site allows the first 10 users to enter a whitelist. It's deployed in the Goerli testnet which is needed to interact with the contract"
                  label="Built using React, Hardhat, Solidity, Ethers, Next"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div 
            className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">

              {/*Image Container*/}
              <a href="https://github.com/aitor-react/NFT-collection" target='_blank' rel=" noopener noreferrer">
                <Image className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md shadow-lg md:ml-12" 
                src={mynft}
                alt='project'
                priority
                />
              </a>

              {/*Heading with text*/}
              <div>
                <HeadingWithText
                  title="ERC721 NFT collection"
                  text="Connect your wallet and mint a randomly generated SVG token in the Goerli testnet!"
                  label="Built using React, Hardhat, Solidity, OpenZeppelin, Ethers, Next"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div 
            className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">

              {/*Image Container*/}
              <a href="https://github.com/aitor-react/world-weather" target='_blank' rel=" noopener noreferrer">
                <Image className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md shadow-lg md:ml-12" 
                src={countries}
                alt='project'
                priority
                />
              </a>

              {/*Heading with text*/}
              <div>
                <HeadingWithText
                  title="World Weather"
                  text="Search for a country to see the weather in real time and other interesting facts"
                  label="Built using React, React Router and styled components"
                />
              </div>
            </div>

            {/* Project 4*/}
            <div 
            className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">

              {/*Image Container*/}
              <a href="https://github.com/aitor-react/Quizz-game" target='_blank' rel=" noopener noreferrer">
                <Image className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md shadow-lg md:ml-12" 
                src={quizz}
                alt='project'
                priority
                />
              </a>

              {/*Heading with text*/}
              <div>
                <HeadingWithText
                  title="Quizz game"
                  text="Try score the highest points in the quizz. Even if you miss you still have the chance to learn where your mistakes were made!"
                  label="Built using React"
                />
              </div>
            </div>

          </div>
          <Button lable="View all projects" />
        </section>
      </main>
    </>
  );
};

export default Home;