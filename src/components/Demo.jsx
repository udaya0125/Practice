import {
  CircleUser,
  Earth,
  Play,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import React, { useState } from "react";
import movies from "../Movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isPagesOpen, setIsPageOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isGridBlogOpen, setIsGridBlogOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState("EN");
  const [selectHome, setSelectHome] = useState("Home");
  const [selectPage, setSelectPage] = useState("Pages");
  const [selectBlog, setSelectBlog] = useState("Blog");
  // const [selectFeatures, setSelectFeatures] = useState("Features");

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setIsLanguageOpen(false);
  };

  const handleHomeChange = (home) => {
    setSelectHome(home);
    setIsHomeOpen(false);
  };

  const handlePageChange = (page) => {
    setSelectPage(page);
    setIsPageOpen(false);
  };

  const handleBlogChange = (blog) => {
    setSelectBlog(blog);
    setIsBlogOpen(false);
  };

  // const handleFeatureChange = (feat) => {
  //   setSelectFeatures(feat);
  //   setIsFeaturesOpen(false);
  // };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-2xl bg-black/30 py-7 px-2 text-white hover:bg-blue-600"
        aria-label="Next">
        <ChevronRight className="h-6 w-6" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-2xl bg-black/30  py-7 px-2 text-white hover:bg-blue-600"
        aria-label="Previous">
        <ChevronLeft className="h-6 w-6" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 md:px-35 py-6">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Play size={45} className="text-[#6c52ee]" />
          <h2 className="text-4xl font-bold text-white">Streamvid</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8 text-2xl text-white font-medium">
          {/* Home */}
          <div
            onMouseEnter={() => setIsHomeOpen(true)}
            onMouseLeave={() => setIsHomeOpen(false)}
            className="relative flex items-center gap-1 hover:text-[#6c52ee] cursor-pointer">
            <h2>{selectHome}</h2>
            <ChevronDown size={30} />
            {isHomeOpen && (
              <div className="absolute z-10 top-[34px] w-[20rem] border-4 border-[#6c52ee] bg-[#00031c] p-4">
                <div className="flex flex-col text-white gap-3 p-4">
                  <button
                    onClick={() => handleHomeChange("Home")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home
                  </button>
                  <button
                    onClick={() => handleHomeChange("Home2")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home2
                  </button>
                  <button
                    onClick={() => handleHomeChange("Home3")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home3
                  </button>
                  <button
                    onClick={() => handleHomeChange("Home4")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home4
                  </button>
                  <button
                    onClick={() => handleHomeChange("Home5")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home5
                  </button>
                  <button
                    onClick={() => handleHomeChange("Home6")}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#6c52ee] rounded">
                    Home6
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
            className="relative flex items-center gap-1 hover:text-[#6c52ee] cursor-pointer">
            <h2>Features</h2>
            <ChevronDown size={30} />
            {isFeaturesOpen && (
              <div className="absolute z-10 top-[35px] w-[90rem] bg-white p-4">
                <div className="grid grid-cols-5 w-full ">
                  <div className="col-span-1">
                    <h2 className="uppercase">Popular</h2>
                    <div className="flex flex-col">
                      <button className="text-left hover:text-[#6c52ee]">Featured</button>
                      <button className="text-left hover:text-[#6c52ee]">Most Popular</button>
                      <button className="text-left hover:text-[#6c52ee]">New Releases</button>
                      <button className="text-left hover:text-[#6c52ee]">Recommended</button>
                      <button className="text-left hover:text-[#6c52ee]">Trending Now</button>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h2 className="uppercase">Genres</h2>
                    <div className="flex ">
                      <div className="flex flex-col">
                        <button className="text-left hover:text-[#6c52ee]">Romance</button>
                        <button className="text-left hover:text-[#6c52ee]">Drama</button>
                        <button className="text-left hover:text-[#6c52ee]">Family</button>
                        <button className="text-left hover:text-[#6c52ee]" >Comedy</button>
                        <button className="text-left hover:text-[#6c52ee]">Actions</button>
                        <button className="text-left hover:text-[#6c52ee]">Adventure</button>
                      </div>
                      <div className="flex flex-col">
                        <button className="text-left hover:text-[#6c52ee]">Horror</button>
                        <button className="text-left hover:text-[#6c52ee]">Anime</button>
                        <button className="text-left hover:text-[#6c52ee]">Thriller</button>
                        <button className="text-left hover:text-[#6c52ee]">History</button>
                        <button className="text-left hover:text-[#6c52ee]">Sci-Fi</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h2 className="uppercase">Collection</h2>
                    <div className="flex flex-col">
                      <button className="text-left hover:text-[#6c52ee]">Actor's Spotlight</button>
                      <button className="text-left hover:text-[#6c52ee]">Holiday Movies</button>
                      <button className="text-left hover:text-[#6c52ee]">New Trailers</button>
                      <button className="text-left hover:text-[#6c52ee]">weekly Watchlist</button>
                      <button className="text-left hover:text-[#6c52ee]">Tv Networks</button>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <h2 className="uppercase">Movies of the day</h2>
                    <div className="relative">
                      <Slider {...settings}>
                        {movies.map((item, index) => (
                          <div key={index} className="px-2">
                            <Link
                              to={`/movie/${item.slug}`}
                              className="block rounded-lg text-white hover:scale-105 transition-transform duration-300">
                              <div className="relative overflow-hidden rounded-lg">
                                <img
                                  src={item.Poster}
                                  alt={item.Title}
                                  className="w-full h-72 object-cover rounded-lg hover:opacity-90 transition-opacity"
                                />
                              </div>
                              <h2 className="mt-4 text-xl font-semibold line-clamp-1">
                                {item.Title}
                              </h2>
                            </Link>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
                {/* <div className="text-black">
                  <h1></h1>
                  <div className="cursor-pointer hover:text-[#6c52ee]">
                    Feature 1
                  </div>
                  <div className="cursor-pointer hover:text-[#6c52ee]">
                    Feature 2
                  </div>
                  <div className="cursor-pointer hover:text-[#6c52ee]">
                    Feature 3
                  </div>
                  <div className="cursor-pointer hover:text-[#6c52ee]">
                    Feature 4
                  </div>
                  <div className="cursor-pointer hover:text-[#6c52ee]">
                    Feature 5
                  </div>
                </div> */}
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setIsPageOpen(true)}
            onMouseLeave={() => setIsPageOpen(false)}
            className="relative flex items-center gap-1 hover:text-[#6c52ee] cursor-pointer">
            <h2>{selectPage}</h2>
            <ChevronDown size={30} />
            {isPagesOpen && (
              <div className="absolute z-10 top-[35px] w-[20rem] border-4 border-[#6c52ee] bg-[#00031c] p-4">
                <div className="text-white flex flex-col gap-8 divide-y-2 divide-dotted">
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 1")}>
                    Pages
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 2")}>
                    <div className="flex items-center justify-between">
                      <span>Tv shows</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 3")}>
                    <div className="flex items-center justify-between">
                      <span>Movies</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 4")}>
                    <div className="flex items-center justify-between">
                      <span>Videos</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 5")}>
                    <div className="flex items-center justify-between">
                      <span>Person</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    <div className="flex items-center justify-between">
                      <span>Advertising</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    Subtitles
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    <div className="flex items-center justify-between">
                      <span>Shop</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    <div className="flex items-center justify-between">
                      <span>About Us</span>
                      <ChevronRight />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    Contact
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handlePageChange("Page 6")}>
                    Membership levels
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setIsBlogOpen(true)}
            onMouseLeave={() => setIsBlogOpen(false)}
            className="relative flex items-center gap-1 hover:text-[#6c52ee] cursor-pointer">
            <h2>{selectBlog}</h2>
            <ChevronDown size={30} />
            {isBlogOpen && (
              <div className="absolute z-10 top-[35px] w-[20rem] bg-[#00031c] border-4 border-[#6c52ee] p-4">
                <div className="divide-y-2 text-white divide-dotted flex flex-col gap-5">
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handleBlogChange("Blog")}>
                    Blog
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handleBlogChange("Blog list")}>
                    Blog list
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handleBlogChange("Blog Grid 4 columns")}>
                    Blog Grid 4 columns
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    onClick={() => handleBlogChange(" Blog Grid 3 columns")}>
                    Blog Grid 3 columns
                  </div>
                  <div
                    className="cursor-pointer hover:text-[#6c52ee]"
                    // onClick={() => handleBlogChange("Single blog")}
                  >
                    <div
                      onMouseEnter={() => setIsGridBlogOpen(true)}
                      onMouseLeave={() => setIsGridBlogOpen(false)}
                      className=" relative flex items-center justify-between">
                      <span>Single blog</span>
                      <ChevronRight />
                      {isGridBlogOpen && (
                        <div className="absolute bg-[#00031c] border-4 border-[#6c52ee] top-0 left-[19rem] w-[17rem] p-4">
                          <div className="text-white divide-y-2  divide-dotted  flex flex-col gap-5">
                            <div className="hover:text-[#6c52ee]">
                              Single Blog Slider
                            </div>
                            <div className="hover:text-[#6c52ee]">
                              Single Blog Full
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-10">
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Find Movies, TV shows and"
              className="border rounded-2xl pl-10 pr-4 text-white py-2.5 text-2xl focus:outline-white focus:ring-2 focus:ring-[#6c52ee] bg-transparent"
            />
            <Search size={25} className="absolute left-3 top-3 text-gray-500" />
          </div>

          <div className="relative flex items-center gap-4 text-gray-600">
            <Earth size={45} className="text-white" />
            <div
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
              className="relative flex items-center gap-1 text-white text-xl cursor-pointer">
              <h2>{selectedLang}</h2>
              <ChevronDown size={30} />
              {isLanguageOpen && (
                <div className="absolute top-[2rem] left-0 w-[10rem] bg-[#00031c] border-4 border-[#6c52ee] text-white rounded shadow-lg z-50">
                  <ul className="flex flex-col">
                    <li
                      className="px-4 py-2 hover:bg-[#6c52ee] cursor-pointer"
                      onClick={() => handleLanguageChange("Nepali")}>
                      Nepali
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-[#6c52ee] cursor-pointer"
                      onClick={() => handleLanguageChange("Hindi")}>
                      Hindi
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-[#6c52ee] cursor-pointer"
                      onClick={() => handleLanguageChange("English")}>
                      English
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <CircleUser size={45} className="text-white" />
          </div>

          {/* Subscribe Button */}
          <button className="bg-[#6c52ee] text-white px-6 py-5 rounded-2xl text-3xl font-semibold hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
