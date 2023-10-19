import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
    const brandProducts = useLoaderData();
    return (
        <div>
            <div>
                
            </div>
        <h2>{brandProducts.length}</h2>
      </div>
    );
};

export default BrandProducts;