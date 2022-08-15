module.exports = (sequelize, DataTypes) => {

    const Commands = sequelize.define("Commands", {
        Type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Occasion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Description: {
            type: DataTypes.TEXT,
        },
        UriPicture: {
            type: DataTypes.STRING,
        },

    })

    Commands.associate = (models) => {
        Commands.belongsTo(models.Clients)
    }

    return Commands;
}