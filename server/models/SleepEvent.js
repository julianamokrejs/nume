module.exports = (sequelize, DataTypes) => {

    const SleepEvent = sequelize.define("SleepEvent", {
        SleepComment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }    
    })

    return SleepEvent;
}