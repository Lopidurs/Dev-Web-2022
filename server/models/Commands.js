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
            allowNull: false
        },
        UriPicture: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })

    return Commands;
}