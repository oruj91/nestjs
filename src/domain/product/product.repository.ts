import {EntityRepository, Repository} from 'typeorm'
import {Product} from './product.entity'

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getList(offset: number, limit: number): Promise<Product[]> {
    return this.find({
      order: {
        id: 'ASC',
      },
      skip: offset || 10,
      take: limit || 10,
    })
  }

  async getOneOrFail(id: number) {
    return this.findOneOrFail(id)
  }

  async deleteOrFail(id: number) {
    await this.findOneOrFail(id)
    return this.delete(id)
  }
}
