
const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_FAVORITES":

            const item = action.payload

            const existMovie = state.favorites.find(x => x.id === item.id)

            if (existMovie) {
                return {
                    ...state,
                    favorites: state.favorites.map((x) => x.id === existMovie.id ? item : x)
                }
            } else
                return {
                    ...state,
                    favorites: [item, ...state.favorites],
                }

        case "REMOVE_MOVIE_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default AppReducer