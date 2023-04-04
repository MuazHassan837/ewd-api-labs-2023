import express from 'express';
import genresController from  '../controller'

const createGenresRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const controller = genresController(dependencies);


    router.route('/')
        .get(controller.getMovieGenres);

    return router;
};
export default createGenresRouter;