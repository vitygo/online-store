import './AboutUs.css'


export default function AboutUs(){
    return(
        <section className="aboutus-section">

            <div className="aboutus__about about">

                <div className="aboutus__images">
                    <img src='./rectangle.png' className="images__img" alt=''></img>
                </div>

                <div className="aboutus__descr">
                    <p className="descr__subject">EXPERIENCES</p>
                    <h3 className="descr__title">We Provide You The Best Experience</h3>
                    <p className="descr__text">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    <button className="descr__btn">More info</button>
                    
                </div>

            </div>

            <div className="aboutus__about about2">
            <div className="aboutus__descr">
                    <p className="descr__subject">MATERIALS</p>
                    <h3 className="descr__title">Very Serious Materials For Making Furniture</h3>
                    <p className="descr__text">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                    <button className="descr__btn">More info</button>
                    
                </div>
                <div className="aboutus__images img2-container">
                    <img src='./new.png' className="images__img img-2" alt=''></img>
                </div>
            </div>

            {/* <div className="aboutus__rewiews about">
                <h3 className=""></h3>
                <h3 className=""></h3>
                <div className="rewiews">
                    <div className="rewiew"></div>
                    <div className="rewiew"></div>
                    <div className="rewiew"></div>
                </div>
            </div> */}
        </section>
    )
}