import  "../../styles/navbar.css"
function NavBar() {
    return (
        <div className="navbar-container">
            <div className="item-menu">
                <button className="logo">logo  aqui</button>
                <button className="select-hover">
                    <p className="item-name">HOME</p>
                </button>
                <button className="select-hover list-hover">
                    <p className="item-name">CATEGORIAS</p>
                </button>

            </div>
            <div>
                
            </div>
        </div>
    )
}
export default NavBar
