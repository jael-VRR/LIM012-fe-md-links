  
const {statsForCli, statsAndValidate} = require('../src/options.js');

const inputStats =
[
  {
    href: 'https://nodejs.org/es/about/',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
  
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',

  },
  
]

const inputStatsValidate =
[
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\prueba1.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\prueba1.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\prueba1.md',
    status: 200,
    statustext: 'ok'
  },
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
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\prueba2.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\prueba2.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\prueba2.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 200,
    statustext: 'ok'
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 404,
    statustext: 'fail'
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\pruebdir\\prueba3.md',
    status: 404,
    statustext: 'fail'
  }
]

const statsExit = `
  Total  :  3
  Unique :  3
  `;

  const statsValidateExit= `
  Total :  18
  Unique:  10
  Broken:  3
  `;




describe('stasForCli', () => {
    it('debe retornar una función', () => {
      expect(typeof statsForCli).toBe('function');
    });
    it('deberia retornar el total de links únicos', () => {
       return expect(statsForCli(inputStats)).toEqual(statsExit)
    });
})

describe('stastsAndValidate', () => {
  it('debe retornar una función', () => {
    expect(typeof statsAndValidate).toBe('function');
  });
  
  it('deberia retornar el total de links únicos y rotos', () => {
    return  expect(statsAndValidate(inputStatsValidate)).toEqual(statsValidateExit)
  });
})