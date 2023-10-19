import { useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    const brandProducts = useLoaderData();
    const params = useParams();
    console.log(brandProducts);
    const particularBrandProducts = brandProducts.filter(brandProduct => brandProduct.brand === params.name);
    console.log(particularBrandProducts);
  return (
    <div>
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

      <div>
        {" "}
        <h2>{brandProducts.length}</h2>
      </div>
    </div>
  );
};

export default BrandProducts;
