const Todo = require('../model/Todo')

//////////////////////////////////////////get alltitle
const getTodo = async(req, res, next) => {
    const todos = await Todo.find().exec()
    res.json(todos)
}


//////////////////////////////////////////post new title
const creatTodo = async(req, res, next) => {
    const title = req.body.title
    const creatTodo = new Todo({
        title: title
    })

    await creatTodo.save()
    console.log('add titlesssss');
    res.json(await Todo.find().exec())

}



exports.getTodo = getTodo
exports.creatTodo = creatTodo