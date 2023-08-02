import { ApiProperty } from '@nestjs/swagger';

export class CreateComputerDto {
  @ApiProperty({
    default: '10104000000',
  })
  inv: number;

  @ApiProperty({
    default: 3,
  })
  floor: number;

  @ApiProperty({
    default: 0,
  })
  type: number;

  @ApiProperty({
    default: 'Azuz Test Model X',
  })
  model: string;
}
