const fs = require("fs");

function fileContainsPattern(filePath, pattern) {
  let foundMatch = false;
  const fileContents = fs.readFileSync(filePath).toString();
  if (fileContents) {
    const regex = new RegExp(pattern);
    foundMatch = fileContents.search(regex) !== -1;
  }
  return foundMatch;
}

function fileContainsClass(filePath, className) {
  return fileContainsPattern(
    filePath,
    `class ${className}\\s*(extends\\s+[A-Za-z]+)?\\s*\\{`
  );
}

function fileContainsFunction(filePath, functionName) {
  return fileContainsPattern(filePath, `function ${functionName}\\s*\\(`);
}

module.exports = {
  fileContainsClass,
  fileContainsFunction,
};
