function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for (var i = 0; i < musicians.length; i += 1) {
    results.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return results;
}
