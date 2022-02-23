import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/tcenter?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
})
    .then(res => console.log('connected'))
    .catch(err => console.log(err.reason))

/* const client = new MongoClient(connectionString, {
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

export default dbo */