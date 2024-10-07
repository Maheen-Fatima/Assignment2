import React from 'react';

const ReviewItem = ({ image, name, stars, review }) => (
    <div className="col-lg-6 col-md-6 single-review">
        <img src={image} alt="" />
        <div className="title d-flex flex-row">
            <h4>{name}</h4>
            <div className="star">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`fa fa-star ${index < stars ? 'checked' : ''}`}></span>
                ))}
            </div>
        </div>
        <p>{review}</p>
    </div>
);

const Review = () => {
    const reviews = [
        { image: 'img/r1.png', name: 'Lorem Ipsum', stars: 3, review: 'Great coffee and friendly staff!' },
        { image: 'img/r2.png', name: 'Dolor Sit', stars: 2, review: 'Good atmosphere but coffee could be better.' },
    ];

    return (
        <section className="review-area section-gap" id="review">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center">
                            <h1 className="mb-10">What Our Customers Say</h1>
                            <p>Who are in extremely love with eco-friendly system.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {reviews.map((review, index) => (
                        <ReviewItem key={index} image={review.image} name={review.name} stars={review.stars} review={review.review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
