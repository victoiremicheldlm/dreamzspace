const AbstractManager = require("./AbstractManager");

class DreamsManager extends AbstractManager {
  constructor() {
    super({ table: "dreams" });
  }

  create(dreams) {
    return this.connection.query(
      `insert into ${this.table} (date, mood, vibe, genre, story, user_name) VALUES (?,?,?,?,?,?)`,
      [
        dreams.date,
        dreams.mood,
        dreams.vibe,
        dreams.genre,
        dreams.story,
        dreams.user_name,
      ]
    );
  }

  deleteDreams(id) {
    return this.connection.query(
      `update ${this.table} set is_deleted = 1 where id = ?`,
      [id]
    );
  }
}

module.exports = DreamsManager;
