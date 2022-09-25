module.exports = (sequelize, Sequelize)=>{
    const difficulty = sequelize.define('difficulty',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return difficulty;
}