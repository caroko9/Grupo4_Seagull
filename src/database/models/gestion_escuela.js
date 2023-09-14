function gestion_escuela_Data(sequelize, DataTypes) {
    const GestionEscuela = sequelize.define('gestion_escuela', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_actual: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        estado_nuevo: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        escuela_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
        tableName: 'gestion_escuela', 
        timestamps: false,
    });

    GestionEscuela.associate = function (models) {
        GestionEscuela.belongsTo(models.escuela, {
            as: 'escuelas',
            foreignKey: 'escuela_id'
        });

        GestionEscuela.belongsTo(models.usuario, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        });
    }

    return GestionEscuela;
}

module.exports = gestion_escuela_Data;




