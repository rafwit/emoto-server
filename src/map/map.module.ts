import { HttpModule, Module } from '@nestjs/common';
import { FluctuoService } from 'src/apiServices/fluctuo/fluctuo.service';
import { UserModule } from 'src/user/user.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports: [UserModule, HttpModule],
  controllers: [MapController],
  providers: [MapService, FluctuoService],
})
export class MapModule {}