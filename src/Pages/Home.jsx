import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Review from "../Components/Review";
import Sells from "../Components/Sells";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Brands></Brands>
            <Sells></Sells>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;