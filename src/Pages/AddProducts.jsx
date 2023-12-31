import swal from "sweetalert";



const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const proName = form.name.value;
    const proImg = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const descript = form.des.value;
    const product = {
      proName,
      proImg,
      brand,
      type,
      price,
      rating,
      descript,
    };
    form.reset();

    console.log(product);

    fetch("https://fashion-apparel-server-five.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Product added!", "Successfully", "success");
        }
      });
  };

  return (
    <div>
      <section className="bg-white ] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
            Add product
          </h2>
          <form onSubmit={handleAddProduct} action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Product Image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Image"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="brand"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Brand
                </label>
                <select
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected>Select Brand</option>
                  <option value="Louis Vuitton">Louis Vuitton</option>
                  <option value="Dior">Dior</option>
                  <option value="Gucci">Gucci</option>
                  <option value="Nike">Nike</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Adidas">Adidas</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="type"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product type"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Rating"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Short Description
                </label>
                <textarea
                  name="des"
                  id="description"
                  rows={5}
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="w-[80%] mx-auto">
              <button type="submit" className="btn btn-nav md:w-full">
                Add product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;
