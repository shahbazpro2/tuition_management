import { MongoClient } from 'mongodb'
const connectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

const dbo = {
    connectToServer: (callback) => {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }
            dbConnection = db.db("tcenter");
            console.log("Successfully connected to MongoDB.");
            return callback();
        });
    },

    getDb: () => {
        return dbConnection;
    },
};

export default dbo