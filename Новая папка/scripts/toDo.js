const list = [
    {
        id: 1,
        name: 'create a post',
        status: 'TODO',
        priority: 'low',
    },
    {
        id: 2,
        name: 'test',
        status: 'Done',
        priority: 'high',
    }
]

function changeStatus(task, status) {
    list.filter(function (item) {
        if (item.name === task) {
            return item.status = status;
        }
    });
};


function changePriority(task, priority) {

    list.filter(function (item) {
        if (item.name === task) {
            return item.priority = priority;
        }
    });
}


function addTask(task, status = 'TODO', priority = 'low') {
    list.splice(-1, 0, { id: list.length + 1, name: task, status, priority, })

};


function deleteTask(task) {
    let indexOfTask = list.findIndex(function (item) {
        return item.name == task;
    });

    list.splice(indexOfTask, 1);
};

function findTask(status, task) {
    let count = 0;

    console.log(`${status}`)
    let toDoTask = list.filter(function (item) {
        return item.status === task;


    });

    toDoTask.forEach(function (item) {
        console.log(`'${item.name}'`);
        count++;
    });

    if (count === 0) {
        console.log("-");
    }

}


function showList() {

    findTask('To Do:', 'TODO');
    findTask('Done:', 'Done');
    findTask('In Progress:', 'In Progress');

};





addTask('Play PS5');
addTask('go to sleep');
addTask('reading book');
changeStatus('reading book', 'TODO');
changeStatus('Play PS5', 'In Progress');
changePriority('go to sleep', 'high');
deleteTask('create a post');


showList();
