const commentModel = require('./index.js');

commentModel.create({
  songId: 1,
  comments: [
    {
      userData: {
        username: 'destiny123',
        displayName: 'Destiny',
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 194824,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 104,
      },
      commentBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      userData: {
        username: 'vtsu3',
        displayName: 'vtsu3',
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 40,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 42,
      },
      commentBody: 'hmmm not too sure about this song mate, sounds kinda whack tbh.',
    },
    {
      userData: {
        username: 'hongkongbboy',
        displayName: 'Kinny Boy 149',
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 9914,
      },
      timeData: {
        postDate: '1/24/20',
        timestamp: 1,
      },
      commentBody: 'ok bro, i fw dis cuh!! XDDDDDD XDDXDXXD XDXDXD',
    },
    {
      userData: {
        username: 'kang1099jt',
        displayName: 'Kang J Tan',
        profileURL: 'https://soundcloud.com/shibasan',
        profilePicture: 'https://i.redd.it/kqgh408o6tc41.jpg',
        followCount: 64,
      },
      timeData: {
        postDate: '1/14/20',
        timestamp: 120,
      },
      commentBody: 'sweet tunes brother, what shampoo do you use?',
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
        timestamp: 3,
      },
      commentBody: 'this song is trash bro, delete it rn >:[ ',
    },
  ],
});

console.log('The database has been populated.');