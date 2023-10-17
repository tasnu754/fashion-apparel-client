import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sells from "../Components/Sells";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Sells></Sells>
            <Footer></Footer>
        </div>
    );
};

export default Home;