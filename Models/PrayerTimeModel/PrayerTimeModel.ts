import { Schema} from "mongoose";
import connection from '../../DataBase/dbconnection'

const prayertimeSchema: Schema = new Schema({
    time: {
        type: String,   
        require: true
    },
    name: {
        type: String,
        require: true,
        enum: ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Magrib', 'Isha'],
    },


});

const PrayerTime = connection.model('PrayerTime', prayertimeSchema);

export default PrayerTime;