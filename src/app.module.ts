import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsModule } from './assets/assets.module';
import { Asset } from './assets/assets.entity';
import { SupabaseService } from './supabase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true , envFilePath: '.env' }), AssetsModule], // Enables environment variables
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class AppModule {}
