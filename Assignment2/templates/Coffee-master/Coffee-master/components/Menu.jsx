import React from 'react';

const MenuItem = ({ name, price, description }) => (
    <div className="col-lg-4">
        <div className="single-menu">
            <div className="title-div justify-content-between d-flex">
                <h4>{name}</h4>
                <p className="price float-right">${price}</p>
            </div>
            <p>{description}</p>                                
        </div>
    </div>
);

const Menu = () => {
    const items = [
        { name: 'Cappuccino', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Americano', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Espresso', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Macchiato', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Mocha', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Coffee Latte', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Piccolo Latte', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Ristretto', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
        { name: 'Affogato', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
    ];

    return (
        <section className="menu-area section-gap" id="coffee">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center">
                            <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                            <p>Who are in extremely love with eco-friendly system.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {items.map((item, index) => (
                        <MenuItem key={index} name={item.name} price={item.price} description={item.description} />
                    ))}
                </div>
            </div>    
        </section>
    );
};

export default Menu;
