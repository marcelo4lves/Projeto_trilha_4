import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Cart.css";


export default function Cart(){

    const { 
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} = useContext(CartContext);


    const total = cart.reduce(
        (acc, product) =>
            acc + (product.price * product.quantity),
        0
    );


    return(

        <>

            <Header />


            <div className="cart-container">

                <h1>
                    Meu Carrinho
                </h1>


                {cart.length === 0 ? (

                    <p className="empty">
                        Carrinho vazio
                    </p>


                ) : (

                    <>

                    <div className="cart-list">


                    {cart.map(product => (

                        <div
                            className="cart-item"
                            key={product.id}
                        >


                            <img
                                src={product.image}
                                alt={product.title}
                            />


                            <div className="cart-info">

                                <h2>
                                    {product.title}
                                </h2>


                                <p>
                                    Preço: R$ {product.price}
                                </p>


                                <p>
                                    Quantidade: {product.quantity}
                                </p>

                                <div className="quantity-controls">

                                <button
                                    onClick={() => decreaseQuantity(product.id)}
                                >
                                    -
                                </button>


                                <span>
                                    {product.quantity}
                                </span>


                                <button
                                    onClick={() => increaseQuantity(product.id)}
                                >
                                    +
                                </button>

                            </div>


                            <button
                                className="remove-button"
                                onClick={() => removeFromCart(product.id)}
                            >
                                Remover
                            </button>


                                <p>
                                    Subtotal: 
                                    R$ {(product.price * product.quantity).toFixed(2)}
                                </p>


                            </div>


                        </div>

                    ))}


                    </div>


                    <div className="cart-total">

                        <h2>
                            Total: R$ {total.toFixed(2)}
                        </h2>


                        <Link to="/checkout">
                            Finalizar Compra
                        </Link>

                    </div>


                    </>

                )}


            </div>


        </>

    );

}