
import { Schema } from "mongoose";
import connection from '../../DataBase/dbconnection'

const imagegallerySchema: Schema = new Schema({
    about: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
});

const ImageGallery = connection.model('ImageGallery', imagegallerySchema);

export default ImageGallery;