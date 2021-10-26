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

    const siteController = require('../controllers/site.controller');
    const manPowerController = require('../controllers/manpower.controller');

    app.get('/manpower1',manPowerController.findAllManPowerContents);

    app.get("/man-power",manPowerController.index);
    app.get("/man-power/add",manPowerController.indexAdd);
    // app.u("/man-power/add",manPowerController.addManPower);
}