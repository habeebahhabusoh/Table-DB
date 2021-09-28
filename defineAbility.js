const { defineAbility } = require('@casl/ability');

module.exports = (user) => defineAbility((can) => {
  can('read', 'Article');
  can('update', 'Article', ['title', 'description'], { authorId: user.id })

  if (user.isModerator) {
    can('update', 'Article', ['published'])
  }
});

// export default (user) => defineAbility((can) => {
//   can('read', 'Article');
//   can('update', 'Article', ['title', 'description'], { authorId: user.id })

//   if (user.isModerator) {
//     can('update', 'Article', ['published'])
//   }
// });