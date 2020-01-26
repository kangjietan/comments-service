// Setup
const mongoose = require('mongoose');
const modelUtility = require('./modelUtility.js');
mongoose.connect(
  'mongodb://localhost:27017/soundclone',
  {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }
);

// Create schema
var commentSchema = mongoose.Schema({
  songId: Number,
  comments: [
    {
      userData: {
        username: String,
        profilePicture: String,
        followCount: Number
      },
      timeData: {
        postDate: String,
        timestamp: Number
      },
      commentBody: String
    }
  ],
});

// Compile the model from the schema
const commentModel = mongoose.model('commentdocuments', commentSchema);

// Seed the database
modelUtility.seedScript(commentModel);