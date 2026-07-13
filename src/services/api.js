const URL = "https://fakestoreapi.com/products";

export async function getProducts() {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
    }

    return response.json();
}

export async function getCategories() {

    const response = await fetch(
        "https://fakestoreapi.com/products/categories"
    );

    return response.json();

}

export async function getProduct(id) {

    const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar produto");
    }

    return response.json();

}