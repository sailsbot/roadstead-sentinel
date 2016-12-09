module.exports = function roadsteadSentinelIsNotReallySomethingYouCall(){
  throw new Error('This package doesn\'t really do anything when you call it, per se.  It\'s purpose has more to do with testing its dependencies-- just to be sure they\'re secure, up to date, and to catch anything ugly/scary/weird being displayed when they get installed.');
};
