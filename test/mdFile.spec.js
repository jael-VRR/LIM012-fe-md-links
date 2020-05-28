
const {
    existsPath,
    convertPathAbsolute,
    validateFilePath,
    isArchiveMd,
    searchPathFiles,
    readFilePath,
    addValidate,
    extraerLinks
 
} = require('../src/mdFile.js');

const  route  =  './test' ;
const  routeResult  = 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test';
const  xyzResult  =  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\.test' ;

const input  = [
    'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\hoja.txt',
    'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\prueba2.md',

  ]
const output = [
    'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data2\\prueba2.md',
  ]

  const contentReadFilePath = "Esto es una prueba";

  const contentExtraerLinks = [
    {
      href: 'https://nodejs.org/es/about/',
      text: 'Acerca de Node.js - Documentación oficial',
      file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html',
      text: 'Node.js file system - Documentación oficial',
      file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md'
    },
    {
      href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
      text: 'Node.js http.get - Documentación oficial',
      file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md'
    },
    {
      href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asíncronía en js',
      file: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md'
    }
  ]

const contentAddValidate =
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
  ]

describe('existspath', () => {
    it('deberia retornar una función', () => {
      expect(typeof existsPath).toBe('function');
    });

    it('retorna un booleano si la ruta existe', () => {
       expect(existsPath('C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\data\\try.md')).toBe(true);
    });

    it('should return false for invalid path', () => {
        expect(existsPath('./documents/example/')).toBe(false);
    });
});

describe('converthPathToAbsolute', () => {
    it('deberia ser un función', () => {
      expect(typeof convertPathAbsolute).toBe('function');
    });
    it('deberia convertir una ruta relativa a absoluta', () => {
        expect(convertPathAbsolute(route)).toEqual(routeResult);
    });
  
    it('debe retornar ', () => {
        expect(convertPathAbsolute('.test')).toEqual(xyzResult);
    });
});

describe('validateFilePath', () => {
    it('deberia ser un función', () => {
      expect(typeof validateFilePath).toBe('function');
    });
    it('deberia retornar true si es un file', () => {
        expect(validateFilePath('./test/data/try.md')).toBe(true);
    });
  
    it('debe retornar false si no es un file', () => {
        expect(validateFilePath('./test')).toBe(false);
    });
});

describe('isArchiveMd', () => {
    it('deberia ser un función', () => {
      expect(typeof isArchiveMd).toBe('function');
    });
    it('deberia retornar la extension del achivo', () => {
        expect(isArchiveMd('./test/data/try.md')).toEqual(".md");
    });
  
    it('debe retornar vacio si no hay extension', () => {
        expect(isArchiveMd('./test')).toEqual("");
    });
});

describe('searchPathFiles ', () => {
    it('deberia ser un función', () => {
      expect(typeof searchPathFiles ).toBe('function');
    });
    it('debe retornar todos los archivos con extensión md', () => {
        expect(searchPathFiles (input)).toEqual(output);
    });
  
    
});

describe('readFilePath', () => {
    it('deberia ser un función', () => {
      expect(typeof readFilePath ).toBe('function');
    });
    it('debe retornar contenido de archivo', () => {
        expect(readFilePath('./test/data2/hoja.txt')).toEqual(contentReadFilePath);
    });
  
});


describe('extraerLinks', () => {
    it('deberia ser un función', () => {
      expect(typeof extraerLinks ).toBe('function');
    });
    it('debe retornar contenido de archivo', () => {
        expect(extraerLinks('./test/data/try.md')).toEqual(contentExtraerLinks);
    });
    it('debe retornar contenido de archivo', () => {
        expect(extraerLinks('./tes/data2/hoja.txt')).toThrow('Invalid path');
    });
});


describe ('addValidate', () => {
    it ('debería ser una función', () => {
      
      expect (typeof addValidate) .toBe ('function');
    });
    test ('devuelve una matriz con cinco propiedades para cada enlace', () => {
      return expect(addValidate ('./test/data/try.md')). resolves.toEqual(contentAddValidate);
    });
    test ('devuelve una matriz vacía para un archivo sin enlaces', () => {
      return expect(addValidate ('./test/data/try1.md')). resolves.toEqual([]);
    });
  });