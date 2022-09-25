module.exports = (sequelize, Sequelize)=>{
    const difficultyTime = sequelize.define('difficultyTime',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        timeInSec:{
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });
    return difficultyTime;
}