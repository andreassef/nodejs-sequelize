const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const router = Router();

router.get('/pessoas', PessoaController.listar);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findRegistry);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createNewRegistry);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateRegistry);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteRegistry);

module.exports = router;