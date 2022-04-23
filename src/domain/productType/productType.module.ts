import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductTypeRepository} from './productType.repository'
import {ProductTypeService} from './productType.service'

@Module({
  imports: [TypeOrmModule.forFeature([ProductTypeRepository])],
  providers: [ProductTypeService],
  controllers: [],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
