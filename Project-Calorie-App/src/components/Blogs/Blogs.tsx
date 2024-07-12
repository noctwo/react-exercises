import "./Blogs.css"

const Blogs = () => {
    return ( 
        <section className="blogs">
            <div className="blogs-heading-wrapper">
            <h2>Our Blogs</h2>
            <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
            </div>
            <div className="blogpost-wrapper">
                <div className="blogpost-card">
                    <img src="/img/blog-img-01.png"></img>
                    <span className="blog-category">Weight Loss</span>
                    <h3 className="blog-article-heading">The Benefits of Hydration for Weight Loss</h3>
                    <p className="blog-card-description">
                    Discover how staying hydrated can support your weight loss goals and improve overall health.
                    </p>
                    <div className="blog-card-author-infos">
                    <div className="author-infos">
                        <img src="/img/author-01.png"></img>
                        <div className="post-data">
                            <h5>Emily Thompson</h5>
                            <p>22 May 2023 - 5 min read</p>
                        </div>
                        </div>
                        <div className="like-bookmark-wrapper">
                            <img src="/img/like-icon.png"></img>
                            <img src="/img/bookmark-icon.png"></img>
                        </div>
                    </div>
                </div>
                <div className="blogpost-card">
                    <img src="/img/blog-img-02.png"></img>
                    <span className="blog-category">Mindful Eating</span>
                    <h3 className="blog-article-heading">Cultivating a Healthy Relationship with Food</h3>
                    <p className="blog-card-description">
                    Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.
                    </p>
                    <div className="blog-card-author-infos">
                        <div className="author-infos">
                        <img src="/img/author-02.png"></img>
                        <div className="post-data">
                            <h5>Sarah Johnson</h5>
                            <p>22 May 2023 - 5 min read</p>
                        </div>
                        </div>
                        <div className="like-bookmark-wrapper">
                            <img src="/img/like-icon.png"></img>
                            <img src="/img/bookmark-icon.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Blogs;