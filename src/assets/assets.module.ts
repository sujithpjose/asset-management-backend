import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { Asset } from './assets.entity';
import { SupabaseService } from 'src/supabase.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AssetsController],
  providers: [AssetsService, SupabaseService],
})
export class AssetsModule {}
