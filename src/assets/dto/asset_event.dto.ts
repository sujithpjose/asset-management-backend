import { IsString, IsDate, IsUUID } from 'class-validator';

export class CreateAssetEventDto {
  @IsUUID()
  asset_id: string;

  @IsString()
  event_type: string; // e.g., "warranty_expiry", "service_due", etc.

  @IsDate()
  event_date: Date;

  @IsString()
  description: string;
}
