class Command {

  constructor(key, description, action) {
    this.key = key;
    this.description = description;
    this.action = action;
  }

  execute() {
    this.action();
  }

}


module.exports = Command;
