import "./BestProducts.css"
import "./ProductCard.css"
import { CiStar } from "react-icons/ci";
import {useState} from "react"

import React, {useState, useEffect} from 'react'

export default function BestProducts(){

    const [activeCategory, setActiveCategory] = useState('chair')


    const chairs = [
        {id: 1, categoryName: 'chair', productName: 'Sakarias Armchair', productPrice: 392, img: "./chair00001.png"},
        {id: 2, categoryName: 'chair', productName: 'Baltsar Chair', productPrice: 299, img: "./chair00002.png"},
        {id: 3, categoryName: 'chair', productName: 'Anjay Chair', productPrice: 519, img: "./chair00003.png"},
        {id: 4, categoryName: 'chair', productName: 'Nyantuy Chair', productPrice: 921, img: "./chair00004.png"},
    ]


    const categories = [
        {id: 1, categoryName: 'Chair', categoryArray: chairs},
        {id: 2, categoryName: 'Beds', categoryArray: chairs},
        {id: 3, categoryName: 'Sofa', categoryArray: chairs},
        {id: 4, categoryName: 'Lamp', categoryArray: chairs},
    ]

   

    // useEffect(() => {




    // },[activeCategory])


    function handleCategory(categoryName){
        setActiveCategory(categoryName)
        
    }

    return(
        <section className='best-products-section'>
            <h2 className='best-products-section__title'>Best Selling Products</h2>
            <div className="best-products-section__navigation">
                {categories.map(category => <button key={category.id} className={`navigation__category ${activeCategory == category.categoryName ? 'active' : ''}`} onClick={() => handleCategory(category.categoryName)}>{category.categoryName}</button>)}
               
            </div>
            <div className="best-product-section__best-products-list">
            {chairs.map(chair => { 
               return <ProductCard key={chair.id} product={chair}/>

            })}
            </div>
           


        </section>
    )
}

export function ProductCard({product}) {

    const rating = [
        {id: 1, rating: 1},
        {id: 2, rating: 2},
        {id: 3, rating: 3},
        {id: 4, rating: 4},
        {id: 5, rating: 5}
    ]

    return(
        <div className="prdoduct-card-container">
            <div className="product-card__img-container">
            <img alt='product' src={product.img} className='product-card__img'/>
            </div>
            <div className="product-card__body">
                <p className='body__product-category'>{product.categoryName}</p>
                <h3 className='body__product-name'>{product.productName}</h3>
                <div className="body__product-rewiew">
                    {rating.map(star => <CiStar key={star.id} />)}
                    
                </div>
                <div className="body__footer">
                    <p className='footer__product-price'><sup style={{marginRight: "2px", fontSize: '0.9rem'}}>$</sup>{`${product.productPrice}`}</p>
                    <button className='footer__add-to-cart-btn'>+</button>
                </div>
            </div>


        </div>
    )
}