import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";

import "./Checkout.css";


export default function Checkout(){

    const { cart } = useContext(CartContext);


    const [finished, setFinished] = useState(false);


    const [form, setForm] = useState({

        name: "",
        email: "",
        address: ""

    });


    const total = cart.reduce(
        (acc, product) =>
            acc + (product.price * product.quantity),
        0
    );


    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }


    function handleSubmit(e){

        e.preventDefault();


        setFinished(true);

    }


    if(finished){

        return (

            <>

                <Header />

                <div className="success">

                    <h1>
                        Compra realizada! 🎉
                    </h1>

                    <p>
                        Obrigado pela sua compra, {form.name}.
                    </p>


                </div>

            </>

        );

    }


    return(

        <>

            <Header />


            <div className="checkout-container">


                <h1>
                    Finalizar Compra
                </h1>



                <div className="checkout-grid">


                    <div className="order-summary">


                        <h2>
                            Resumo do Pedido
                        </h2>



                        {cart.map(product => (

                            <div
                                className="checkout-item"
                                key={product.id}
                            >

                                <img
                                    src={product.image}
                                    alt={product.title}
                                />


                                <div>

                                    <h3>
                                        {product.title}
                                    </h3>


                                    <p>
                                        Quantidade: {product.quantity}
                                    </p>


                                    <p>
                                        Subtotal:
                                        R$ {(product.price * product.quantity).toFixed(2)}
                                    </p>


                                </div>


                            </div>

                        ))}



                        <h2 className="total">

                            Total:
                            R$ {total.toFixed(2)}

                        </h2>



                    </div>





                    <form
                        className="checkout-form"
                        onSubmit={handleSubmit}
                    >


                        <h2>
                            Seus dados
                        </h2>


                        <input

                            type="text"

                            name="name"

                            placeholder="Nome completo"

                            value={form.name}

                            onChange={handleChange}

                            required

                        />



                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={form.email}

                            onChange={handleChange}

                            required

                        />



                        <textarea

                            name="address"

                            placeholder="Endereço"

                            value={form.address}

                            onChange={handleChange}

                            required

                        />



                        <button>

                            Finalizar Pedido

                        </button>



                    </form>


                </div>


            </div>


        </>

    );

}