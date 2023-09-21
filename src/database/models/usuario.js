function usuarioData(sequelize, DataTypes) {
    let aliasUsuario = 'usuario'; // Nombre de la tabla

    let colsUsuario = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        contrasena: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fecha_eliminacion: {
            type: DataTypes.DATE,
            allowNull: true
        },
   
    }

    let configUsuario = {
        timestamps: false,
        tableName: 'usuario' // Especifica el nombre de la tabla existente
    };

    const Usuario = sequelize.define(aliasUsuario, colsUsuario, configUsuario)

    Usuario.associate = function (modelos) {
        Usuario.hasMany(modelos.gestion_escuela, {
            as: 'gestion_escuelas',
            foreignKey: 'usuario_id'
        });

        Usuario.hasMany(modelos.producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        });
    }

    return Usuario;
}

module.exports = usuarioData;






