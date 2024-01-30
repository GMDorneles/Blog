
import NavBar from "@/components/Templates/navbar";
import "./styles/homePage.css"
import Hero from "@/components/Molecules/hero";
import Categories from "@/components/Organisms/categories";
function HomePage() {
    return (
        <div className="home-container">
            <NavBar />
            <Hero />
            <Categories />
        </div>
    )
}
export default HomePage;