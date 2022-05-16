const { User } = require('../../models');

module.exports.index = async function (req, res) {
    const user = await User.findAll();
    res.render('user/index', {
        users : user
    });
}

module.exports.create = function (req, res) {
     res.render('user/store');
}

module.exports.store = async function (req, res) {
    const users = await User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });
   
    res.redirect('/users');
}

module.exports.edit = async function (req, res) {

    const user = await User.findByPk(req.params.id);

    res.render('user/store', {
        user: user
    });
}

module.exports.update = async function (req, res) {
    const user = await User.update({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    },
    {
        where: {
            id: req.params.id,
        }
    });
        
    res.redirect('/users');

}

module.exports.delete = async function (req, res) {
    User.destroy({
        where: {
            id: req.params.id
        },
    });

    res.redirect('/users');
}