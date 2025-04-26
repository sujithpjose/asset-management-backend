import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_ANON_KEY');
    if (!url || !key) {
      throw new Error('SUPABASE config is missing!');
    }

    this.supabase = createClient(url!, key!);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
