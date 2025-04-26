import { Injectable } from '@nestjs/common';
import { CreateAssetDto, UpdateAssetDto } from '../dto/assets.dto';
import { SupabaseService } from '../../supabase.service';

@Injectable()
export class AssetsService {
  constructor(private supabaseService: SupabaseService) {}

  async createAsset(createAssetDto: CreateAssetDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('assets')
      .insert([createAssetDto]);

    if (error) throw new Error(error.message);
    return data;
  }

  async updateAsset(id: string, updateAssetDto: UpdateAssetDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('assets')
      .update(updateAssetDto)
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }

  async getAssetsByUser(userId: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('assets')
      .select('*')
      .eq('user_id', userId);

    if (error) throw new Error(error.message);
    return data;
  }
}
