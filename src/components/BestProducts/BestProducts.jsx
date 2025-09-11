import "./BestProducts.css"
import React, {useState, useEffect} from 'react'

export default function BestProducts(){

    const [activeCategory, setActiveCategory] = useState('chair')


    const chair = [
        {categoryName: 'chair', productName: 'Sakarias Armchair', productPrice: 392},
        {categoryName: 'chair', productName: 'Baltsar Chair', productPrice: 299},
        {categoryName: 'chair', productName: 'Anjay Chair', productPrice: 519},
        {categoryName: 'chair', productName: 'Nyantuy Chair', productPrice: 921},
    ]


    const categories = [
        {categoryName: 'chair'},
        {categoryName: 'beds'},
        {categoryName: 'sofa'},
        {categoryName: 'lamp'},
    ]


    function handleCategory(categoryName){
        setActiveCategory(categoryName)
        
    }

    return(
        <section className='best-products-section'>
            <h2 className='best-products-section__title'>Best Selling Product</h2>
            <div className="best-products-section__navigation">
                {categories.map(category => <button className={`navigation__category ${activeCategory == category.categoryName ? 'active' : ''}`} onClick={() => handleCategory(category.categoryName)}>{category.categoryName}</button>)}
            </div>


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