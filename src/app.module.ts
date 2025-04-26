import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { SupabaseService } from './supabase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true , envFilePath: '.env' }), AssetsModule], // Enables environment variables
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class AppModule {}
