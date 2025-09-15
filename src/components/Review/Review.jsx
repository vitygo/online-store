import './Review.css'
import './ReviewCard.css'


export default function Review(){

    const reviews = [
        {
          id: 1,
          image: "p1.png", 
          name: "Bang Upin",
          occupation: "Pedagang Asongan",
          reviewText: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
          rating: 4
        },
        {
          id: 2,
          image: "p2.png", 
          name: "Ibuk Sukijan",
          occupation: "Ibu Rumah Tangga",
          reviewText: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
          rating: 4
        },
        {
          id: 3,
          image: "p3.png", 
          name: "Mpok Ina",
          occupation: "Karyawan Swasta",
          reviewText: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
          rating: 4
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
                    img={review.img} 
                    name={review.name} 
                    occupation={review.occupation} 
                    rating={review.rating}
                    reviewText={review.reviewText}/>
           
                    )}
              

            </div>

        </section>
    )
}


export function ReviewCard({img, name, occupation, rating, reviewText}){
    return(
        <div className="review-card">
            <div className="review-card__body">
                <img src={img} alt=''className='body__img'/>
                <p className='body__username'>{name}</p>
                <p className='body__user-occupation'>{occupation}</p>
                <p className='body__user-review-text'>{reviewText}</p>
                <p>{rating}</p>

            </div>

        </div>
    )
}