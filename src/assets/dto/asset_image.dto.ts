import { IsString, IsUUID } from 'class-validator';

export class CreateAssetImageDto {
  @IsUUID()
  asset_id: string;

  @IsString()
  image_url: string;
}
