import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  
  @Prop({ required: true })
  question: string;

  @Prop({ required: true  })
  answers: Array<string>;

  @Prop({ required: true  })
  correctIndex: number;

  @Prop({ required: true })
  subject: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);