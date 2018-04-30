export function selectBook(book) {
	// selectBook is an action creator, it returns an action
	// an action with a type property
	return {
	 type: 'BOOK_SELECTED',
	 payload: book
	};
}
