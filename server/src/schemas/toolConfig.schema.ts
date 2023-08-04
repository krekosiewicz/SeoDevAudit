import { Schema } from 'mongoose';

export const ToolConfigSchema = new Schema({
  id: Number,
  title: String,
  description: String,
});
