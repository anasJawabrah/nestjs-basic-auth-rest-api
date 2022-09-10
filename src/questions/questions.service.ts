import { Injectable, NotFoundException } from '@nestjs/common';
import { IQuestion } from './interfaces/question.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question,QuestionDocument } from './schemas/question.schemas'
import {QuestionDto} from './dto/add-question.dto'



@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<QuestionDocument>,
    
  ) {}

  async insertQuestion(question:QuestionDto) {
    // const prodId = Math.random().toString();
    const newQuestion = new this.questionModel({
      question:question.question,
      answers:[...question.answers],
      subject:question.subject,
      correctIndex:question.correctIndex
    });
    const result = await newQuestion.save();
    return result;
  }

  async getQuestions() {
    const questions = await this.questionModel.find().exec();
    return questions;
  }
  async getAllSubjects() {
    const subjects = await this.questionModel.find()
    .distinct("subject")
    .exec();
    return subjects;
  }

  async getQuestionsBySubject(subject: string) {
    const question = await this.questionModel.find({subject});
    return question;
  }

  // async updateProduct(
  //   productId: string,
  //   title: string,
  //   desc: string,
  //   price: number,
  // ) {
  //   const updatedProduct = await this.findProduct(productId);
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.description = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   updatedProduct.save();
  // }

  // async deleteProduct(prodId: string) {
  //   const result = await this.productModel.deleteOne({ _id: prodId }).exec();
  //   if (result.n === 0) {
  //     throw new NotFoundException('Could not find product');
  //   }
  // }

  // private async findProduct(id: string): Promise<Product> {
  //   let product;
  //   try {
  //     product = await this.productModel.findById(id).exec();
  //   } catch (error) {
  //     throw new NotFoundException('Could not find product');
  //   }

  //   if (!product) {
  //     throw new NotFoundException('Could not find product');
  //   }
  //   return product;
  // }
}
