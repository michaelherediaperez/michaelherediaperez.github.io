// Changes on every build. Appended to the stylesheet URL so browsers
// fetch the new CSS right after a deploy instead of using a cached copy.
module.exports = Date.now().toString(36);
