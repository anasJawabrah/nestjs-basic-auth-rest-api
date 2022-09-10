import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty,IsNumber, IsString } from 'class-validator'

export class QuestionDto {

  @ApiProperty({
    description: 'Question',
  })
  @IsNotEmpty()
  @IsString()
  question: string

  @ApiProperty({
    description: 'Answers',
  })
  @IsString({each: true})
  answers:Array<string>

  @ApiProperty({
    description: 'CorrectIndex',
  })
  @IsNumber()
  correctIndex: number


  @ApiProperty({
    description: 'Subject',
  })
  @IsNotEmpty()
  @IsString()
  subject: string

}
