import { Router } from 'express';
const router = Router();

let data = [
  { id: 1, name: 'Entity1', properties: { propA: 'a', propB: 'b', propC: [1, 2, 3] } },
  { id: 2, name: 'Entity2', properties: { propA: 'c', propB: 'd', propC: [4, 5, 6] } },
  { id: 3, name: 'Entity3', properties: { propA: 'e', propB: 'f', propC: [7, 8, 9] } },
];

// GET all entities
router.get('/entities', function (req, res) {
  if (req.query.filter) {
    let filter = req.query.filter;
    let filtered = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.includes(filter)) {
        filtered.push(data[i]);
      }
    }
    res.json(filtered);
  }

  res.json(data);
});

// GET entity by ID
router.get('/entities/:id', function (req, res) {
  let id = req.params.id;
  let entity;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      entity = data[i];
    }
  }
  if (entity) {
    res.json(entity);
  }

  res.status(404).send('Not found');
});

// POST new entity
router.post('/entities', function (req, res) {
  let entity = req.body;

  // best way imo to use some validator (i.e express-validator)
  let isValidEntity = entity && entity.name && entity.properties;
  let isNameString = typeof entity.name === 'string';
  let isPropertiesObject = typeof entity.properties === 'object';

  if (isValidEntity && isNameString && isPropertiesObject) {
    let id = data.length + 1;
    entity.id = id;
    data.push(entity);
    res.json(entity);
  }

  res.status(400).send('Bad Request');
});

// DELETE an entity
router.delete('/entities/:id', function (req, res) {
  let id = req.params.id;
  let index;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      index = i;
    }
  }
  if (index !== undefined) {
    let deleted = data.splice(index, 1);
    res.json(deleted);
  }

  res.status(404).send('Not found');
});

// PATCH an entity
router.patch('/entities/:id', function (req, res) {
  let id = req.params.id;
  let update = req.body;
  let entity;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      entity = data[i];
    }
  }
  if (entity) {
    let updatedEntity = Object.assign(entity, update);
    res.json(updatedEntity);
  }

  res.status(404).send('Not found');
});

export default router;
