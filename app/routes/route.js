module.exports = function (app) {
    app.get('/', function (request, response){
        response.send('I AM MANPOWER API.');
    });

    app.use('/manpower',require('./manpower.route'));
    app.use('/skill',require('./skill.route'));
    app.use('/education',require('./education.route'));
    app.use('/general',require('./general.route'));
    app.use('/contractaddress',require('./contractaddress.route'));
    app.use('/driving',require('./driving.route'));
    app.use('/application',require('./application.route'));
    //app.use('/test',require('./test.route'));

    const siteController = require('../controllers/site.controller');
    app.get("/bee", siteController.index);

    const manpowerController = require('../controllers/manpower.controller');
    app.get("/manpower", manpowerController.manpower);
    app.get("/add", manpowerController.addmanpower);
    app.post("/add", manpowerController.addManPower);


    

}