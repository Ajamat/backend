import { Schema, Document } from 'mongoose';
import connection from '../../DataBase/dbconnection'

// Interface representing the user document in MongoDB
interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role:string;
}

// Define the schema for the User collection
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default:"READER"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

// Create a Mongoose model for the User collection
const User = connection.model<UserDocument>('User', userSchema);

export default User;
