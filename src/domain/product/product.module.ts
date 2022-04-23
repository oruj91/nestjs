import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductRepository} from './product.repository'
import {ProductTypeModule} from '../productType/productType.module'
import {ProductService} from './product.service'
import {ProductController} from './product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository]), ProductTypeModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
