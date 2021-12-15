module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start: {
            type: DataTypes.DATE(6),
            allowNull: false
        }
    }) 

    return Comments;
}