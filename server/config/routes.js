task = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/task', task.index);
    app.get('/task/:id', task.show_one);
    app.post('/task', task.create);
    app.put('/task/:id', task.update);
    app.delete('/task/:id', task.destroy);
};