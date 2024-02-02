import "./styles/categories.css"
function Categories() {
    const categoriesArray: string[] = ["Música", "Jogos", "Cultura", "Produtividade", "Tecnologia", "IA", "Software", "Aparelhos Eletrônicos", "Saúde", "História", "Animais", "Dinossauros", "Mistério", "Livros"]
    return (
        <div>
            <div className="slide-categories">
                <ul className="slide-box">
                    {categoriesArray.map((category, index) => (
                        <li className="item-category" key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Categories;