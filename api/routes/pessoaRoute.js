const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const router = Router();

router.get('/pessoas', PessoaController.listar);
router.get('/pessoas/:id', PessoaController.findById);
module.exports = router;