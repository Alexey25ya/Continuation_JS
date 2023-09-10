import { dataInfo } from "./zoo.js";

const data = JSON.parse(dataInfo);
console.log(data);
const content = document.querySelector(".content");
content.style.display = 'flex';
content.style.flexWrap = 'wrap';
content.style.justifyContent = 'center';

data.forEach(({ id, animal, name, age, url }) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.style.border = '2px solid pink'
    div.style.marginRight = '10px'
    content.appendChild(div);

    const img = document.createElement("img");
    img.classList.add("card-top");
    img.src = url;
    img.width = 300;
    img.height = 300;

    div.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.display = 'flex';
    cardBody.style.flexDirection = 'column';
    cardBody.style.alignItems = "center";
    cardBody.style.backgroundColor = 'pink'
    div.appendChild(cardBody);

    const idAnimal = document.createElement("p");
    idAnimal.classList.add("card-text");
    idAnimal.textContent = `id: ${id}`;
    cardBody.appendChild(idAnimal);

    const title = document.createElement("h4");
    title.classList.add("card-subtitle");
    title.textContent = animal;
    title.style.fontSize = '20px';
    title.style.color = 'green';
    cardBody.appendChild(title);

    const subtitleName = document.createElement("h5");
    subtitleName.classList.add("card-title");
    subtitleName.textContent = `Name: ${name}`;
    subtitleName.style.color = 'Blue';
    subtitleName.fontSize = '18px';
    cardBody.appendChild(subtitleName);

    const subtitle = document.createElement("h5");
    subtitle.classList.add("card-subtitle");
    subtitle.textContent = `Age: ${age}`;
    cardBody.appendChild(subtitle);


});