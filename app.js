var express        = require('express');
var bodyParser     = require('body-parser');
var deptModel      = require('./models').department;
var empModel       = require('./models').emp;

var app = express();

//fetch form data from the request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/adddept',(req,res)=>{
    //it will add data to department table
    deptModel.create(req.body)
    .then(function(data){
        res.json({da:data});
    }).catch(function(error){
        res.json({er:error});
    })
});

app.post('/addemp',(req,res)=>{
    //it will addd data to emp table
    empModel.create(req.body)
    .then(function(data){
        res.json({da:data});
    }).catch(function(error){
        res.json({er:error});
    })
});

app.post('/deldept/:id',(req,res)=>{
    //it will delete particular department data
    deptModel.destroy({where:{id:req.params.id}})
    .then(function(data){
        res.json({da:data});
    }).catch(function(error){
        res.json({er:error});
    })
});

app.get('/',(req,res)=>{
    //this will join the tables and display data
    empModel.findAll({include:[{model:deptModel}]})
    .then(function(data){
        res.json({da:data});
    }).catch(function(error){
        res.json({er:error});
    })
});

var port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server runing at port '+port));
