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

    const render = () => {
        let exampleString = "";

        for (const task of tasks) {
            exampleString += `
            <li ${task.done ? "style = \"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = exampleString;

    };



const addNewTasks = (newTasks) => {

    if (newTasks === "") { return; }
   
    tasks.push({ content: newTasks },)

    render();
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