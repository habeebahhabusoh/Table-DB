class Entity {
  constructor(attrs) {
    Object.assign(this, attrs);
  }
}

module.exports = class Article extends Entity {}