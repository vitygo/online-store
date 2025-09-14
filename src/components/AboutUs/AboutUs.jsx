import './AboutUs.css'


export default function AboutUs(){
    return(
        <section className="aboutus-section">
            <div className="aboutus__about about">
                <div className="aboutus__images"></div>
                <div className="aboutus__descr"></div>
            </div>
            <div className="aboutus__about about">
            <div className="aboutus__descr"></div>
            <div className="aboutus__images"></div>
            </div>
            <div className="aboutus__rewiews about">
                <h3 className=""></h3>
                <h3 className=""></h3>
                <div className="rewiews">
                    <div className="rewiew"></div>
                    <div className="rewiew"></div>
                    <div className="rewiew"></div>
                </div>
            </div>
        </section>
    )
}