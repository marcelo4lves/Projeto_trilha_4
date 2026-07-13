import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

import CategoryFilter from "../components/CategoryFilter";

import {
    getProducts,
    getCategories
} from "../services/api";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");

   useEffect(() => {

    async function loadProducts() {

        try {

            const data = await getProducts();
            setProducts(data);

            const categoryData = await getCategories();
            setCategories(categoryData);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    loadProducts();

}, []);

    if (loading) {
        return <h2>Carregando...</h2>;
    }

const filteredProducts = products.filter(product => {

    const matchesSearch =
        product.title
            .toLowerCase()
            .includes(search.toLowerCase());

    const matchesCategory =
        selectedCategory === "" ||
        product.category === selectedCategory;

    return matchesSearch && matchesCategory;

});

    return (
        <>
        <Header
            onSearch={setSearch}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
        />

        <div className="container">

        <CategoryFilter

        categories={categories}

        selectedCategory={selectedCategory}

        onCategoryChange={setSelectedCategory}

    />

            <h1>Minha Loja</h1>

            <div className="products">

                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
        </>
    );
}