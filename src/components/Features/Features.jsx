import './Features.css'


export default function Features(){
    return(
        <section className='features-section'>
            <h2 className='features-section__title'>Why
            Choosing Us</h2>

            <div className="features-section__features">
            <div className="features-section__feature">
                <h3 className='feature__title'>Luxury facilities</h3>
                <p className='feature__text'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <button className="feature__btn">More Info</button>
            </div>
            
            <div className="features-section__feature">
                <h3 className='feature__title'>Affordable Price</h3>
                <p className='feature__text'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                <button className="feature__btn">More Info</button>
            </div>

            <div className="features-section__feature">
                <h3 className='feature__title'>Many Choices</h3>
                <p className='feature__text'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                <button className="feature__btn">More Info</button>
            </div>
            </div>
            

        </section>
    );
}