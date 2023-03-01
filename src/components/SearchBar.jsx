import { useState } from "react";

function SearchBar({handleCheckChange, handleSearchValue}) {
    const [isChecked, setIsChecked] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    return (
        <>
            <input 
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    handleSearchValue(e.target.value)
                }}
            >
            </input>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    setIsChecked(!isChecked)
                    handleCheckChange(isChecked)
                }}
            >
            </input>
        </>
    )
}

export default SearchBar;