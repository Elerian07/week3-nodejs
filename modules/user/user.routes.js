
import { Router } from 'express';

import { getAllUsers, addUsers, updatUser, deleteUser, getUser, search, usersReversed, searchNa, searchAge, searchOld, searchYoung } from './controller/user.controller.js';
const router = Router()

router.get("/users", getAllUsers)

router.post("/users", addUsers)

router.patch("/users/:ID", updatUser)

router.delete("/users/:ID", deleteUser)

router.get("/users/getUser", getUser)

router.get("/users/search", search)

router.get("/users/reversed", usersReversed)

router.get("/users/searchNa", searchNa)

router.get("/users/searchAge", searchAge)

router.get("/users/searchOld", searchOld)

router.get("/users/searchYoung", searchYoung)
export default router;
