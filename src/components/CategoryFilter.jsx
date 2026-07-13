export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange
}) {

    return (

        <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
        >

            <option value="">Todas as categorias</option>

            {categories.map(category => (

                <option
                    key={category}
                    value={category}
                >
                    {category}
                </option>

            ))}

        </select>

    );

}