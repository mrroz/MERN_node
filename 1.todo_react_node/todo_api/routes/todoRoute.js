const express = require('express')

const router = express.Router()
const todoControl = require('../controlers/todo_controlers')

router.get('/', todoControl.getTodo)
router.post('/', todoControl.creatTodo)

module.exports = router