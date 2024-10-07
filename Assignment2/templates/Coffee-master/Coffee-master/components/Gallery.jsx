import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery-area section-gap" id="gallery">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center">
                            <h1 className="mb-10">Our Coffee Gallery</h1>
                            <p>Who are in extremely love with eco-friendly system.</p>
                        </div>
                    </div>
                </div>                        
                <div className="row">
                    {['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg'].map((img, index) => (
                        <div className="col-lg-4" key={index}>
                            <a href={`img/${img}`} className="img-pop-home">
                                <img className="img-fluid" src={`img/${img}`} alt="" />
                            </a>    
                        </div>
                    ))}
                </div>
            </div>    
        </section>
    );
};

export default Gallery;
