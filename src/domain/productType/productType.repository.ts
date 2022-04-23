import {EntityRepository, Repository} from 'typeorm'
import {ProductType} from './productType.entity'

@EntityRepository(ProductType)
export class ProductTypeRepository extends Repository<ProductType> {}