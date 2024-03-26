import mongoose, { model, Schema, Model, Document } from 'mongoose';
import UserInterface from '../types/user.type';

const userSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const UserModel: Model<UserInterface & Document> = model<UserInterface & Document>('User', userSchema);

export default UserModel;
