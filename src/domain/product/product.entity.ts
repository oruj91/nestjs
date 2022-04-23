import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn
} from 'typeorm'
import {ProductType} from '../productType/productType.entity'

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  typeId: number

  @Column({length: 15})
  serial: string

  @Column({length: 55})
  title: string

  @Column({length: 6, nullable: true})
  scale: string

  @Column({width: 5, nullable: true})
  weight: number

  @Column({length: 55})
  image: string

  @Column({type: 'float', width: 6})
  price: number

  @Column()
  inStock: number

  @Column()
  isPublished: number

  @Column({default: 0})
  views: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @ManyToOne(() => ProductType, (pt) => pt.products)
  type: ProductType
}
