import React from "react";
import Header from "../components/organism/header";
import Jumbotron from "../components/organism/jumbotron";
import Sale from "../components/organism/Sale";
import GamePost from "../components/organism/GamePosts";
import FreeGames from "../components/organism/FreeGames";
import GameWithStatus from "../components/organism/GameWithStatus";

const Discover = () => {
  return (
    <>
      <div className="fixed z-20">
        <Header />
      </div>
      <div className="pt-36 lg:pt-40 md:pt-32 md:px-20 px-5">
        <Jumbotron />
      </div>
      <div>
        <Sale />
      </div>
      <section className="mt-16">
        <GamePost />
      </section>
      <section className="md:px-12 lg:px-20 xl:px-36  mt-16">
        <FreeGames />
      </section>
      <section className="text-white md:px-12 lg:px-20 xl:px-36  py-16">
        <GameWithStatus />
      </section>
    </>
  )
}

export default Discover
