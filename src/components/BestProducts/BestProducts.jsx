import "./BestProducts.css"

export default function BestProducts(){
    return(
        <section className='best-products-section'>


        </section>
    )
}

export function ProductCard() {
    return(
        <div className="prdoduct-card-container">
            <div className="product-card__img-container">
            <img alt='product' src='#' className='product-card__img'/>
            </div>
            <div className="product-card__body">
                <p className='body__product-category'></p>
                <h3 className='body__product-name'></h3>
                <div className="body__product-rewiew"></div>
                <div className="body__footer">
                    <p className='footer__product-price'></p>
                    <button className='footer__add-to-cart-btn'>+</button>
                </div>
            </div>


        </div>
    )
}