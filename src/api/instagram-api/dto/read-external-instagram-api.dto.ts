import { ApiProperty } from '@nestjs/swagger';

export class ReadExternalInstagramAPIDto {
  @ApiProperty({ type: String })
  readonly id: string;

  @ApiProperty({ type: String })
  readonly media_type: string;

  @ApiProperty({ type: String })
  readonly media_url: string;

  @ApiProperty({ type: String })
  readonly permalink: string;
}
