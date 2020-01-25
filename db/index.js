// Setup
const mongoose = require('mongoose');
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

// Compile and export the model
const commentModel = mongoose.model('commentdocuments', commentSchema);
module.exports = commentModel;

// Seed database
commentModel.create({
  songId: 1,
  comments: [
    {
      userData: {
        username: 'destiny',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 194824
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 104
      },
      commentBody: 'this is an awesome song bro, keep up these bopping beats and those rickety rhymes!'
    },
    {
      userData: {
        username: 'vtsu3',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 40
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 42
      },
      commentBody: 'epic song mate'
    },
    {
      userData: {
        username: 'tarzaned',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 9914
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 1
      },
      commentBody: 'rank1 s6 btw'
    },
    {
      userData: {
        username: 'kang1099jt',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 64
      },
      timeData: {
        postDate: '1/14/20',
        timestamp: 120
      },
      commentBody: 'sweet tunes brother, what shampoo do you use?'
    },
    {
      userData: {
        username: 'tyler1',
        profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png',
        followCount: 9194205
      },
      timeData: {
        postDate: '1/23/20',
        timestamp: 3
      },
      commentBody: 'THAIYS IS A FUJKCOIRN TRSAH SONG HAHASFHUDAHAH'
    }
  ],
})