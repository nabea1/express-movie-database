const {sequelize, DataTypes, Model} = require('../db')
class Movie extends Model{}

Movie.init({
    genre: DataTypes.STRING,
    title: DataTypes.STRING,
    release: DataTypes.DATEONLY,
}) {
    sequelize, timestamps: false
}

module.exports = {Movie}