import { DataTypes } from 'sequelize';

const galleryModel = (sequelize) =>
  sequelize.define('galleries', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default galleryModel;
