import genresServices from "../services";

export default (dependencies) => {

    const getMovieGenres = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const genres = await genresServices.getGenres(query, dependencies);
        //output
        response.status(200).json(genres);
    };

    return {
        getMovieGenres,
    };

};
