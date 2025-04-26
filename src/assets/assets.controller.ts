import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.assetsService.findOne(id);
  }

  @Post()
  async create(@Body() asset: any) {
    return this.assetsService.create(asset);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() asset: any) {
    return this.assetsService.update(id, asset);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.assetsService.remove(id);
  }
}
