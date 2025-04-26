import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AssetImagesService } from '../services/asset_image.service';
import { CreateAssetImageDto } from '../dto/asset_image.dto';

@Controller('asset-images')
export class AssetImagesController {
  constructor(private readonly assetImagesService: AssetImagesService) {}

  @Post()
  async create(@Body() createAssetImageDto: CreateAssetImageDto) {
    return this.assetImagesService.createAssetImage(createAssetImageDto);
  }

  @Get(':assetId')
  async getImagesByAsset(@Param('assetId') assetId: string) {
    return this.assetImagesService.getImagesByAsset(assetId);
  }
}
