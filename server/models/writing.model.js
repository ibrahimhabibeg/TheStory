module.exports = (sequelize, Sequelize)=>{
    const writing = sequelize.define('writing',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false
        },
        text:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    return writing;
}