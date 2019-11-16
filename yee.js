window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const yee_player = document.querySelector(".yee-player");
    const header = document.querySelector("#yee h3");

    form.addEventListener("submit", submit_event => {
        submit_event.preventDefault();

        yee_player.classList.remove("hidden");
        form.parentElement.classList.add("hidden");

        const name = form.querySelector("input[type='text']").value;
        header.innerText = `hush ${name}, I know you do`;
    });
});
