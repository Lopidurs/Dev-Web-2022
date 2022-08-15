module.exports = (sequelize, DataTypes) => {

    const Lessons = sequelize.define("Lessons", {
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        BeginHour: {
            type: DataTypes.TIME,
            allowNull: false
        },
        EndHour: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Places: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    Lessons.associate = (models) => {
        Lessons.belongsToMany(models.Clients, { through: 'ClientsLessons'})
    }

    return Lessons;
}