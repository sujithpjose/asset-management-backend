import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AssetsService } from '../services/assets.service';
import { CreateAssetDto, UpdateAssetDto } from '../dto/assets.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.createAsset(createAssetDto);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssetDto: UpdateAssetDto,
  ) {
    return this.assetsService.updateAsset(id, updateAssetDto);
  }

  @Get(':userId')
  async getAssetsByUser(@Param('userId') userId: string) {
    return this.assetsService.getAssetsByUser(userId);
  }
}
