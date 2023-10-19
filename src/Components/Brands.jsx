import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    fetch("../../public/Brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  },[])


  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-5xl font-bold text-center py-10 text-[#1D2671]">
        Our Most Demanded Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <Link to={`/brand/${brand.brandName}`} key={brand.id}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img src={brand.image} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-center mb-2">
                  <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                    {brand.brandName}
                  </p>
                  <p className="font-bold text-gray-600">
                    {" "}
                    {brand.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Static data  */}
        {/* <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/s6mYNsJ/clarisse-croset-Eiiijhn-JLVs-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Louis Vuitton
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                World leading international fashion houses
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/Fx2dSSb/luis-de-leon-uup-MVp-Gz964-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Dior
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                French multinational luxury fashion
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg  w-[95%] lg:w-[80%] mx-auto  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/TRgWSZ8/long-phan-th-Tnny-B4oks-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Gucci
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                An Italian fashion brand
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg  w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/gmSFVGR/nelson-ndongala-efdd1-QPn-IGI-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Nike
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                American athletic footwear
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg  w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/8snTksd/silvia-Ue4-A4d-Vg-C5-A-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Chanel
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                French luxury fashion house
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg  w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/61gNF1V/christian-wiediger-8d8-Kfp-YCQV0-unsplash.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="text-center mb-2">
              <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                Adidas
              </p>
              <p className="font-bold text-gray-600">
                {" "}
                German athletic apparel
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
