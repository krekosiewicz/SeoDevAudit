import { Document } from 'mongoose';

export interface ToolConfigType {
  id?: number;
  title: string;
  description: string;
}

export type ToolConfigDocument = ToolConfigType & Document;

export class ConfigDto {
  readonly title: string;
  readonly description: string;
}
