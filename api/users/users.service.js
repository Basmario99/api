const pool = require("../../config/database");

module.exports = {
    create : (data,callBack)=>{
        pool.query(
            'insert into Registrazione(nome,email,password) values(?,?,?)',
            [
                data.nome,
                data.email,
                data.password
            ],
            (error,results,fields)=>{
                if(error)
                    return callBack(error);
                return callBack(null,results);
            }
        )
    }
};