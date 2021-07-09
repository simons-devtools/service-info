import React from 'react';
import BSearch from './Compons/BSearch';
import Categories from './Compons/Categories';
import LatestPost from './Compons/LatestPost';
import Archive from './Compons/Archive';

const Widget = () => {
    return (
        <div style={{ margin: '18px 0' }}>
            <BSearch />
            <Categories />
            <LatestPost />
            <Archive />
        </div>
    );
};

export default Widget;