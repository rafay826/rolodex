const dbPath = './data/contacts.json';
const db = require(dbPath);
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const jsonfile = require('jsonfile');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const multiResponse = (items) => { return { items: items } };
const singleResponse = (item) => { return { item: item } };
const getNextId = () => db.length;
const handleError = (response, message) => {
  response.status(404).json({ error: message });
}

const isContact = (contact) => contact.name !== undefined;

const emailIsAvailable = (email) => {
  if(email === '') {
    return true
  }
  let contact = db.find(contact => contact.email == email);
  return contact ? false: true;
};

const unorderedResponse = process.argv.includes('--unordered-response');

if (unorderedResponse) {
  console.log('Serving search results unordered')
}

app.get('/api/contacts', (req, res) => {
  res.json(multiResponse(db));
});

app.post('/api/contacts', (req, res) => {
  if (isContact(req.body)) {
    req.body.id = getNextId();
    req.body.image = '/assets/images/placeholder.png';
    db.push(req.body);
    res.json(singleResponse(req.body));
  }
  else {
    handleError(res, 'invalid structure');
  }
});

let delayedRequest = false;
app.get('/api/search', (req, res) => {
  const text = req.query.text;
  const matches = db.filter(contact => contact.name
    .toLowerCase().indexOf(text.toLowerCase()) > -1);

  if (unorderedResponse && delayedRequest) {
    console.log(`Serving delayed for: ${text}`);
    setTimeout(() => res.json(multiResponse(matches)), 2000)
  } else {
    console.log(`Serving instantly for ${text}`);
    res.json(multiResponse(matches));
  }
  delayedRequest = !delayedRequest;
});

app.get('/api/contacts/:id', (req, res) => {
  const contact = db.find(contact => contact.id ==req.params.id);
  contact ? res.json(singleResponse(contact)) : handleError(res, 'contact not found');
})

app.put('/api/contacts/:id', (req, res) => {
  let contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    Object.assign(contact, req.body);
    res.json(singleResponse(contact));
  } else {
    handleError(res, 'contact not found');
  }
});

app.get('/api/check-email', (req, res) => {
  if (emailIsAvailable(res.query.email)) {
    res.json({ msg: 'AVAILABLE' })
  } else {
    res.json({ error: 'NOT_AVAILABLE' })
  }
});

app.listen(4201, () => console.log('Your API is running on port 4201'));
