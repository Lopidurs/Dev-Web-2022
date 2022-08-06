const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    full_name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    phone:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users',
});

module.exports = Users;