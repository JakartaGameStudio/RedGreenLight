import { AllowNull, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

interface UserThemeAttributes {
  themeId: number;
  userId: number;
}

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'users_theme',
})
export class UserTheme extends Model<UserThemeAttributes> {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId: number;

  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;
}
