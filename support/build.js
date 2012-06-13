var folio = require('folio')
  , path = require('path')
  , fs = require('fs');


var Super = new folio.Glossary([
    path.join(__dirname, '..', 'lib', 'super.js')
  ], {
    prefix: fs.readFileSync(path.join(__dirname, 'browser', 'prefix.js'), 'utf8'),
    suffix: fs.readFileSync(path.join(__dirname, 'browser', 'suffix.js'), 'utf8')
  });

Super.compile(function (err, source) {
  var copyright = fs.readFileSync(path.join(__dirname, 'browser', 'copyright.js'));
  fs.writeFileSync(path.join(__dirname, '..', 'super.js'), copyright + '\n' + source);
  console.log('Build successful: ' + '\tsuper.js');
});

var super_min = new folio.Glossary([
    path.join(__dirname, '..', 'lib', 'super.js')
  ], {
    minify: true,
    prefix: fs.readFileSync(path.join(__dirname, 'browser', 'prefix.js'), 'utf8'),
    suffix: fs.readFileSync(path.join(__dirname, 'browser', 'suffix.js'), 'utf8')
  });

super_min.compile(function (err, source) {
  var copyright = fs.readFileSync(path.join(__dirname, 'browser', 'copyright.js'));
  fs.writeFileSync(path.join(__dirname, '..', 'super.min.js'), copyright + '\n' + source);
  console.log('Build successful: ' + '\tsuper.min.js');
});
