import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

// Product data array
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12" style={{ backgroundColor: "black" }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi.
          </p>
        </div>

        {/* Products Grid */}
        <div className="overflow-x-auto">
          <div className="flex space-x-5 p-5">
            {ProductsData.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 flex flex-col items-center text-center"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[100px] w-[100px] object-cover rounded-md mx-auto"
                />
                <div className="mt-2">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary text-white py-2 px-6 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
