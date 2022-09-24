module.exports = (sequelize, Sequelize)=>{
    const genre = sequelize.define('genre',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        easyTimeSec:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        medTimeSec:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        hardTimeSec:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    });
    return genre;
}