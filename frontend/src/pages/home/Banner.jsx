import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Discover Your Next Favorite Book
        </h1>
        <p className=" mb-10">
          Explore a world of stories, knowledge, and inspiration. From timeless
          classics to the latest bestsellers, our bookstore brings the joy of
          reading right to your fingertips. Discover gripping novels, insightful
          non-fiction, and more, all in one place. Start your literary adventure
          today and let your imagination soar with every page you turn.
        </p>

        <button className="btn-primary">Subscribe</button>
      </div>

      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
