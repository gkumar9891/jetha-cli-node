#! /usr/bin/env node

const { program } = require('commander')
const {CLI_NAME} = require('../constant')
const fs = require('fs');

program
    .name(CLI_NAME)

program
    .command('list-kardo')
    .description('List files and directories in the current folder')
    .action(() => {
        const currentDirectory = process.cwd()
        console.log("Bhai, yeh le list, jalebi bhej dena par yaad se\n")

        fs.readdir(currentDirectory, (err, files) => {
            if (err) {
              console.error('Error reading directory:', err);
              return;
            }
            
            console.log(files.join("\n"));
        });
    })

program.parse()