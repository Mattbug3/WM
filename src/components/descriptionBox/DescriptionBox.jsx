import React from 'react';
import './descriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descritionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum quod optio iste rerum magnam tempora illo, quis alias eum. Ut amet dolorem facere, magnam veritatis nulla? Animi, necessitatibus veritatis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quia repudiandae mollitia iste rem molestiae alias provident incidunt possimus. Explicabo atque, praesentium voluptates est vitae asperiores hic harum iusto repudiandae?</p>
            </div>
        </div>
    );
};

export default DescriptionBox;