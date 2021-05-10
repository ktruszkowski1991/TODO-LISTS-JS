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
            <li>
            ${task.content}
            </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = exampleString;

    };



const init = () => {

render();

};

init();
};