import "./styles/hero.css";
function Hero() {
    return (
        <div className="hero-container">
            <div className="main-post hover-size">
                {/* image */}
                <div className="post-intro">
                    texto
                </div>
            </div>
            <div className="secundary-posts">
                <div className="colum-posts">
                    <div className="post hover-size">
                        <div className="post-intro">
                            {/* image */}
                            texto1
                        </div>
                    </div>
                    <div className="post hover-size">
                        {/* image */}
                        <div className="post-intro">
                            texto2
                        </div>
                    </div>
                </div>
                <div className="colum-posts">
                    <div className="post hover-size">
                        <div className="post-intro">
                            {/* image */}
                            texto1
                        </div>
                    </div>
                    <div className="post hover-size">
                        {/* image */}
                        <div className="post-intro">
                            texto2
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Hero;