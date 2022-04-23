import {Controller, Post, Body, Get, Query, Param, Patch, Delete, HttpStatus, HttpException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductRepository} from './product.repository'
import {ProductService} from './product.service'
import {ProductTypeService} from '../productType/productType.service'
import {CreateAndUpdateProductDto} from './product.dto'

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
    private readonly productService: ProductService,
    private readonly productTypeService: ProductTypeService,
  ) {}

  @Post()
  async create(@Body() data: CreateAndUpdateProductDto) {
    const isTypeIdNotExist = await this.productTypeService.isNotExist(data.typeId)

    if (isTypeIdNotExist) throw new HttpException('This typeId is not exist', HttpStatus.BAD_REQUEST)

    return this.productRepository.create(data)
  }

  @Get()
  async findList(@Query('offset') offset: number, @Query('limit') limit: number) {
    return this.productService.prepareList(offset, limit)
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    // TODO calc views
    return this.productRepository.getOneOrFail(id)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: CreateAndUpdateProductDto) {
    return this.productRepository.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productRepository.deleteOrFail(id)
  }
}
