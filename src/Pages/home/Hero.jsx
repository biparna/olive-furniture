import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa"
import ThemeContext from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import bgImage from "../../assets/banner.png";
import '../../App.css';
import BasicToolTip from "../../components/BasicToolTip";
import TooltipButton from "../../components/TooltipButton";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center h-screen flex 
        items-baseline justify-center text-yellow-300 relative">
      <div className="md:pt-48 pt-24 px-2 text-center space-y-8 md:w-1/2 mx-auto">
        <h1 className="text-5xl lg:text-2xl font-medium lg:leading-tight leading-snug">
          Welcome to Olive Furniture{" "} <p>Make your interior more minimalistic & modern</p>{" "}
        </h1>
        <p className="text-lg font-normal lg:w-1/2 mx-auto mb-8">
          Discover our exclusive collection of modern furniture designed to
          elevate your space.
        </p>

        {/* search field */}
        <div className="relative inline-block z-30">
          <input type="text" placeholder="Search for furniture..." className=" w-full md:w-64 px-6 py-2
           bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none"/>

          <div className=" absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full
           cursor-pointer hover:bg-secondary transition duration-300">
            <FaSearch />
          </div>

        </div>

        {/* Button to shop now */}
        <div> <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition 
        duration-300" >Shop Now</button>
        </div>

      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent
       to-transparent blur-sm "/>

      {/* hover button for displaying tooltip box */}


      <div className="xl:block absolute bottom-48 left-16">
        <TooltipButton position="bottom" />
      </div>
      <div className="xl:block absolute bottom-72 left-60">
        <TooltipButton position="bottom" />
      </div>
      <div className="xl:block absolute bottom-52 right-[548px]">
        <TooltipButton position="bottom" />
      </div>
      <div className="xl:block absolute bottom-12 right-16">
        <TooltipButton position="bottom" />
      </div>

      {/* dark and light mode */}
            <div className="absolute bottom-16 right-16 z-40">
                <button
                    onClick={toggleTheme}
                    className="focus:outline-none font-bold text-lg bg-black text-white p-1 rounded-full "
                >
                    {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
                </button>
            </div>


    </section>
  );
};

export default Hero;
