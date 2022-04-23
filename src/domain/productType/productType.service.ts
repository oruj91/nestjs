import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductTypeRepository} from './productType.repository'

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectRepository(ProductTypeRepository)
    private readonly productTypeRepository: ProductTypeRepository,
  ) {}

  async isNotExist(typeId: number) {
    const r = await this.productTypeRepository.findOne({id: typeId})
    return r === undefined
  }
}
