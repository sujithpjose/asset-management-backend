import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AssetEventsService } from '../services/asset_event.service';
import { CreateAssetEventDto } from '../dto/asset_event.dto';

@Controller('asset-events')
export class AssetEventsController {
  constructor(private readonly assetEventsService: AssetEventsService) {}

  @Post()
  async create(@Body() createAssetEventDto: CreateAssetEventDto) {
    return this.assetEventsService.createAssetEvent(createAssetEventDto);
  }

  @Get(':assetId')
  async getEventsByAsset(@Param('assetId') assetId: string) {
    return this.assetEventsService.getEventsByAsset(assetId);
  }
}
