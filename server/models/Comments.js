module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Comments;
}