import { useState } from "react";
import Fetch from "../Fetch/Fetch";

const Search = () => {

    const [searchInput, setSearchInput] = useState<string>("");
    const [selectOption, setSelectOption] = useState<string>("");
    const [showFetch, setShowFetch] = useState<boolean>(false);

    const getSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const getSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOption(event.target.value);
    };

    const handleSearchClick = () => {
        setShowFetch(true);
    }

    return ( 
        <div className="input-fields-wrapper">
            <input onChange={getSearchInput} type="text" value={searchInput}></input>
            <select onChange={getSelectOption} name="language" value={selectOption}>
                <option value="de">German</option>
                <option value="gb">English</option>
                <option value="fr">French</option>
                <option value="hu">Hungarian</option>
                <option value="ru">Russian</option>
            </select>
            <button onClick={handleSearchClick} type="submit">Search</button>
            {showFetch && <Fetch searchInput={searchInput} selectOption={selectOption} />}
        </div>
    );
}

export default Search