const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const queries = require('./queries');

app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/places', (req, res) => {
    queries.getAllPlaces((err, data) => {
        if (err) {
            console.log('There was an error getting all of the mufuggin place data');
        } else {
            console.log('Place data retirieved');
            res.send(data);
        }
    });
});

app.get('/places/:id', (req, res) => {
    var id = req.params.id;
    queries.getSinglePlace(id, (err, data) => {
        if (err) {
            console.log('Error getting a single place');
        } else {
            console.log('Data retirieved for: ' + data[0].name);
            res.send(data);
        }
    });
});

app.post('/places', (req, res) => {
    var params = [req.body.name, req.body.description, req.body.image];
    console.log(params);
    queries.createPlace(params, (err, data) => {
        if (err) {
            console.log('There was a bit of an issue adding the place');
        } else {
            console.log('Place added successfully');
            res.send(data);
        }
    });
});

app.delete('/places/:id', (req, res) => {
    var id = req.params.id;
    queries.deleteEntry(id, (err, data) => {
        if (err) {
            console.log('I\'m not leaving... I\'M NOT FU**IN LEAVING')
        } else {
            console.log('The place has left willingly. In fact, he seemed kind of happy about it');
            res.send(data)
        }
    });
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });