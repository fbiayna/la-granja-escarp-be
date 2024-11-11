import { IsString, IsOptional } from 'class-validator';

export class ReadInstagramAPIDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  mediaType?: string;

  @IsOptional()
  @IsString()
  mediaURL?: string;

  @IsOptional()
  @IsString()
  permalink?: string;
}
