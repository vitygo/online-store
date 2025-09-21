import "./BestProducts.css"
import "./ProductCard.css"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {useRef} from "react"


import React, {useState, useEffect} from 'react'

export default function BestProducts({bestProductsRef}){
   

  


    const chairs = [
        { id: 1, categoryName: 'chair', productName: 'Velora Armchair',   productPrice: 430, img: "./chair1.png" },
        { id: 2, categoryName: 'chair', productName: 'Marvik Lounge Seat', productPrice: 355, img: "./chair2.png" },
        { id: 3, categoryName: 'chair', productName: 'Eris Rocker',        productPrice: 545, img: "./chair1.png" },
        { id: 4, categoryName: 'chair', productName: 'Zyra Recliner',      productPrice: 715, img: "./chair2.png" }
    ];
    

    const sofa = [
        { id: 1, categoryName: 'sofa', productName: 'Aurora 3-Seater Sofa', productPrice: 880, img: "./sofa.png" },
        { id: 2, categoryName: 'sofa', productName: 'Luna Recliner Sofa', productPrice: 760, img: "./sofa.png" },
        { id: 3, categoryName: 'sofa', productName: 'Orion Sectional Sofa', productPrice: 1_150, img: "./sofa.png" },
        { id: 4, categoryName: 'sofa', productName: 'Nova Loveseat Sofa', productPrice: 640, img: "./sofa.png" }
    ];    

    const lamp = [
        { id: 1, categoryName: 'lamp', productName: 'Solara Glow Lamp',    productPrice: 175, img: "./lamp.png" },
        { id: 2, categoryName: 'lamp', productName: 'Vetra Night Light',   productPrice: 105, img: "./lamp.png" },
        { id: 3, categoryName: 'lamp', productName: 'Elora Beam Stand',    productPrice: 145, img: "./lamp.png" },
        { id: 4, categoryName: 'lamp', productName: 'Kyra Halo Pendant',   productPrice: 230, img: "./lamp.png" }
    ];
    
    const beds = [
        { id: 1, categoryName: 'bed', productName: 'Velora King Bed',    productPrice: 890, img: "./bed.png" },
        { id: 2, categoryName: 'bed', productName: 'Marvik Queen Bed',   productPrice: 755, img: "./bed.png" },
        { id: 3, categoryName: 'bed', productName: 'Eris Double Bed',    productPrice: 670, img: "./bed.png" },
        { id: 4, categoryName: 'bed', productName: 'Zyra Single Bed',    productPrice: 540, img: "./bed.png" }
    ];
    

    const categories = [
        {id: 1, categoryName: 'Chair', categoryArray: chairs},
        {id: 2, categoryName: 'Beds', categoryArray: beds},
        {id: 3, categoryName: 'Sofa', categoryArray: sofa},
        {id: 4, categoryName: 'Lamp', categoryArray: lamp},
    ]

    const [activeCategory, setActiveCategory] = useState(chairs)
    const [activeCategoryName, setActiveCategoryName] = useState('Chair')
   
   

    // useEffect(() => {




    // },[activeCategory])


    function handleCategory(categoryArray, categoryName){
        setActiveCategoryName(categoryName)
        setActiveCategory(categoryArray)
        
    }



    return(
        <section ref={bestProductsRef} className='best-products-section'>
            <h2 className='best-products-section__title'>Best Selling Products</h2>
            <div className="best-products-section__navigation">
                {categories.map(category => <button key={category.id} className={`navigation__category ${activeCategoryName == category.categoryName ? 'active' : ''}`} onClick={() => handleCategory(category.categoryArray, category.categoryName )}>{category.categoryName}</button>)}
               
            </div>
            
            <div className="best-product-section__best-products-list">
            {activeCategory.map(product => { 
               return <ProductCard key={product.id} product={product}/>


            })}
            </div>
            <a className="best-products-section__view-all-btn">View All</a>
           


        </section>
    )
}

export function ProductCard({product}) {

    const ratings = [
        {id: 1, rating: 1},
        {id: 2, rating: 2},
        {id: 3, rating: 3},
        {id: 4, rating: 4},
        {id: 5, rating: 5}
    ]

    const [productRating, setProductRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    function handleRating(ratingId){
        setProductRating(ratingId);
        
    }

    function handleHoverRating(rating){
        setHoverRating(rating)
    }


    return(
        <div className="prdoduct-card-container">
            <div className="product-card__img-container">
            <img alt='product' src={product.img} className='product-card__img'/>
            </div>
            <div className="product-card__body">
                <p className='body__product-category'>{product.categoryName}</p>
                <h3 className='body__product-name'>{product.productName}</h3>
                <div className="body__product-rating">
                {ratings.map(rating => {
                      

                        return rating.id <= (hoverRating || productRating) ?  (
                    
                        <FaStar onMouseLeave={() => setHoverRating(0)}
                                onMouseEnter={() => handleHoverRating(rating.id)} 
                                color="orange"  
                                key={rating.id} 
                                onClick={() => handleRating(rating.id)}/>
                        )
                        : (<CiStar onMouseLeave={() => setHoverRating(0)} 
                                  onMouseEnter={() => handleHoverRating(rating.id)} 
                                  key={rating.id} onClick={() => handleRating(rating.id)}/>
                        
                    )})}
                </div>
                <div className="body__footer">
                    <p className='footer__product-price'><sup style={{marginRight: "2px", fontSize: '0.9rem'}}>$</sup>{`${product.productPrice}`}</p>
                    <button className='footer__add-to-cart-btn'>+</button>
                </div>
            </div>


        </div>
    )
}