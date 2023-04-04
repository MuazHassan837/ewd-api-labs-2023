import express from 'express';
import ValidationController from '../controllers/ValidationController';
import AccountsController from '../controllers';


const createRouter = (dependencies) => {
  const router = express.Router();

  // Load controller with dependencies
  const accountsController = AccountsController(dependencies);
  const validationController = ValidationController(dependencies);

  // Define routes
  router.route('/')
    .post(validationController.validateAccount, accountsController.createAccount)
    .get(accountsController.listAccounts);

  router.route('/:id')
    .get(accountsController.getAccount)
    .post(accountsController.updateAccount);

  router.route('/security/token')
    .post(accountsController.authenticateAccount);

  router.route('/:id/favourites')
    .post(accountsController.addFavourite);
  router.route('/:id/favourites')
    .get(accountsController.getFavourites);
    
  return router;
};

export default createRouter;