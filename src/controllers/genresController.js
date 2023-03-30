const db = require("../database/models")

module.exports = {
    list: (req, res) => {
        /* Retorna la vista genresList con todos los géneros de la DB */
        db.Genre.findAll()
       .then((genres) => {
        return res.render("genresList", {genres})
       })
    },
    detail: (req, res) => {
        const genreId = req.params.id;

        db.Genre.findByPk(genreId)
        .then((genre) => {
            res.render("genreDetail")
        })/*,
        order,
        limit,
        offset,*/
    }
}