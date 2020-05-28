const path = require('path');

const fs = require('fs');

const {

    existsPath,
    convertPathAbsolute,
    addValidate,
    extraerLinks
    
 
} = require('./mdFile.js');



const mdLinks = (path,options) => new Promise((resolve,reject) => {     

	if(existsPath(path)) {                                  
   const arrayOfLinks = convertPathAbsolute(path);                
   if (options === undefined || options.validate === false) {           
    resolve(extraerLinks(arrayOfLinks));                                          
  	} else if (options.validate === true) {                              
    resolve (addValidate(arrayOfLinks))
    }  else {
    const error = new Error(`no es una ruta válida`);
  reject(error);
    }
};
});







module.exports = mdLinks
