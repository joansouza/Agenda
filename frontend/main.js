import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Contato from './modules/contato';
import Login from './modules/login';
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.form-contato');
login.init();
cadastro.init();
contato.init();
// import './assets/css/style.css';

