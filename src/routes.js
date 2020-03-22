const { Router } = require('express');
const auth = require('./middleware/auth')

const AlunoController = require('./Controller/AlunoController');
const CursoController = require('./Controller/CursoController');
const MatriculaController = require('./Controller/MatriculaController');
const GrupoController = require('./Controller/GrupoController');
const DesejoController = require('./Controller/DesejoController');
const LoginController = require ('./Controller/LoginController')

const routes = Router();

routes.get('/aluno', AlunoController.index);
routes.get('/aluno/:cpf', auth, AlunoController.getAluno);
routes.post('/aluno', AlunoController.create);
routes.put('/aluno', AlunoController.edit);
routes.put('/aluno/addHobie/:cpf', AlunoController.addHobie);
routes.delete('/aluno', AlunoController.delete);

routes.get('/curso', CursoController.index);
routes.get('/curso/:id', CursoController.getCurso);
routes.post('/curso', CursoController.create);
routes.put('/curso', CursoController.edit);
routes.delete('/curso', CursoController.delete);

routes.post('/matricula/:cpf', MatriculaController.matricular);
routes.get('/matricula/:cpf', MatriculaController.cursosMatriculados);

routes.get('/grupo', GrupoController.index);
routes.get('/grupo/', GrupoController.getAluno);
routes.post('/grupo', GrupoController.create);
routes.put('/grupo', GrupoController.edit);
routes.delete('/grupo', GrupoController.delete);

routes.get('/desejo', DesejoController.index);
routes.post('/desejo', DesejoController.create);
routes.put('/desejo', DesejoController.edit);
routes.delete('/desejo', DesejoController.delete);

routes.get('/Login', LoginController.index);
routes.get('/Login/', LoginController.getAluno);
routes.post('/Login', LoginController.create);
routes.put('/Login', LoginController.edit);
routes.delete('/Login', LoginController.delete);



module.exports = routes;