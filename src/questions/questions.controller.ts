import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,

} from '@nestjs/common';
import { IQuestion } from './interfaces/question.interface'

import {
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger'
import { DefaultException } from '../common/classes/default-exception.class'
import { QuestionDto } from './dto/add-question.dto'
import { QuestionsService } from './questions.service';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'

@ApiTags('Questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @ApiOperation({
    summary: 'Add Question',
  })
  @ApiCreatedResponse({ type: QuestionDto })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: QuestionDto })
  @ApiBadRequestResponse({ type: DefaultException })
  @Post()
  async addQuestion(
    @Body() addQuestionDto: QuestionDto
  ) {
    const generatedQuestion = await this.questionsService.insertQuestion({
        question: addQuestionDto.question,
        answers: addQuestionDto.answers,
        correctIndex: addQuestionDto.correctIndex,
        subject: addQuestionDto.subject,
      });
    return generatedQuestion;
  }



@ApiOperation({
    summary: 'All Questions',
  })
  @Get()
  async getAllQuestions() {
    const products = await this.questionsService.getQuestions();
    return products;
  }

@ApiOperation({
    summary: 'Subjects',
  })
@Get('subjects')
  async getAllQuestionsSubjects() {
    const subjects = await this.questionsService.getAllSubjects();
    return subjects;
  }


@ApiOperation({
    summary: 'Question By Subject',
  })
@Get('subject/:subject')
  async getQuestionsBySubject(@Param('subject') subject:string) {
    const questions = await this.questionsService.getQuestionsBySubject(subject);
    return questions;
}

}



