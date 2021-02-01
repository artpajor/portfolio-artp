//my projects

const projects = [
    {
        id: 1,
        name: "Collection app",
        link: "https://bit.ly/2IVVx1w",
        category: "Individual project",
        img: "images/ghibli.jpg",
        text: "An individual project - a collection app containing my favourite Studio Ghibli creatures. Built using PHP, MySQL, HTML & CSS."
    },
    {
        id: 2,
        name: "Thump a Trump",
        link: "https://bit.ly/39caJ5T",
        category: "Group project",
        img: "images/trump.jpg",
        text: "A JavaScript game based on the classic Whack-a-mole, built with my teammates at iO Academy. I was mostly involved in working on functionality - randomising, setting item visibility and countdown pop - up (JavaScript, HTML & CSS). I am very proud to have been a part of this particular project, so if you would like to have a go (it's not as easy as it seems!), you are more than welcome to do so here: https://bit.ly/36XkzFY"
    },
    {
        id: 3,
        name: "Solar system",
        link: "https://bit.ly/3oQO6sG",
        category: "Individual project",
        img: "images/solar.jpg",
        text: "Simple solar system built with SVG and CSS animation."
    },
    {
        id: 4,
        name: "Analog clock",
        link: "https://bit.ly/3qsT3bv",
        category: "Individual project",
        img: "images/clock.jpg",
        text: "Analog JavaScript + CSS clock."
    },
    {
        id: 5,
        name: "Aptitude test",
        link: "https://bit.ly/3kS4ypK",
        category: "Group project",
        img: "images/aptitude-test.png",
        text: "Another team project - improving iO Academy aptitude test. This time we were working on a legacy code, which was an amazing learning experience, considering the quality of the code! It definitely taught me the importance of clean code, consistency and good organisation of my own projects. Here I was mainly involved in working on functionality (TypeScript) that will prevent the user f rom cheating while taking the test, which includes a warning message, ending the test automatically in case of clicking away and setting the score to 0."
    },
    {
        id: 6,
        name: "The Real MVP",
        link: "https://bit.ly/370KGf0",
        category: "Group project",
        img: "images/the-real-mvp.png",
        text: "Team project focused on OOP. The requirements were to display a JSON file containing sport teams, originally stored in a database, on a front end. In this project I was involved in writing the database query, inserting data into the database and navigation (PHP, HTML & CSS)."
    },
    {
        id: 7,
        name: "Academy Portal",
        link: "https://bit.ly/2XOMoMf",
        category: "Group project",
        img: "images/academy.png",
        text: "In this group project we were exercising our knewly obtained knowledge about Slim framework. This was based on another legacy code, already existing iO Academy portal. I was mainly responsible for creating a public user page for onboarding students."
    }

]

const img = document.getElementById("project-img");
const name = document.getElementById("name");
const link = document.getElementById("link");
const category = document.getElementById("category");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    const item = projects[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    link.textContent = item.link;
    category.textContent = item.category;
    info.textContent = item.text;
});

function showProject(project) {
    const item = projects[project];
    img.src = item.img;
    name.textContent = item.name;
    link.textContent = item.link;
    category.textContent = item.category;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > projects.length - 1) {
        currentItem = 0;
    }
    showProject(currentItem);
})

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = projects.length - 1;
    }
    showProject(currentItem);
})
