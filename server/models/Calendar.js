module.exports = (sequelize, DataTypes) => {

    const Calendar = sequelize.define("Calendar", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }    
    })

    return Calendar;
}