import express from 'express';
import AccountsController from '../controllers';

const createRouter = (dependencies) => {
  const router = express.Router();

  // Load controller with dependencies
  const accountsController = AccountsController(dependencies);

  // Define routes
  router.route('/')
    .post(accountsController.createAccount)
    .get(accountsController.listAccounts);

  router.route('/:id')
    .get(accountsController.getAccount);

  return router;  
};

export default createRouter;
