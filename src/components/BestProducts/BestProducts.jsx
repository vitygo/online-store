import "./BestProducts.css"
import React, {useState, useEffect} from 'react'

export default function BestProducts(){

    const [activeCategory, setActiveCategory] = useState('chair')


    const chair = [
        {key: 1, categoryName: 'chair', productName: 'Sakarias Armchair', productPrice: 392},
        {key: 2, categoryName: 'chair', productName: 'Baltsar Chair', productPrice: 299},
        {key: 3, categoryName: 'chair', productName: 'Anjay Chair', productPrice: 519},
        {key: 4, categoryName: 'chair', productName: 'Nyantuy Chair', productPrice: 921},
    ]


    const categories = [
        {categoryName: 'chair', categoryArray: chair},
        {categoryName: 'beds', categoryArray: chair},
        {categoryName: 'sofa', categoryArray: chair},
        {categoryName: 'lamp', categoryArray: chair},
    ]

    // useEffect(() => {




    // },[activeCategory])


    function handleCategory(categoryName){
        setActiveCategory(categoryName)
        
    }

    return(
        <section className='best-products-section'>
            <h2 className='best-products-section__title'>Best Selling Product</h2>
            <div className="best-products-section__navigation">
                {categories.map(category => <button className={`navigation__category ${activeCategory == category.categoryName ? 'active' : ''}`} onClick={() => handleCategory(category.categoryName)}>{category.categoryName}</button>)}
               
            </div>
            {categories.map(
              category => {if (category.categoryName === activeCategory
              ){
                    category.categoryArray.map(
                        item => <ProductCard key={item.key} categoryArray={item}/>
                    )}})};


        </section>
    )
}

export function ProductCard({categoryArray}) {
    return(
        <div className="prdoduct-card-container">
            <div className="product-card__img-container">
            <img alt='product' src='#' className='product-card__img'/>
            </div>
            <div className="product-card__body">
                <p className='body__product-category'>{categoryArray.categoryName}</p>
                <h3 className='body__product-name'>{categoryArray.productName}</h3>
                <div className="body__product-rewiew"></div>
                <div className="body__footer">
                    <p className='footer__product-price'>{categoryArray.productPrice}</p>
                    <button className='footer__add-to-cart-btn'>+</button>
                </div>
            </div>


        </div>
    )
}