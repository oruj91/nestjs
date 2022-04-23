import {EntityRepository, Repository} from 'typeorm'
import {Product} from './product.entity'

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getList(offset = 0, limit = 10): Promise<Product[]> {
    return this.find({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
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
