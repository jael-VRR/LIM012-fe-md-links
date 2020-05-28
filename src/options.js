const {

  addValidate,
  extraerLinks  

} = require('./mdFile.js');



// --stats
const statsForCli = (links)  => {
 //const links = extraerLinks(links);
  const uniqueLinks = new Set(links.filter((element) => element.href));
  return(`
  Total :  ${links.length} 
  Unique:  ${uniqueLinks.size} `);
};

 //console.log(statsForCli('./test'));

//opción 2  (combinado) --stats y --validate
const statsAndValidate = (ruta) => {
return addValidate(ruta).then(links =>{
  const uniqueLinks = new Set(links.map((e) => e.href));
  //console.log(uniqueLinks);
  const brokenLinks = links.filter((e) => e.statustext === 'fail');
  return(`
   Total : ${links.length} 
   Unique: ${uniqueLinks.size}  
   Broken: ${brokenLinks.length}`);
});
    };


//statsAndValidate('./test').then(resp => console.log(resp));



module.exports = {
  statsForCli,
  statsAndValidate
};
  