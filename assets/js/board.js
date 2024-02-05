/* <div class="card">
    <img src="assets/images/sai.png" alt="" class="card-img">
    <h2 class="name">Sai Siddhish Chandra Sekaran</h2>
    <h3 class="role">Vice President</h3>
</div> */

const board = [
    ["assets/images/raiyan.jpg", "Raiyan Zaman", "President"],
    ["assets/images/rishi.jpg", "Rishi Selvamani", "President"],
    ["assets/christian.jpg", "Christian Cha", "Vice President"],
    ["assets/images/sai.png", "Sai Siddhish Chandra Sekaran", "Vice President"],
];

const boardContainer = document.querySelector("#cards");

board.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = member[0];
    image.alt = member[1];
    image.classList.add("card-img");

    const name = document.createElement("h2");
    name.classList.add("name");
    name.innerText = member[1];

    const role = document.createElement("h3");
    role.classList.add("role");
    role.innerText = member[2];

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(role);

    boardContainer.appendChild(card);
});
