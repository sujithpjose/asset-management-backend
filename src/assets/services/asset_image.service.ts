import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../supabase.service';
import { CreateAssetImageDto } from '../dto/asset_image.dto';

@Injectable()
export class AssetImagesService {
  constructor(private supabaseService: SupabaseService) {}

  async createAssetImage(createAssetImageDto: CreateAssetImageDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('asset_images')
      .insert([createAssetImageDto]);

    if (error) throw new Error(error.message);
    return data;
  }

  async getImagesByAsset(assetId: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('asset_images')
      .select('*')
      .eq('asset_id', assetId);

    if (error) throw new Error(error.message);
    return data;
  }
}
