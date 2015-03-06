var path = require("path");
var home = process.env[(process.platform === "win32") ? "USERPROFILE" : "HOME"];
var mac = "/Library/Application Support/Google/Chrome/Default/Extensions";

module.exports = function () {
  if (process.platform === "win32") {
    console.error("unsupported OS");
    return;
  }
  return path.join(home, mac);
};
