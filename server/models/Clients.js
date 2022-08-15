module.exports = (sequelize, DataTypes) => {

    const Clients = sequelize.define("Clients", {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    Clients.associate = (models) => {
        Clients.hasMany(models.Commands, {
            onDelete: "cascade"
        })
        Clients.belongsToMany(models.Lessons, { through: 'ClientsLessons'})
    }



    return Clients;
}