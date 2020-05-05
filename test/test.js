const mdLinks = require( '../src/mdLinks.js' ) ;

describe('pruebas unitarias para libreria mdlinks', () => {
  it('deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('deberia retornar un objeto de mdLinks con carpeta absoluta ', () => {
    mdLinks('/home/yudith/Documentos/Programacion/Proyectos/md-links/test/paraProbar', { validate: true })
      .then((link) => expect(typeof link).toBe('object'));
  });

  it('Prueba con carpeta relativa paraProbar y validate: false', () => {
    mdLinks('/home/yudith/Documentos/Programacion/Proyectos/md-links/test/paraProbar', { validate: false })
      .then((link) => expect(link).toEqual([
        {
          text: 'Wikipedia',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          file: '../README.md',
        },
        {
          text: 'Node.js',
          href: 'https://nodejs.org/',
          file: '../README.md',
        },
        {
          text: 'Github Yud',
          href: 'https://github.com/yud.cumba/md-links',
          file: '../README.md',
        },
        {
          text: 'JW',
          href: 'https://www.jw.org',
          file: '../README2.md',
        },
        {
          text: 'JW',
          href: 'https://www.jw.org',
          file: '../README2.md',
        },
        {
          text: 'Hola',
          href: 'https://hola.xp',
          file: '../README3.md',
        },
      ]));
  });

  it('Prueba con carpeta paraProbar y validate: true', () => {
    mdLinks('/home/yudith/Documentos/Programacion/Proyectos/md-links/test/paraProbar', { validate: true })
      .then((link) => expect(link).toStrictEqual([
        {
          text: 'Wikipedia',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          file: '../README.md',
          status: 200,
          status_text: 'ok',
        },
        {
          text: 'Node.js',
          href: 'https://nodejs.org/',
          file: '../README.md',
          status: 200,
          status_text: 'ok',
        },
        {
          text: 'Github Yud',
          href: 'https://github.com/yud.cumba/md-links',
          file: '../README.md',
          status: 404,
          status_text: 'fail',
        },
        {
          text: 'JW',
          href: 'https://www.jw.org',
          file: '../README2.md',
          status: 200,
          status_text: 'ok',
        },
        {
          text: 'JW',
          href: 'https://www.jw.org',
          file: '../README2.md',
          status: 200,
          status_text: 'ok',
        },
        {
          text: 'Hola',
          href: 'https://hola.xp',
          file: '../README3.md',
          status: '',
          status_text: 'Not found',
        },
      ]));
  });
});