import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './index.module.css'

export default function FilterItem({ onFilter }) {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        setKeyword(e.target.value.trim());
    }

    useEffect(() => {
        // 降低數據過濾次數, 提高用戶體驗
        // 用戶輸入完再過濾, 用戶輸入的過程中, 不要過濾
        // 當用戶停止輸入1秒後再查詢
        // 開啟一個定時器的同時, 應該關閉上一個
        const timer = setTimeout(() => {
            onFilter(keyword);
        }, 500); 

        // 在 Effect 的回調函數中, 可以指定一個函數作為返回值
        // 可稱為清理函數, 會在下次 Effect 執行前調用
        return () => {
            clearTimeout(timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    return (
        <div className={classes.FilterItem}>
            <div className={classes.InputOuter}>
                <input
                    value={keyword}
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
