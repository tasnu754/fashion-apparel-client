
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
            <div className="hero-content text-center text-white flex justify-between mx-auto  h-screen ">
              <div className="max-w-md  ">
                <h1 className="mb-5 text-5xl font-bold text-left">
                  Fashion Exclusive For YOU
                </h1>
                <p className="mb-5 text-3xl text-left">
                  -Life is too short to wear boring Clothes and shoes!
                </p>
                <button className="btn btn-nav border-none">Explore</button>
              </div>

              <div className="w-1/2 grid grid-cols-2 gap-4">
                <div
                  className="card card1"
                  //   style={{
                  //     backgroundImage:
                  //       "url(https://i.ibb.co/Q6j31bL/artificial-photography-v-B5qtt8-X4-NA-unsplash.jpg)",
                  //   }}
                >
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    High Quality
                  </h4>
                  {/* <p className="text-white  text-xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, rem.
                  </p> */}
                </div>
                <div
                  className="card card2"
                  //   style={{
                  //     backgroundImage:
                  //       "url(https://i.ibb.co/Q6j31bL/artificial-photography-v-B5qtt8-X4-NA-unsplash.jpg)",
                  //   }}
                >
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    Premium
                  </h4>
                  {/* <p className="text-white  text-xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, rem.
                  </p> */}
                </div>
                <div
                  className="card card3"
                  //   style={{
                  //     backgroundImage:
                  //       "url(https://i.ibb.co/Q6j31bL/artificial-photography-v-B5qtt8-X4-NA-unsplash.jpg)",
                  //   }}
                >
                  <h4 className="text-gray-700 text-3xl font-bold mt-56">
                    Standard
                  </h4>
                  {/* <p className="text-white  text-xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, rem.
                  </p> */}
                </div>
                <div
                  className="card card4"
                  //   style={{
                  //     backgroundImage:
                  //       "url(https://i.ibb.co/Q6j31bL/artificial-photography-v-B5qtt8-X4-NA-unsplash.jpg)",
                  //   }}
                >
                  <h4 className="text-gray-700
                   text-3xl font-bold mt-52">
                    Cool
                  </h4>
                  {/* <p className="text-white  text-xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, rem.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;