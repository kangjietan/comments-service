const commentModel = require('./index.js');
var faker = require('faker');

commentModel.create({
  songId: 1,
  comments: [
    {
      userData: {
        username: 'DESTINY55',
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: faker.image.avatar(),
        followCount: 194824,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences(),
    },
    {
      userData: {
        username: 'vtsu3',
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: faker.image.avatar(),
        followCount: 40,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences(),
    },
    {
      userData: {
        username: 'hongkongbboy',
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: faker.image.avatar(),
        followCount: 9914,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences(),
    },
    {
      userData: {
        username: 'kang1099jt',
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: faker.image.avatar(),
        followCount: 64,
      },
      timeData: {
        postDate: '1/14/20',
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences(),
    },
    {
      userData: {
        username: 'tyler1',
        displayName: 'Tyler Steinkamp One',
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png',
        followCount: 9194205,
      },
      timeData: {
        postDate: '1/23/20',
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences(),
    },
  ],
});

console.log('The database has been populated.');