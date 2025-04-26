import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class AssetsService {
  private supabase;

  constructor(private supabaseService: SupabaseService) {
    this.supabase = this.supabaseService.getClient();
  }

  async findAll() {
    const { data, error } = await this.supabase.from('assets').select('*');
    if (error) throw error;
    return data;
  }

  async findOne(id: number) {
    const { data, error } = await this.supabase
      .from('assets')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(asset: any) {
    const { data, error } = await this.supabase
      .from('assets')
      .insert([asset])
      .select('*')
      .single();
    if (error) throw error;
    return data;
  }

  async update(id: number, asset: any) {
    const { data, error } = await this.supabase
      .from('assets')
      .update(asset)
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw error;
    return data;
  }

  async remove(id: number) {
    const { error } = await this.supabase.from('assets').delete().eq('id', id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}
