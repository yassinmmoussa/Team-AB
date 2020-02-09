const scheduler = require("./course_scheduler");
const database = require("./database");

module.exports = function() {
    scheduler(2020, "W", data => console.log(data));
}