import { Link } from "react-router-dom";

export default function Header({    
    onSearch,
    categories = [],
    selectedCategory = "",
    onCategoryChange = () => {}
}) {

  return (
    <header className="header">

      <Link to="/" className="logo">
        Minha Loja
      </Link>

      <input
        type="text"
        placeholder="Pesquisar produto..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >

        <option value="">
          Todas
        </option>

        {categories.map(category => (
            <option key={category} value={category}>
                {category}
            </option>
        ))}

      </select>

      <nav>
        <Link to="/">
          Home
        </Link>

        <Link to="/carrinho">
          🛒 Carrinho
        </Link>
      </nav>

    </header>
  );
}