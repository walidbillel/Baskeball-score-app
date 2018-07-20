
var nba = require('nba.js').stats;

nba.teamGeneralStats(function(err, res) {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log(res);
  });