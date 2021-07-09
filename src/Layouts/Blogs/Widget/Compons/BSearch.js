import React from 'react';
import './BSearch.modules.css';
import SearchIcon from '@material-ui/icons/Search';

const BSearch = () => {
    return (
        <div className="search-wrapper">
            <form action="">
                <input type="text" placeholder="type something ..." className="search-input" />
                <button type="submit" className="search-submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default BSearch;