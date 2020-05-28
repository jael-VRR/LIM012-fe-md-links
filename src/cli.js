#!/usr/bin/env node
const mdLinks = require('./mdLinks');
const colors = require('colors')
const{statsForCli,statsAndValidate} = require('./options.js')






const arg =process.argv.slice(2)


  if(arg.length === 1){
      mdLinks(arg[0]).then(resp => console.log(resp))
  }
  
  if(arg.length === 2){
    if(arg[1] === '--validate'){
     mdLinks(arg[0],{validate:true}).then(resp => console.log(resp))
  }else if(arg[1] === '--stats'){
      mdLinks(arg[0],{validate:true}).then(resp => console.log(colors.bgMagenta(statsForCli(resp))))

    }
  }
    if(arg.length === 3){
      if(arg[1] === '--validate' && arg[2] === '--stats' ){
       statsAndValidate(arg[0]).then(resp => console.log(colors.rainbow(resp)))
      }
    }

