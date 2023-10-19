import { Rating } from "@material-tailwind/react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

const BrandProducts = () => {
  const [particularBrandProducts, setParticularBrandProducts] = useState([]);
  const brandProducts = useLoaderData();
  const params = useParams();
  useEffect(() => {
    const partBrandProducts = brandProducts.filter(
      (brandProduct) => brandProduct.brand === params.name
    );
    setParticularBrandProducts(partBrandProducts);
  }, [brandProducts, params.name]);
  return (
    <div className="">
      {/* bg-gradient-to-r from-[#c31432] to-[#240b36] */}
      <div className="carousel w-full h-[700px]">
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/MgSP3T2/burgess-milner-OYYE4g-I5-ZQ-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/9GbSY60/jason-briscoe-w2uvo-Jo-wo-E-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/5GCsJ9C/david-lezcano-Nf-Zi-OJz-Zgcg-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-5xl text-[#53346D] text-center font-bold my-10">
        {params.name} Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto mb-10">
        {particularBrandProducts?.length != 0 ? (
          particularBrandProducts?.map((product) => (
            <div
              key={product._id}
              className="  max-w-lg bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="lg:h-[400px] w-full rounded-xl cover mb-10"
                  src={product?.proImg}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-[#53346D] dark:text-white">
                    {product?.proName}
                  </h5>
                </a>
                <div className="flex justify-between mt-4">
                  <p className="text-xl font-semibold tracking-tight text-[#53346D] dark:text-white">
                    {product?.brand}
                  </p>
                  <p className="text-xl font-semibold tracking-tight text-[#53346D] dark:text-white">
                    {product?.type}
                  </p>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <Rating readonly value={parseInt(product?.rating)} />
                 
                  <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                    {product?.rating}.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#53346D] dark:text-white">
                    ${product?.price}
                  </span>
              
                </div>
                <div className="lg:flex justify-between mt-4">
                  <Link to={`/product/${product._id}`} className="btn btn-nav">Details</Link>
                  <Link to={`/update/${product._id}`} className="btn btn-nav">Update</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="max-h-screen w-full flex justify-center items-center my-10 md:ml-48  lg:ml-80"> 
              <h2 className="text-5xl text-center font-bold">No products available yet on {params.name} Brand</h2>
              
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BrandProducts;
