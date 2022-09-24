module.exports = (sequelize, Sequelize)=>{
    const writingLikes = sequelize.define('writingLikes',{
        id:{
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        isLike:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
    return writingLikes;
}