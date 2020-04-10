import React from 'react'
import { TextField } from "@material-ui/core";


const SearchInputField = () => {
    // 검색창에 엔터키 입력했을 때 처리
    const HandleKey = (e) => {
        if (e.key === "Enter") alert(e.target.value + " 검색 기능 수행")
    };

    return (
        <TextField size="small" id="outlined-basic" label="Search" variant="outlined" onKeyPress={HandleKey} />
    )
};


export default SearchInputField;