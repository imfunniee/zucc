const zucc = require('say');
var express = require('express');
var app = express();
var port = process.env.port || process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

zucc.speak(`zucc is serving on port ${port}!!`, 1.34, (err) => {
  if (err) { return console.error(err); }
});

app.get('/', function(req, res) {
res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log(`zucc is serving on port ${port}!`));