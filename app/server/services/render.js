const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.create_carnet = (req, res) =>{
    res.render('create_carnet');
}

exports.update_carnet = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_carnet", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.download = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("download", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}