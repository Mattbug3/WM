import React from 'react';
import './css/blog.css'
import { Link } from 'react-router-dom'
import blog_image_1 from '../components/asset/blog-image-1.jpg'
import blog_image_2 from '../components/asset/blog-image-2.jpg'
import blog_image_3 from '../components/asset/blog-image-3.jpg'
import blog_image_4 from '../components/asset/blog-image-4.jpg'
import blog_image_5 from '../components/asset/blog-image-5.jpg'

const Blog = () => {
    return (
        <div className='blog'>
           <div className='blog-banner'>
              <h1>#Read More</h1>
            </div>
            <div className="blog-body">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog_image_1} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>4 Autumn Winter Trends</h4>
                        <p>Just because it's not officially Autumn doesn't mean the weather isn't perfect to wishlist some new season trends now</p>
                        <Link to='https://www.inthefrow.com/2023/08/4-autumn-winter-trends-to-buy-early.html'>Read More</Link>
                    </div>
                    <h1>13/01</h1> 
                </div>

                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog_image_2} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Functional Autumn And Winter Essentials</h4>
                        <p>Inherently Wearable Menswear Essentials: Trunk Clothiers Autumn Winter 2023</p>
                        <Link to='https://www.apetogentleman.com/trunk-clothiers-autumn-winter-2023/'>Read More</Link>
                    </div>
                    <h1>13/02</h1> 
                </div>

                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog_image_3} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>10 Textured Pieces You Need In Your Autumn/Winter Wardrobe</h4>
                        <p>Inherently Wearable Menswear Essentials: Trunk Clothiers Autumn Winter 2023</p>
                        <Link to='https://www.apetogentleman.com/textured-pieces-fall-winter/'>Read More</Link>
                    </div>
                    <h1>13/03</h1> 
                </div>

                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog_image_4} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>The Best Of The Reformation Sale</h4>
                        <p>It's that time of year - the summer sale is now on at The Reformation and we've collated the best pieces available for a limited time</p>
                        <Link to='https://www.inthefrow.com/2023/08/the-best-of-reformation-sale.html'>Read More</Link>
                    </div>
                    <h1>13/04</h1> 
                </div>

                <div className="blog-box">
                    <div className="blog-img">
                        <img src={blog_image_5} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>The 'Colour Of The Year'</h4>
                        <p>How To Introduce The ‘Colour Of The Year’ To Your Wardrobe This Season</p>
                        <Link to='https://www.apetogentleman.com/colour-of-the-year-wardrobe/'>Read More</Link>
                    </div>
                    <h1>13/05</h1> 
                </div>
            </div>
        </div>
    );
};

export default Blog;