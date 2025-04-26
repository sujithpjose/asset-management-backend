import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../supabase.service';
import { CreateAssetEventDto } from '../dto/asset_event.dto';

@Injectable()
export class AssetEventsService {
  constructor(private supabaseService: SupabaseService) {}

  async createAssetEvent(createAssetEventDto: CreateAssetEventDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('asset_events')
      .insert([createAssetEventDto]);

    if (error) throw new Error(error.message);
    return data;
  }

  async getEventsByAsset(assetId: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('asset_events')
      .select('*')
      .eq('asset_id', assetId);

    if (error) throw new Error(error.message);
    return data;
  }
}
