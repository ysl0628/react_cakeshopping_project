import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './index.module.css'

export default function FilterItem({ onFilter }) {

    // const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        const keyword = e.target.value.trim();
        onFilter(keyword);
    }

    return (
        <div className={classes.FilterItem}>
            <div className={classes.InputOuter}>
                <input
                    onChange={searchHandler}
                    className={classes.SearchInput}
                    type="text"
                    placeholder='請輸入關鍵字' />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch} />
            </div>
        </div>
    )
}
