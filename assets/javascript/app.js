
var sportsdata_nba = require('sportsdata').NBA;
 
// Init the object with the access level, version, apikey, year, and season you care about
sportsdata_nba.init('t', 1, apikey, '2012', 'REG');
 
// Get the season schedule
sportsdata_nfl.getSeasonSchedule(function(error, schedule) {
 if (!error) {
    console.log(schedule) // Print the season schedule for the NFL season
  }
});