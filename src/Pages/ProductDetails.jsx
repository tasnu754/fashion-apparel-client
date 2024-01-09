import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthProvider } from "./firebaseAuth";

const ProductDetails = () => {
    const { user } = useContext(AuthProvider);
  const loadData = useLoaderData();
  console.log(user, loadData);
  const email = user?.email;
  const useloadData = { ...loadData, email };
  console.log(useloadData);

    

    const handleAddCart = () => {
        fetch("https://fashion-apparel-server-five.vercel.app/add", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(useloadData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              swal("Added product in My cart!", "Successfully", "success");
            }
          });


    }
 

    return (
        <div className="text-[#53346D] bg-blue-gray-400 pb-10 ">
        
        <div className="p-2">
          <img
            className="lg:h-[730px] w-[90%] mx-auto rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src={loadData?.proImg}
            alt=""
          />
        </div>
        <div className=" p-10 ">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold ">{loadData.brand}</h1>
          </div>
          <div className="flex justify-around">
            <div className="space-y-10">
              <h2 className="text-xl font-bold ">
                Product name: {loadData?.proName}
              </h2>
              <p className="text-xl font-bold">Price: ${loadData?.price}</p>
            </div>
            <div className="space-y-10">
              <p className="text-xl font-bold">Type: {loadData?.type}</p>
              <p className="text-xl font-bold">Rating: {loadData?.rating}.0</p>
            </div>
          </div>
          <h3 className="text-center text-2xl font-bold mt-10">Description:</h3>
          <p className="text-center text-2xl font-bold mt-4">
            {loadData.descript}
          </p>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleAddCart}
              className="btn btn-nav "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;