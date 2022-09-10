import { Document } from 'mongoose'


export interface IQuestion extends Document {
  id: string;
  question: string;
  answers:  Array<string>;
  correctIndex:number;
  subject: string;
}
