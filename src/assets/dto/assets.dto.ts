import { IsString, IsOptional, IsUUID, IsNumber, IsDate } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsDate()
  purchase_date: Date;

  @IsDate()
  warranty_end: Date;

  @IsNumber()
  price: number;

  @IsString()
  notes: string;

  @IsString()
  @IsOptional()
  image_urls?: string[];

  @IsUUID()
  user_id: string; // User who owns the asset
}

export class UpdateAssetDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsDate()
  @IsOptional()
  purchase_date?: Date;

  @IsDate()
  @IsOptional()
  warranty_end?: Date;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsOptional()
  image_urls?: string[];
}
