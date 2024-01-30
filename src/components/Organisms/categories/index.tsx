function Categories() {
    const categoriesArray: string[] = ["Música", "Jogos", "Cultura", "Produtividade", "Tecnologia", "IA", "Software", "Aparelhos Eletrônicos", "Saúde", "História", "Animais", "Dinossauros", "Mistério", "Livros"]
    return (
        <div>
            <div className="slide-categories">
                {categoriesArray.map((category, index) => (
                    <div key={index}>{category}</div>
                ))}
            </div>
        </div>
    )
}
export default Categories;