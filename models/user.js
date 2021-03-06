module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "member"
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
        User.belongsToMany(models.Movie, { through: models.UserMovie });
    };
    
    return User;
};