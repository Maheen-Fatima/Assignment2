import React from 'react';

const EventItem = ({ title, price, description, imgSrc }) => (
    <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${imgSrc})` }}>
        <h3>{title}</h3>
        <div className="price align-self-start">${price}</div>
        <p className="description">{description}</p>
    </div>
);

const EventsSection = () => {
    const events = [
        {
            title: "Custom Parties",
            price: 99,
            description: "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
            imgSrc: "assets/img/events-1.jpg"
        },
        {
            title: "Private Parties",
            price: 289,
            description: "In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
            imgSrc: "assets/img/events-2.jpg"
        },
        {
            title: "Birthday Parties",
            price: 499,
            description: "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
            imgSrc: "assets/img/events-3.jpg"
        },
        {
            title: "Wedding Parties",
            price: 899,
            description: "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
            imgSrc: "assets/img/events-4.jpg"
        },
    ];

    return (
        <section id="events" className="events section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">
                    <div className="swiper-wrapper">
                        {events.map((event, index) => (
                            <EventItem 
                                key={index} 
                                title={event.title} 
                                price={event.price} 
                                description={event.description} 
                                imgSrc={event.imgSrc} 
                            />
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
