const Login = require('../models/LoginModel');

exports.index = (req, res) => {
 if(req.session.user) return res.render('login-in');
  res.render('login');
  return;
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
    }
    req.flash('success', 'seu usario foi criado com sucesso');
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};

exports.login = async (req,res)=>{
  try {
    const login = new Login(req.body);
    await login.login();
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
    }
    req.flash('success', 'você entrou no sistema');
    req.session.user = login.user;
      req.session.save(function () {
        return res.redirect('back');
      });
      return;
  } catch (e) {
    console.log(e);
    res.render('404');
  }

};

exports.logout = (req,res) =>{
  req.session.destroy();
  res.redirect('/');
};