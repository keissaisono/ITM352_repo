let express = require('express');
let app = express();

// part 2a
app.get('/test', function (req, res) {
    res.send("<h2> you have reached the test page - Thanks</h2>");
    next();
});
app.use(express.static(__dirname + '/public'));
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback