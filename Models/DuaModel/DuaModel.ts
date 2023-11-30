import { Schema, Document } from "mongoose";
import connection from '../../DataBase/dbconnection'


interface DuaDocument extends Document {
    dua: string;
    magfirat: string;
  }

  const duaSchema: Schema = new Schema({
    dua: {
        type:String,
        require:true

    },
    magfirat: {
        type:String,
        require:true
    }
  });

  const Dua = connection.model<DuaDocument>('Dua', duaSchema);

export default Dua;