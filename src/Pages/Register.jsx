const Register = () => {
  return (
    <div className=" flex justify-center min-h-screen items-center">
      <div className="w-full max-w-lg p-4 bg-white rounded-xl shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-4" action="#">
          <h5 className="text-3xl font-bold text-[#53346D] dark:text-white">
            Signup to our platform
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Photo
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Photo URL"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
             Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-strat">
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn-nav w-full">
              Signup
            </button>
          </div>
          <div className="text-lg font-medium text-gray-500 dark:text-gray-300">
            Have an account?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Signin
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
