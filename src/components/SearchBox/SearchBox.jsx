import css from "./SearchBox.module.css"


const SearchBox = ({ searchedContact, handleSearch,}) => {
	return (
		<div>
			<p className={css.searchTxt}>Find contact by name</p>
			<input className={css.input}
				type='text'
				value={searchedContact}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBox
