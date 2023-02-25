import { doctor } from "../assets"
export const Presentacion = () => {
    return (
        <div className="containerSlide">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={doctor} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Dr de prueba</h5>
                            <p>Dr de prueba</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={doctor} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Dr de prueba</h5>
                            <p>Dr de prueba</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={doctor} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Dr de prueba</h5>
                            <p>Dr de prueba</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
