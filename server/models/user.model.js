module.exports = (sequelize, Sequelize)=>{
    const user = sequelize.define('user',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        fName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lName:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        indexes:[
            {fields:["email"], unique:true},
            {fields:["username"], unique:true},
        ]
    });
    return user;
}