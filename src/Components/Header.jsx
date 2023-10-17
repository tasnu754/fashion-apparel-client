
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
          <div>
            <div className="hero-content text-center text-[#51ede5] w-full ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Fashion Exclusive For YOU
                </h1>
                <p className="mb-5 text-3xl">
                  -Life is too short to wear boring Clothes and shoes!
                </p>
                <button className="btn-nav text-center">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;