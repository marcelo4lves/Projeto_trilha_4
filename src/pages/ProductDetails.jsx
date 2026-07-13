import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../services/api";
import Header from "../components/Header";

import { CartContext } from "../context/CartContext";


export default function ProductDetails() {

    const { addToCart } = useContext(CartContext);

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadProduct(){

            try{

                const data = await getProduct(id);

                setProduct(data);

            }catch(error){

                console.log(error);

            }finally{

                setLoading(false);

            }

        }

        loadProduct();

    }, [id]);


    if(loading){

        return <h2>Carregando...</h2>;

    }


    if(!product){

        return <h2>Produto não encontrado</h2>;

    }


    return (

        <>

            <Header />

            <div className="details">

                <img
                    src={product.image}
                    alt={product.title}
                />


                <div>

                    <h1>
                        {product.title}
                    </h1>


                    <h2>
                        R$ {product.price}
                    </h2>


                    <p>
                        {product.category}
                    </p>


                    <p>
                        {product.description}
                    </p>


                    <button
                        onClick={() => addToCart(product)}
                    >
                        Adicionar ao Carrinho
                    </button>


                </div>

            </div>

        </>

    );

}