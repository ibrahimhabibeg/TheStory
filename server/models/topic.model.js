module.exports = (sequelize, Sequelize)=>{
    const topic = sequelize.define('topic',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    return topic;
}