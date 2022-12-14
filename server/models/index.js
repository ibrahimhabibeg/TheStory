const Sequelize = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host:config.HOST,
        dialect:config.DIALECT
    }
);

const db = {
    Sequelize,
    sequelize
};

db.user = require("./user.model")(sequelize,Sequelize);
db.topic = require("./topic.model")(sequelize,Sequelize);
db.writing = require("./writing.model")(sequelize,Sequelize);
db.writingLikes = require("./writingLikes.model")(sequelize,Sequelize);

db.user.hasMany(db.writing);
db.writing.belongsTo(db.user);

db.topic.hasMany(db.writing);
db.writing.belongsTo(db.topic);

db.user.belongsToMany(db.writing, {through: db.writingLikes});
db.writing.belongsToMany(db.user, {through: db.writingLikes});

module.exports = db;