import { Module } from '@nestjs/common';
import { AssetsService } from './services/assets.service';
import { AssetEventsController } from './controller/assets_events.controller';
import { AssetImagesController } from './controller/assets_image.controller';
import { AssetEventsService } from './services/asset_event.service';
import { AssetImagesService } from './services/asset_image.service';
import { AssetsController } from './controller/assets.controller';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [AssetsController, AssetEventsController, AssetImagesController],
  providers: [
    SupabaseService,
    AssetsService,
    AssetEventsService,
    AssetImagesService,
  ],
})
export class AssetsModule {}
