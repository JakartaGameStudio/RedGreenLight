import { AllowNull, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

interface UserAttributes {
  avatar: string | null;
  name: string;
  themeId: number;
  userId: number;
}

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'theme',
})
export class User extends Model<UserAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  avatar: string;
}
