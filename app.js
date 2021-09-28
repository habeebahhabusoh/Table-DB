const defineAbilityFor = require('./defineAbility.js');
const Article = require('./entities.js');

const moderator = { id: 2, isModerator: true };
const ownArticle = new Article({ authorId: moderator.id });
const foreignArticle = new Article({ authorId: 10 });
const ability = defineAbilityFor(moderator);

ability.can('read', 'Article') // true
ability.can('update', 'Article', 'published') // true
ability.can('update', ownArticle, 'published') // true
ability.can('update', foreignArticle, 'title') // false

console.log(ability.can('update', foreignArticle, 'title'))
console.log(ability.can('update', ownArticle, 'description'))
console.log(ability.can('update', ownArticle, 'published'))