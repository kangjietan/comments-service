// Setup
const mongoose = require('mongoose');

// Connect to database
mongoose.connect(
  'mongodb://datbase/soundclone',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Create schema
const commentSchema = mongoose.Schema({
  songId: Number,
  comments: [
    {
      userData: {
        username: String,
        displayName: String,
        profileURL: String,
        profilePicture: String,
        followCount: Number,
      },
      timeData: {
        postDate: String,
        timestamp: Number,
      },
      commentBody: String,
    },
  ],
});

// Compile the model from the schema
const commentModel = mongoose.model('commentdocuments', commentSchema);

// Export model
module.exports = commentModel;