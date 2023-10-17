
const Header = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/89BjhCY/ashim-d-silva-Zmg-Jizt-RHXE-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="w-full">
            <div className="hero-content text-center text-white flex flex-col lg:flex-row justify-between mx-auto  h-full ">
              <div className="max-w-md  my-10">
                <h1 className="mb-5 text-5xl font-bold lg:text-left">
                  Fashion Exclusive For YOU
                </h1>
                <p className="mb-5 text-3xl lg:text-left">
                  -Life is too short to wear boring Clothes and shoes!
                </p>
                <button className="btn btn-nav border-none">Explore</button>
              </div>

              <div className="lg:w-1/2 grid md:grid-cols-2 gap-4">
                <div
                  className="card card1 "
                >
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    High Quality
                  </h4>
                </div>
                <div
                  className="card card2">
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    Premium
                  </h4>
                 </div>
                <div
                  className="card card3">
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    Standard
                  </h4>
                 </div>
                <div
                  className="card card4">
                  <h4 className="text-gray-700
                   text-3xl font-bold mt-52">
                    Cool
                  </h4>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;