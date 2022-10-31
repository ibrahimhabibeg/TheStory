module.exports = (sequelize, Sequelize)=>{
    const writing = sequelize.define('writing',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: Sequelize.STRING
        },
        text:{
            type: Sequelize.TEXT
        },
        isPublished:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return writing;
}