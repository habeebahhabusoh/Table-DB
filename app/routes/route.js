module.exports = function (app) {

    app.use('/',require('./site.route'));

    app.use('/api/manpower',require('./manpower.route'));
    app.use('/api/skill',require('./skill.route'));
    app.use('/api/education',require('./education.route'));
    app.use('/api/general',require('./general.route'));
    app.use('/api/contractaddress',require('./contractaddress.route'));
    app.use('/api/driving',require('./driving.route'));
    app.use('/api/application',require('./application.route'));
    app.use('/api/requisition',require('./requisition.route'));
    

}