// import { useLoaderData } from "react-router-dom";

import { Rating } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthProvider } from "./firebaseAuth";
import axios from "axios";


const Carts = () => {

  const { user } = useContext(AuthProvider);
    const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fashion-apparel-server-five.vercel.app/carts?email=${user?.email}`, {
      })
      .then((res) => {
        setCarts(res.data);
      });
    
   
    }, [user.email]);
    
    const handleDelete = (id) => {
        
        fetch(`https://fashion-apparel-server-five.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Deleted!", "Successfully", "success");
              const findDelete = carts.filter((cart) => cart._id != id);
              setCarts(findDelete);
            }
          });
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto my-10">
        {carts?.map((cart, idx) => (
          <div
            key={idx}
            className="lg:h-[260px] lg:flex bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
          >
            <a className="">
              <img
                className="h-[250px] lg:h-[260px] w-96 rounded-xl cover mb-10"
                src={cart?.proImg}
                alt="product image"
              />
            </a>
            <div className=" w-full px-5 py-2">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-[#53346D] dark:text-white">
                  {cart?.proName}
                </h5>
              </a>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold tracking-tight text-[#53346D] dark:text-white">
                  {cart?.brand}
                </p>
                <p className="text-xl font-semibold tracking-tight text-[#53346D] dark:text-white">
                  {cart?.type}
                </p>
              </div>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={parseInt(cart?.rating)} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  {cart?.rating}.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#53346D] dark:text-white">
                  ${cart?.price}
                </span>
              </div>
              <div className="lg:flex justify-between mt-4">
                <button onClick={()=>handleDelete(cart._id)} className="btn btn-nav">
                  Delete
                </button>
                {/* <Link to={`/update/${cart._id}`} className="btn btn-nav">
                  Update
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Carts;