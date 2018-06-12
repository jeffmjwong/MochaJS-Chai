const https = require('https');

module.exports = {
  printName(person) {
    return `${person.last}, ${person.first}`;
  },

  loadWiki(person, callback) {
    const url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
    https.get(url, response => {
      
      let body = '';

      response.setEncoding('UTF-8');

      response.on('data', chunk => {
        body += chunk;
      });

      response.on('end', error => {
        if (error) throw error;
        callback(body);
      });

    });
  }
}
