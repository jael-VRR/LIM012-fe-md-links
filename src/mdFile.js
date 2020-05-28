const path = require('path');
const fs =require('fs');
const marked = require('marked');
const fetch = require('node-fetch');




const existsPath = (ruta) => (fs.existsSync(ruta));  //la ruta existe ? devuelve booleano (true-false)

const absolutePath =(ruta) => (path.isAbsolute(ruta));

const validateFilePath = ((ruta) => fs.statSync(ruta).isFile());  //crea un objeto que tiene el método statsObj.isFile());retorna un booleano


const isArchiveMd = (ruta) => (path.extname(ruta)); //extrae la extensión del archivo html,md,txt.



//convertir ruta relativa a absoluta
const convertPathAbsolute = ((ruta) => {
    if(!absolutePath(ruta)) {
      const newAbsolute = path.resolve(ruta);
      return newAbsolute;
    }
    return ruta;
  });
 


  const searchPathFiles = ((ruta) => {                // función que extrae archivos con extención md
    let archivosMd = [];                              // array que almacena archivos que coincidan con la extención md
    const filePath = convertPathAbsolute(ruta);       //constante que almacena la ruta absoluta(convertida de relativa a absoluta)
    if (validateFilePath(filePath)) {                 //pregunta si es un archivo     ./test/data/try.md retorna (true)                   
      if (isArchiveMd(filePath) === '.md') {          //extrae la  extención y la compara con .md      //y si contiene la extención md
        archivosMd.push(filePath);                    //si contiene la extención md se almacena en archivosmd
      }
    } else {                                                     // en el caso que no es un archivo sino un directorio
      const filesOfDirectory = fs.readdirSync(filePath);         //constante que devuelve contenido de test:[ '.eslintrc.js', 'data', 'data2', 'pruebdir', 'test.js' ]
                                                                //folder data:[ 'prueba1.md', 'try.md' ] data2:[ 'hoja.txt', 'prueba2.md' ] pruebdir:[ 'hoja1.txt', 'prueba3.md' ]
      for (let i = 0; i < filesOfDirectory.length; i += 1) {     //recorre cada elemento de los directorios 
        const newFileOfDirectory = searchPathFiles(path.join(filePath, filesOfDirectory[i])); //ruta +nombre de folder +nombre de archivo
                                                               //'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\prueba1.md'                                         
        archivosMd = archivosMd.concat(newFileOfDirectory);                                   //devuelve todos los archivos con extención .md
    
      }
    }
    return archivosMd;
  });
  
 
const readFilePath = (ruta) => {
  return fs.readFileSync(ruta).toString();
};


const extraerLinks = (ruta) => {
  if (!existsPath(ruta)) {
    throw new Error('Invalid path');
  } else {
      const newRouteAbsolute = convertPathAbsolute(ruta);
      let arrLinks = [];
      const renderer = new marked.Renderer();
      searchPathFiles(newRouteAbsolute).forEach((file) => {
        renderer.link = (href, title, text) => {
          const propLink = {
            href,
            text,
            file
          };
          arrLinks.push(propLink);
        };
        marked(readFilePath(file), { renderer });
      });
      return arrLinks; 
    }
  }  
;


  const addValidate = (ruta) => {
    const prueba =extraerLinks(ruta);
    const arrayPromise = prueba.map((e) => new Promise((resolve) => fetch(e.href)
      .then((resp) => {
        e.status = resp.status;
        (resp.status >= 200 && resp.status < 400) ? e.statustext = 'ok' : e.statustext = 'fail';
        resolve(e);
      })
      .catch(() => {
        e.status = 404;
        e.statustext = 'fail';
        resolve(e);
      })));
    return Promise.all(arrayPromise);
  };
  
  
  //addValidate('./test/data/try.md').then(resp => console.log(resp));


  






const pathOptions = {
   
   
    isArchiveMd,
    existsPath,
    convertPathAbsolute,
    validateFilePath,
    extraerLinks,
    searchPathFiles,
    readFilePath,
    addValidate

  
}
module.exports=pathOptions
    