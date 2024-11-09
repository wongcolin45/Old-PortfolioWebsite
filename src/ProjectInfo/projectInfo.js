import ttt from '../images/ttt.png';
import plannerImage from '../images/planner.png';


const description = "I designed the Northeastern Schedule Planner using a " +
    "modern tech stack with React on the frontend and Express.js with SQLite on the backend. " +
    "The application's architecture focuses on handling complex course relationships and " +
    "requirement tracking through a robust validation system. I implemented features to automatically " +
    "verify prerequisites chains (like ensuring earlier courses are completed before advanced ones) and " +
    "track progress toward degree requirements including NUPath and concentration-specific rules. " +
    "The " +
    "frontend interface presents this data through an intuitive course selection system, while the " +
    "backend manages the intricate logic of course dependencies and academic requirements. " +
    "While I'm still refining some of the validation logic and prerequisite checking systems, the core functionality successfully helps students map out their academic pathways. My next development steps include migrating from SQLite to PostgreSQL for better hosting capabilities and implementing user authentication to enable schedule saving functionality.";

const reactTacToe =
{
    name: "React Tac Toe",
    description: "This project is a React-based version of Tic-Tac-Toe that" +
                 "originally started as a terminal-based game, where I" +
                 "implemented a minimax algorithm to calculate the best possible" +
                 "move for the AI. After completing the terminal version, I" +
                 "transitioned the game to a ReactJS frontend, creating an" +
                 "interactive UI with a grid layout where players can click" +
                 "to place their marks (X or O). React’s state management is used" +
                 "to handle the game’s state, while the minimax algorithm powers" +
                 "the AI's optimal moves. The frontend displays the game grid," +
                 "tracks the current player, and shows the result of the game," +
                 "whether it’s a win, loss, or draw, offering a challenging" +
                 "gameplay experience with an engaging interface. (" +
                 "Also I could not fix styling issues on safari so use at your own risk ;).",
    technologies: "React, Node, Javascript",
    github: "https://github.com/wongcolin45/ReactTacToe",
    image: ttt,
    link: "https://wongcolin45.github.io/ReactTacToe/",
    bigImage: false
}

const planner =
{
    name: "Northeastern Schedule Planner",
    description: description,
    technologies: "React, Express, SQLite, Javascript",
    github: "https://github.com/wongcolin45/Northeastern-Schedule-Planner",
    image: plannerImage,
    link: null,
    bigImage: true
}



export {reactTacToe, planner}