const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
class Products extends Model {}

Products.init({
    galerie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    img_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    galerie_nom:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_upload:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Galerie',
});

module.exports = Galerie;