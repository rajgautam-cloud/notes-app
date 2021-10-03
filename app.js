const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// create add command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
    },
  },
  handler: function (argv) {
    console.log("Adding a new note!", argv);
  },
});
//create remove command
yargs.command({
  command: "remove",
  description: "Remove an existing note",
  handler: function () {
    console.log("Removing note");
  },
});
//create list command
yargs.command({
  command: "list",
  description: "Listing the notes",
  handler: function () {
    console.log("Listing note");
  },
});
//create read command
yargs.command({
  command: "read",
  description: "read an existing note",
  handler: function () {
    console.log("reading note");
  },
});
console.log(yargs.argv);
