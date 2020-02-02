const express = require('express');
//dependencia
const server = express();

server.use (express.json());

const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
const git = gitExtension.getAPI(1);

const projects = [];

//middlewares:
function checkProjectExists(req, res, next){
  const {id} = req.params;
  const project = projects.find(p => p.id ==id);

  if (!project){
    return res.status(400).json({ error: 'Project not found'});
  }
  return next();

}
//middleware que dá log no numero de requisições:

function logRequests(req, res, next) {
  console.count("numero de requisições");

  return next();

}

//Rotas de retorno dos projetos:

server.get('/projects', (req, res) => {
  return res.json(projects);
});

//request body: id, title
//cadastra novo projeto

server.post('/projects', (req, res) => {
  const {id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  return res.json(project);
});

//route params:id
//request body: title
//Altera o título do projeto com o id presente nos parametros da rota.

server.put('/projects/:id', ckeckProjectsExists, (req, res) => {
  project.title = title;

  return res.json(project);
});


//Route params: id
//Deleta o projeto associado ao id nos parametros da rota

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const {id} = req.params;

  const projectIndex = projects.findIndex(p=> p.id == id);
  
  projects.splice(projectIndex, 1);
  return res.send();

});

//Route params: id;
//Adiciona  uma nova tarefa no projeto via id
server.post('/projects/:id/tasks', checkProjectExists, (req, res) =>{
  const {id} = req.params;
  const {title} = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4000);



