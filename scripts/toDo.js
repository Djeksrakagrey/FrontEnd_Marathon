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


function addTask(task) {
    list.push({ id: list.length + 1, name: task, status: "TODO", priority: "low", });
};


function deleteTask(task) {
    let indexOfTask = list.findIndex(function (item) {
        return item.name == task;
    });

    list.splice(indexOfTask, 1);
};


function showList() {
    let count = 0;

    console.log("To Do:")
    let toDotask = list.filter(function (item, index, array) {
        return item.status === 'TODO';


    });

    toDotask.forEach(function (item, index, array) {
        console.log(`'${item.name}'`);
        count++;
    });

    if (count === 0) {
        console.log("-");
    }


    console.log('In Progress:')
    let inProgressTask = list.filter(function (item, index, array) {
        return item.status === 'In Progress'

    });

    inProgressTask.forEach(function (item, index, array) {
        console.log(`'${item.name}'`);
        count++;
    });

    if (count === 0) {
        console.log('-');
    }

    console.log('Done:')
    let doneTask = list.filter(function (item, index, array) {
        return item.status === 'Done';

    });

    doneTask.forEach(function (item, index, array) {
        console.log(`'${item.name}'`);
        count++;
    });

    if (count === 0) {
        console.log("-");
    };

};





addTask('Play PS5');
addTask('go to sleep');
addTask('reading book');
changeStatus('reading book', 'TODO');
changeStatus('Play PS5', 'In Progress');
changePriority('go to sleep', 'high');
deleteTask('create a post');
// console.log(list);

showList();
