require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const routes = require('./routes');


const PORT = process.env.PORT_API;

/* Importando controllers */



/* conecção com o banco de dados */ 
const DB = require("./src/database");

DB
.authenticate()
.then(()=> {
    console.log("Conexão com banco de dados bem sucedida!")
}).catch((error) =>{
    console.log(error);
})


 // configuração das rotas gerais da aplicação
        

 app.use(cors());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 app.use(routes);

app.get('/',(req, res)=>{
    return res.json({message: 'Sistema online'})
})
/* configurações de adm do sitema e autenticação */

const JWTSecret = process.env.JWT_SECRET_KEY;
var adms =  
    {adm: [{
            id: 1,
            name: process.env.ADM_USER_1,
            cpf: process.env.ADM_PASSWORD_1,
 
        },
        {
            id: 2,
            name: process.env.ADM_USER_2,
            cpf: process.env.ADM_PASSWORD_2,
 
        }

    ]
    }

    app.post("/auth",(req, res) => { // validação de usuarios na api

        var {name, cpf} = req.body;
    
        if(name != undefined){
    
            var adm = adms.adm.find(u => u.name == name);
            if(adm != undefined){
                if(adm.cpf === cpf){
                    jwt.sign({id: adm.id, name: adm.name},JWTSecret,{expiresIn:'48h'},(err, token) => {
                        if(err){
                            res.status(400);
                            res.json({err:"Falha interna"});
                        }else{
                            res.status(200);
                            res.json({token: token});
                            
                        }
                    })
                }else{
                    res.status(401);
                    res.json({err: "Credenciais inválidas!"});
                }
            }else{
                res.status(404);
                res.json({err: "O nome enviado não existe na base de dados!"});
            }
    
        }else{
            res.status(400);
            res.json({err: "O usuário é inválido"});
        }
    });
    
    app.listen(PORT,() => {
        console.log(`Api rodando na porta ${PORT}`);
    });






