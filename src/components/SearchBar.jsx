import { useState } from "react";

function SearchBar({handleCheckChange, handleSearchValue}) {
    const [isChecked, setIsChecked] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="search-bar">
            <label htmlFor="filterInput">Search</label>
            <input 
                placeholder="Search..."
                id="filterInput"
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    handleSearchValue(e.target.value)
                }}
            >
            </input>
            <div>
                <input
                    type="checkbox"
                    id="onlyStockInput"
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked)
                        handleCheckChange(isChecked)
                    }}
                >
                </input>
                <label htmlFor="onlyStockInput">Onlyshow products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;