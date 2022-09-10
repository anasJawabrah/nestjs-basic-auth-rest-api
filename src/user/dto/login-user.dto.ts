import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginUserDto {
  @ApiProperty({
    description: 'E-Mail',
  })
  @IsNotEmpty()
  @IsString()
  email: string

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  @IsString()
  password: string
}
