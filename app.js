const task = document.querySelector('.container input')
const addTaskBtn = document.querySelector('.addTaskBtn')
const taskContainer = document.querySelector('.taskContainer')
let taskNumber = 1

addTaskBtn.addEventListener('click', () =>{
    let taskSection = document.createElement('section')
    taskSection.classList = 'task'

    let p = document.createElement('p')
        p.innerHTML = `${taskNumber}. ` + `${task.value}`
        p.classList = 'todo'
        taskSection.appendChild(p)
    
    let checkButton = document.createElement('button')
        checkButton.innerHTML = `✅`
        checkButton.classList = 'doneBtn'
        taskSection.appendChild(checkButton)
    
    let deleteButton = document.createElement('button')
        deleteButton.innerHTML = '❌'
        deleteButton.classList = 'deleteButton'
        taskSection.appendChild(deleteButton)

    taskContainer.appendChild(taskSection)

})