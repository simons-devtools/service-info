import React from 'react';
import BSearch from './Compons/BSearch';
import Categories from './Compons/Categories';
import LatestPost from './Compons/LatestPost';
import Archive from './Compons/Archive';

const Widget = ({ blogs }) => {
    return (
        <div style={{ position: 'sticky', top: '0', margin: '18px 0' }}>
            <BSearch />
            <Categories blogs={blogs} />
            <LatestPost blogs={blogs} />
            <Archive blogs={blogs} />
        </div>
    );
};

export default Widget;