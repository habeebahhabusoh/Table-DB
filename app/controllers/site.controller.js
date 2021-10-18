exports.index = function (request, response){
    response.render("pages/index.ejs",{
        // username: "habeebah!",
        // a: 1,
        // b: 1,
        // c: "C",
        status: "pending",
    });
};