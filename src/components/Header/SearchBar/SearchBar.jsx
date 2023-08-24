export const SearchBar = ({onSubmit}) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<input type="text" name="query" placeholder="City" autoFocus autoComplete="off"/>
				<button type="submit">Choose</button>
			</form>
		</>
		
	)
};