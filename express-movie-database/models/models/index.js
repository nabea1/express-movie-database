const {sequelize, DataTypes, Model} = require('./db')

const { Cast } = require('./models/cast')
const { Crew } = require('./models/crew')
const { Movie } = require('./models/movie')

Cast.belongsTo(Movie)
Movie.hasMany(Cast)

Crew.belongsTo(Movie)
Movie.hasMany(Crew)

module.exports = {Cast, Crew, Movie, sequelize}
