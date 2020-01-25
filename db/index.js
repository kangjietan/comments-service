// Setup
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/SoundClout',
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
        postDate: Date,
        timestamp: Number
      },
      commentBody: String
    }
  ],
});

// Compile the model from the schema
const commentModel = mongoose.model('commentModel', commentSchema);

commentModel.create({
  songId: 1,
  comments: [
    {
      userData: {
        username: 'vtsu3',
        profilePicture: 'testurl.com',
        followCount: 40
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 10
      },
      commentBody: 'hello my friend! this is an awesome song bro, keep up the bopping beats and the rickety rhymes!'
    }
  ],
})