import React, { Component } from "react";
import { Carousel } from "../Carousel/Carousel";
import { Filters } from "../Filters/Filters";
import { ImageMenu } from "../ImageMenu/ImageMenu";
import { News } from "../News/News";
import { Banner } from "../BannerForHomePage/Banner";

export function Home() {
  return (
      <div>
        <Carousel />
        <Filters />
        <ImageMenu />
        <News />
        <Banner />
      </div>
  );
}
