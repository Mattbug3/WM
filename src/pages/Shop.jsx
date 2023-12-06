import React from 'react';
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollections from '../components/newCollections/NewCollections';
import NewsLetter from '../components/newsLetter/NewsLetter';
import Collections from '../components/collections/Collections';

const Shop = () => {
    const Style = {'position': 'relative'}
    return (
        <div style={Style}>
            <Hero />
            <Collections />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    );
};

export default Shop;