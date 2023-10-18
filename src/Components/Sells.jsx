
const Sells = () => {
    return (
      <div className="w-[95%] mx-auto my-4">
        <h2 className="text-5xl font-bold text-center py-10 text-[#1D2671]">
          Grab Our Best Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 gap-2 h-[1200px]">
          <div
            className="md:row-span-2 bg-cover box-border"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/xCxpLQK/irene-kredenets-dw-Ki-Hoqqxk8-unsplash.jpg)",
            }}
          ></div>
          <div
            className="bg-cover box-border"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/WfSWqhG/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg)",
            }}
          ></div>
          <div
            className=" bg-cover box-border"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/zm6WNKD/domino-164-6w-VEHf-I-unsplash.jpg)",
            }}
          ></div>
          <div
            className="bg-cover box-border "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gZ6tsT6/charlesdeluvio-FK81rxil-UXg-unsplash.jpg)",
            }}
          ></div>
          <div
            className="bg-cover box-border md:row-span-2"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MS1zhsG/marissa-grootes-D4j-Raha-Ua-Ic-unsplash.jpg)",
            }}
          ></div>
          <div
            className="bg-cover box-border md:col-span-2"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/2SB2CnQ/leon-skibitzki-NMyuo1ho-CAA-unsplash.jpg)",
            }}
          ></div>
        </div>
      </div>
    );
};

export default Sells;