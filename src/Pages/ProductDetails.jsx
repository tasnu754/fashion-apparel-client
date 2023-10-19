import { useLoaderData} from "react-router-dom";

const ProductDetails = () => {
    const loadData = useLoaderData();
    console.log(loadData);
    // const params = useParams();
    // fetch(`https://fashion-apparel-server-five.vercel.app/brand/${params.id}`)
    //     .then(res => res.json())
    // .then(data => console.log(data))

    return (
        <div>
            <h2>{loadData.price}</h2>
        </div>
    );
};

export default ProductDetails;