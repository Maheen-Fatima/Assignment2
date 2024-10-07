import React from 'react';

const MenuSection = () => {
    return (
        <section id="menu" className="menu section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
            </div>

            <div className="container">
                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Starters</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                            <h4>Breakfast</h4>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                            <h4>Lunch</h4>
                        </a>
                    </li>
                </ul>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="tab-pane fade active show" id="menu-starters">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                        </div>
                        <div className="row gy-5">
                            {['item-1', 'item-2', 'item-3'].map((item, index) => (
                                <div className="col-lg-4 menu-item" key={index}>
                                    <a href={`assets/img/menu/menu-${item}.png`} className="glightbox">
                                        <img src={`assets/img/menu/menu-${item}.png`} className="menu-img img-fluid" alt="" />
                                    </a>
                                    <h4>Menu Item {index + 1}</h4>
                                    <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                    <p className="price">$5.95</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Add similar structures for Breakfast and Lunch tabs */}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
