const commentModel = require('./index.js');
var faker = require('faker');

class CommentGen {
  constructor() {
    this.data = {
      userData: {
        username: faker.internet.userName(),
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/richarddjames',
        profilePicture: faker.image.avatar(),
        followCount: faker.random.number(),
      },
      timeData: {
        postDate: `${this.monthGen()}/${this.dateGen()}/${this.yearGen()}`,
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences()
    };
  }

  dateGen () {
    let max = 30;
    return Math.floor(Math.random() * Math.floor(max));
  }

  monthGen () {
    let max = 13;
    return Math.floor(Math.random() * Math.floor(max));
  }

  yearGen () {
    return faker.random.number( {min: 2018, max: 2020} );
  }
}

let output = (z) => {
  let res = [];

  for (let i = 0; i < z; i++) {
    let temp = new CommentGen();
    res.push(temp.data);
  }

  return res;
};

commentModel.create({
  songId: 1,
  comments: output(35)
});

console.log('The database has been populated.');