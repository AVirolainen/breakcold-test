import { Router } from 'express';
const fs = require('fs/promises');
const router = Router();

router.get('/', async function (req, res) {
  let listOfUsers;
  try {
    listOfUsers = await fs.readFile(__dirname + '/../data/users/1.json', { encoding: 'utf8' });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }

  res.send(listOfUsers);
});

router.get('/:id', async function (req, res) {
  let id = req.params.id;
  let listOfUsers;
  try {
    listOfUsers = await fs.readFile(__dirname + '/../data/users/1.json', { encoding: 'utf8' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

  let user = JSON.parse(listOfUsers).find((user) => user.id == id);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  }

  res.send(user);
});

router.post('/add', function (req, res) {
  let user = req.body;

  let data;
  try {
    data = await fs.readFile(__dirname + '/../data/users/1.json', { encoding: 'utf8' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

  let listOfUsers = JSON.parse(listOfUsers);
  listOfUsers.push(user)

  try {
    data = await fs.writeFile(__dirname + '/../data/users/1.json', listOfUsers);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

  res.send(listOfUsers);
});

export default router;
