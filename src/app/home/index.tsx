import Hero from "../../../components/hero";
import NavBar from "../../../components/navbar";
import "../../../styles/homePage.css"
function HomePage() {
    return (
        <div className="home-container">
            <NavBar />
            <Hero />
        </div>
    )
}
export default HomePage;