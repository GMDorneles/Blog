import "../../styles/navbar.css"
function NavBar() {
    return (
        <div className="navbar-container">
            <div className="itens-left">
                <div className="item-menu">
                    <button className="logo">logo  aqui</button>
                </div>
                <div className="item-menu"><input></input></div>

            </div>
            <div className="itens-rigth">
                <div className="item-menu">
                    <button className="select-hover">
                        <p className="item-name">CONTACT</p>
                    </button>
                </div>
                <div className="item-menu">
                    <button className="select-hover">
                        SETTINGS
                    </button>
                </div>
                <div className="item-menu">
                    <button className="select-hover">
                        <p>
                            LOGIN
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NavBar
