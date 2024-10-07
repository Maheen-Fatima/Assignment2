import React from 'react';

const ChefMember = ({ name, title, description, imgSrc }) => (
    <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
        <div className="team-member">
            <div className="member-img">
                <img src={imgSrc} className="img-fluid" alt="" />
                <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="member-info">
                <h4>{name}</h4>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const ChefsSection = () => {
    const chefs = [
        {
            name: "Walter White",
            title: "Master Chef",
            description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
            imgSrc: "assets/img/chefs/chefs-1.jpg"
        },
        {
            name: "Sarah Jhonson",
            title: "Patissier",
            description: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
            imgSrc: "assets/img/chefs/chefs-2.jpg"
        },
        {
            name: "William Anderson",
            title: "Cook",
            description: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
            imgSrc: "assets/img/chefs/chefs-3.jpg"
        },
    ];

    return (
        <section id="chefs" className="chefs section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Chefs</h2>
                <p><span>Our</span> <span className="description-title">Professional Chefs<br /></span></p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    {chefs.map((chef, index) => (
                        <ChefMember 
                            key={index} 
                            name={chef.name} 
                            title={chef.title} 
                            description={chef.description} 
                            imgSrc={chef.imgSrc} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChefsSection;
