import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="price">
        R$ {product.price}
      </p>

      <Link to={`/produto/${product.id}`}>
        <button>Ver Produto</button>
      </Link>

    </div>
  );
}