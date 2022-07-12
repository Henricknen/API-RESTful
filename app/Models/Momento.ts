import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Momento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()   /* coluna de titulo */
  public  title: string
  
  @column()
  public  descripition: string

  @column()
  public  image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
