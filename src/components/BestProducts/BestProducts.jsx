import "./BestProducts.css"
import "./ProductCard.css"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";



import React, {useState, useEffect} from 'react'

export default function BestProducts(){

  


    const chairs = [
        {id: 1, categoryName: 'chair', productName: 'Sakarias Armchair', productPrice: 392, img: "./chair00001.png"},
        {id: 2, categoryName: 'chair', productName: 'Baltsar Chair', productPrice: 299, img: "./chair00002.png"},
        {id: 3, categoryName: 'chair', productName: 'Anjay Chair', productPrice: 519, img: "./chair00003.png"},
        {id: 4, categoryName: 'chair', productName: 'Nyantuy Chair', productPrice: 921, img: "./chair00004.png"},
    ]

    const Beds = [
        {id: 1, categoryName: 'beds', productName: 'Sakarias Armchair', productPrice: 392, img: "./chair00001.png"},
        {id: 2, categoryName: 'beds', productName: 'Baltsar Chair', productPrice: 299, img: "./chair00002.png"},
        {id: 3, categoryName: 'beds', productName: 'Anjay Chair', productPrice: 519, img: "./chair00003.png"},
        {id: 4, categoryName: 'beds', productName: 'Nyantuy Chair', productPrice: 921, img: "./chair00004.png"},
    ]

    const Sofa = [
        {id: 1, categoryName: 'sofa', productName: 'Sakarias Armchair', productPrice: 392, img: "./chair00001.png"},
        {id: 2, categoryName: 'sofa', productName: 'Baltsar Chair', productPrice: 299, img: "./chair00002.png"},
        {id: 3, categoryName: 'sofa', productName: 'Anjay Chair', productPrice: 519, img: "./chair00003.png"},
        {id: 4, categoryName: 'sofa', productName: 'Nyantuy Chair', productPrice: 921, img: "./chair00004.png"},
    ]

    const Lamp = [
        {id: 1, categoryName: 'lamp', productName: 'Sakarias Armchair', productPrice: 392, img: "./chair00001.png"},
        {id: 2, categoryName: 'lamp', productName: 'Baltsar Chair', productPrice: 299, img: "./chair00002.png"},
        {id: 3, categoryName: 'lamp', productName: 'Anjay Chair', productPrice: 519, img: "./chair00003.png"},
        {id: 4, categoryName: 'lamp', productName: 'Nyantuy Chair', productPrice: 921, img: "./chair00004.png"},
    ]


    const categories = [
        {id: 1, categoryName: 'Chair', categoryArray: chairs},
        {id: 2, categoryName: 'Beds', categoryArray: Beds},
        {id: 3, categoryName: 'Sofa', categoryArray: Sofa},
        {id: 4, categoryName: 'Lamp', categoryArray: Lamp},
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
        <section className='best-products-section'>
            <h2 className='best-products-section__title'>Best Selling Products</h2>
            <div className="best-products-section__navigation">
                {categories.map(category => <button key={category.id} className={`navigation__category ${activeCategoryName == category.categoryName ? 'active' : ''}`} onClick={() => handleCategory(category.categoryArray, category.categoryName )}>{category.categoryName}</button>)}
               
            </div>
            <div className="best-product-section__best-products-list">
            {activeCategory.map(product => { 
               return <ProductCard key={product.id} product={product}/>


            })}
            </div>
            <button className="best-products-section__view-all-btn">View All</button>
           


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