const bodyParser = require('body-parser');
const pessoas = require('./pessoaRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.get('/', (req, resp) => {resp.send( { mensagem: 'boas vindas à API' } ) });
}