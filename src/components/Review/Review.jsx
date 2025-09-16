import './Review.css'
import './ReviewCard.css'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";



import React, {useState, useEffect} from 'react'


export default function Review(){

    const reviews = [
        {
          id: 1,
          image: "p1.png", 
          name: "Bang Upin",
          occupation: "Pedagang Asongan",
          reviewText: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
          bgImg: "./bg1.png",
          productRating: 1
        },
        {
          id: 2,
          image: "p2.png", 
          name: "Ibuk Sukijan",
          occupation: "Ibu Rumah Tangga",
          reviewText: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
          bgImg: "./b2.png",
          productRating: 1
        },
        {
          id: 3,
          image: "p3.png", 
          name: "Mpok Ina",
          occupation: "Karyawan Swasta",
          reviewText: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
          bgImg: "./b3.png",
          productRating: 5
        }
      ];
      

    return(
        <section className="review-section">
            <p className="rewiew-section__pre-title">Testimonials</p>
            <h4 className='rewiew-section__title'>Our Client Reviews</h4>
            <div className="reviews-container">

                {reviews.map(review =>  
                <ReviewCard 
                    key={review.id} 
                    img={review.image} 
                    name={review.name} 
                    occupation={review.occupation} 
                    reviewText={review.reviewText}
                    bgImg={review.bgImg}
                    productRating={review.productRating}/>
           
                    )}
              

            </div>

        </section>
    )
}


export function ReviewCard({img, name, occupation, reviewText, bgImg, productRating}){

    
    



    return(
        <div className="review-card" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="review-card__body">
                <img src={img} alt=''className='body__img'/>
                <p className='body__username'>{name}</p>
                <p className='body__user-occupation'>{occupation}</p>
                <p className='body__user-review-text'>{reviewText}</p>
                <div className="rating">

            {Array(productRating).fill().map((_, index) => (
                <FaStar key={`full-${index}`} color="orange" />
            ))}

            
            {Array(5 - productRating).fill().map((_, index) => (
                <CiStar key={`empty-${index}`} />
            ))}
                                
                </div>

            </div>

        </div>
    )
}