{
    const tasks = [
        {
            content: "kupić bułki",
            done: false,
        },
        {
            content: "zrobić opłaty",
            done: true,
        },

    ];

    const toggleTaskDone = (indexTask) => {
        tasks[indexTask].done = !tasks[indexTask].done;

        render();
    };

    const removeTasks = (index) => {
        tasks.splice(index, 1);

        render();
    };


    const addNewTasks = (newTasks) => {

        if (newTasks === "") { return; }

        tasks.push({ content: newTasks },)

        render();
    };

    const render = () => {
        let exampleString = "";

        for (const task of tasks) {
            exampleString += `
            <li class="list__item${task.done ? " list__item--done" : ""}">
            <button class="js-remove">usuń</button>
            <button class="js-done">zrobione</button>
            ${task.content}
            </li>`;
        };

        document.querySelector(".js-tasks").innerHTML = exampleString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTasks(index);
            });
        });

        const doneButtons = document.querySelectorAll(".js-done");
        
        doneButtons.forEach((doneButton, indexTask) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(indexTask);
            });
        });

    };





    const onFormSubmit = (event) => {

        event.preventDefault();

        const newTasks = document.querySelector(".js-newTask").value.trim();


        addNewTasks(newTasks);

    };


    const init = () => {

        render();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);




    };

    init();
};