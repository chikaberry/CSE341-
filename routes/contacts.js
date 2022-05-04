const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);


//route for get above



//route for post

router.post('/', contactsController.createContact );

//routr for put

router.put('/:id', contactsController.updateContact);


//route for delete 

router.delete('/:id', contactsController.deleteContact);










module.exports = router;