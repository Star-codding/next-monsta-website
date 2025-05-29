"use client"
import Image from "next/image";
import Header from "./Common/Header";
import HomeSlider from "./HomeComponents/HomeSlider";
import HomeImage from "./HomeComponents/HomeImage";
import HomeSection from "./HomeComponents/HomeSection";
import HomeCollection from "./HomeComponents/HomeCollection";
import UniversalSlider from "./Common/UniversalSlider";
import HomeLast from "./HomeComponents/HomeLast";


export default function Home() {
  return (
   <>
    <HomeSlider/>
    <HomeImage/> 
    <HomeSection/>
    <HomeCollection/>
    <UniversalSlider/>
    <HomeLast/>
   </>
  );
}
