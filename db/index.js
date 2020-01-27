// Setup
const mongoose = require('mongoose');
const modelUtility = require('./modelUtility.js');

// Connect to database
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
        displayName: String,
        profileURL: String,
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

// Compile and export the model from the schema
const commentModel = mongoose.model('commentdocuments', commentSchema);
module.exports = commentModel;

// Seed the database
modelUtility.seedScript(commentModel);