import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 15})
  firstName: string

  @Column({length: 15})
  lastName: string

  @Column({length: 55})
  email: string

  @Column()
  isAdmin: boolean

  @Column({type: 'datetime'})
  createdAt: Date

  @Column({type: 'datetime', nullable: true})
  updatedAt: Date

  @Column({type: 'datetime', nullable: true})
  deletedAt: Date
}
