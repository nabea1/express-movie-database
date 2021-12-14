const express = require('express')
const path = require('path') //node native module
const { check, validationResult } = require('express-validator');
const { Movie } = require('./models/Movie')
const { Cast } = require('./models/Cast')
const { Crew } = require('./models/Crew')
const app = express()
const port = 3000

//Otherwise you have to JSON.parse(req.body) in each of your route handlers
app.use(express.json())
//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))
//GET method on /movie route returns all movies
app.get('/movies', async (req,res) => {
    //find all instances of the Model movie
    const allMovies = await Movie.findAll()    
    res.json(allMovies)
})

app.get('/movies/:id', async (req,res) => {
    //find all instances of the Model movie
    const allMovies = await Movie.findAll({where:{id:req.params.id}})    
    res.json(allMovies)
})

app.post('/movies', async (req,res) => {
  
  let newMovies=await Movie.bulkCreate(req.body)      
    res.send(newMovies?"Movie created":"Movie Failed to Created")
})
app.put('/movies/:id', async (req,res) => {
    
  let updatedMovie=await Movie.update(req.body,{where:{id:req.params.id}})      
    res.send(updatedMovie?"Movie updated":"update Failed")
})
     
app.delete('/movies/:id', async (req,res) => {
   
  let deletMovies=await Movie.destroy({where:{id:req.params.id}})      
    res.send(deletMovies?"Movie deleted":"Delete Failed")
})
     
app.get('/search', async (req,res) => {
   
    let results = [] 
    if(req.query.genre)   
     {results = await Movie.findAll({where:{genre: req.query.genre}})}
     else{results = await Movie.findAll({where:{rating: req.query.rating}})}
     res.json(results)
   })
app.get('/crews', async (req,res) => {
    //find all instances of the Model movie
    const allCrews = await Crew.findAll()    
    res.json(allCrews)
})
app.post('/crews', async (req,res) => {
  
  let newCrews=await Crew.bulkCreate(req.body)      
    res.send(newCrews?"crew created":"crew Failed to Created")
})
app.put('/crews/:id', async (req,res) => {
    
  let updatedCrew=await Crew.update(req.body,{where:{id:req.params.id}})      
    res.send(updatedCrew?"Crew updated":"update Failed")
})
     
app.delete('/crews/:id', async (req,res) => {
   
  let deletCrew=await Crew.destroy({where:{id:req.params.id}})      
    res.send(deletCrew?"Crew deleted":"Delete Failed")
})
app.get('/casts', async (req,res) => {
    //find all instances of the Model movie
    const allCasts = await Cast.findAll()    
    res.json(allCasts)
})
app.post('/casts', async (req,res) => {
  
  let newCasts=await Cast.bulkCreate(req.body)      
    res.send(newCasts?"cast created":"cast Failed to Created")
})
app.put('/casts/:id', async (req,res) => {
    
  let updatedCast=await Cast.update(req.body,{where:{id:req.params.id}})      
    res.send(updatedCast?"Cast updated":"update Failed")
})
     
app.delete('/casts/:id', async (req,res) => {
   
  let deletCast=await Cast.destroy({where:{id:req.params.id}})      
    res.send(deletCast?"Cast deleted":"Delete Failed")
})

//server side validation
app.post('/movies', [
  check('title').not().isEmpty().trim().escape()
  ], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  })



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
