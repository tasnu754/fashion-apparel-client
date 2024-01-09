import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    fetch("./Brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  },[])


  return ( 
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-5xl font-bold text-center py-10 text-[#1D2671]">
        Our Most Demanded Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <Link to={`/brand/${brand.brandName}`} key={brand.id}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-[95%] lg:w-[80%] mx-auto rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img src={brand?.image} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-center mb-2">
                  <p className="block text-3xl antialiased font-bold leading-relaxed text-center  text-[#1D2671]">
                    {brand?.brandName}
                  </p>
                  <p className="font-bold text-gray-600">
                    {" "}
                    {brand?.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
