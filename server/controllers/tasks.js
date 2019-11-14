var Task = require('../models/task.js')

module.exports = {
    index: (req, res) => {
        Task.find()
            .then(tasks => res.json({data: tasks}))
            .catch(err => res.json(err))
            //console.log(persons)
    },
    show_one: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                //console.log("task");
                res.json({data: task});
                //console.log("task");
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        task = new Task();
        task.title = req.body.title,
        task.description = req.body.description,
        task.completed = req.body.completed,
        task.save()
            .then(task => res.json({data: task}))
            //.then(task => res.json(task))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        console.log("Id: " + req.params.id);
        console.log("Req: " + req.body.title);
        Task.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description
        }, { returnNewDocument: true })
            .then((data) => res.json({data}))
            //.then((data) => res.json(data))
            .catch(err => res.json(err));
            
    },

    // update: (req,res) => {
    //     console.log(req.body)
    //     Task.findOneAndUpdate({_id: req.params.id},req.body)
    //         .then(task => res.json({data: task}))
    //         .catch(err => json(err))

    // update: (req,res) => {
    //     var task_id = req.params.id;
    //     Task.findOne({_id: task_id}, (task) => {
    //         task.title = req.body.title;
    //         task.description = req.body.description;
    //         task.save()
    //         //completed: req.body.completed
    //     //}, {returnNewDocument: true})
    //         .then(task => {
    //         res.json({data: task})
    //         })
    //     })
    //         .catch(err => res.json(err));
        
    //},

    destroy: (req, res) => {
        Task.remove({_id: req.params.id})
        .then(deletedTask => res.json({data: deletedTask}))
        .catch(err => res.json(err));
    }
};