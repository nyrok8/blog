import { useDispatch } from "react-redux";
import { setSearchTerm } from "../slices/searchSlice";

function Search() {
    const dispatch = useDispatch();

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value))
    }

    return (
        <>
            <div className="search-container">
                <span className="material-symbols-outlined">search</span>
                <input
                    placeholder="Search by article title"
                    onChange={handleSearchTermChange}
                />
            </div>
        </>
    );
}

export default Search;