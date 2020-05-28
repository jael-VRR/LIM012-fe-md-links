const mdLinks = require('../src/mdLinks.js');
const nock = require('nock');


describe('mdLinks', () => {
  it('deberia retornar un objeto responsive', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('retorna un array con 5 propiedades en caso validate sea verdadero', () => {
        mdLinks ('C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',{validate:true}).then((response)=>{
       expect(response).toEqual(
         [
          {
            href: 'https://nodejs.org/es/about/',
            text: 'Acerca de Node.js - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
            status: 200,
            statustext: 'ok'
          },
          {
            href: 'https://nodejs.org/api/fs.html',
            text: 'Node.js file system - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
            status: 200,
            statustext: 'ok'
          },
          {
            href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
            text: 'Node.js http.get - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
            status: 200,
            statustext: 'ok'
          },
          {
            href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
            text: 'Asíncronía en js',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
            status: 404,
            statustext: 'fail'
          }
          
        ]);
      }
    ) 
  })
})   


describe('mdLinks', () => {
  it('deberia retornar un objeto responsive', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('retorna un mensaje de alerta puesto que no hay una ruta', () => {
        mdLinks ('C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',{validate:false}).then((response)=>{
       expect(response).toEqual(
         [
          {
            href: 'https://nodejs.org/es/about/',
            text: 'Acerca de Node.js - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
          
          },
          {
            href: 'https://nodejs.org/api/fs.html',
            text: 'Node.js file system - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
         
          },
          {
            href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
            text: 'Node.js http.get - Documentación oficial',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
       
          },
          {
            href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
            text: 'Asíncronía en js',
            file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md',
         
          }
          
        ]);
      }
    ) 
  })
})   

describe('mdLinks', () => {
  it('deberia retornar un objeto responsive', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('retorna un mensaje de error', () => {
        mdLinks ('tryyyy').then((response)=>{
       expect(response).toEqual('no es una ruta valida');
  });
});
})


