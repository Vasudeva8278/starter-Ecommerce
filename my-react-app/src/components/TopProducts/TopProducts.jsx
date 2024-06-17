import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

// Product data array
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Blue Shirt",
    description: "Comfortable and stylish blue shirt.",
  },
  {
    id: 2,
    img: Img2,
    title: "Striped Shirt",
    description: "Classic striped shirt for any occasion.",
  },
  {
    id: 3,
    img: Img3,
    title: "White Shirt",
    description: "Elegant white shirt that goes with everything.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto py-12">
      {/* Header section */}
      <div className="text-left mb-12">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            style={{backgroundColor:"white"}}
          
          >
            {/* Image section */}
            <div className="h-15 overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                height="200"
                width={"200"}
              />
            </div>

            {/* Details section */}
            <div className="p-4">
              {/* Star rating */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold mb-2">{data.title}</h1>
              <p className="text-gray-500 text-sm line-clamp-2">
                {data.description}
              </p>
              <button
                className="bg-primary hover:bg-white text-white hover:text-primary py-2 px-4 rounded-full mt-4 transition duration-300"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
