export const taskPageObjects = {
        TASK_INPUT_BOX: `input[ng-model='formData.text']`,
        ADD_TASK_BUTTON: `button[ng-click='createTodo()']`,
        REMOVE_TASK_CHECKBOXES: `#todo-list input`,
        ALL_TASK_NAMES: `#todo-list div[ng-repeat='todo in todos']`
}