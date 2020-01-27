// Setup
const commentModel = require('./index.js');

// Export query functions
module.exports = {
  getAllComments: (callback) => {
    commentModel.find({}, { 'comments': 1 }, (err, docs) => {
      callback(docs)
    });
  }
};