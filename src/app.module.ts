import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {ProductModule} from './domain/product/product.module'
import {AuthModule} from './auth/auth.module'
import {UserModule} from './domain/user/user.module'

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ProductModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
