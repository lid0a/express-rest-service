import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  try {
    await usersService.create(user);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const newUser = new User({ id, name, login, password });
  const updated = await usersService.update(newUser);
  if (updated) {
    res.status(200).json(User.toResponse(newUser));
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const deleted = await usersService.remove(id);
  await tasksService.unassignUser(id);
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

export default router;
