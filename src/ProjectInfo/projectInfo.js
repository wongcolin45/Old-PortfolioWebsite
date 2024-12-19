import ttt from '../images/ttt.png';
import plannerImage from '../images/planner.png';
import chessImage from '../images/ChessWebsite.png';
import oasisImage from '../images/OasisImage.png';


const description =
    "I designed the Northeastern Schedule Planner using React and Express.js with SQLite, " +
    "focusing on managing course relationships and tracking degree progress with NUPath and " +
    "concentration-specific requirements. The frontend provides an intuitive course selection " +
    "experience, while the backend handles complex course dependencies. I'm currently refining " +
    "validation logic and plan to migrate to PostgreSQL and add user authentication for schedule saving.";


const reactTacToe =
{
    name: "React Tac Toe",
    description: "This project is a React-based version of Tic-Tac-Toe that" +
                 "originally started as a terminal-based game, where I " +
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
    technologies: "React, Node",
    github: "https://github.com/wongcolin45/ReactTacToe",
    image: ttt,
    link: "https://wongcolin45.github.io/ReactTacToe/",
    bigImage: false
}

const planner =
{
    name: "Northeastern Schedule Planner",
    description: description,
    technologies: "React, Express, SQLite, Node",
    github: "https://github.com/wongcolin45/Northeastern-Schedule-Planner",
    image: plannerImage,
    link: null,
    bigImage: true
}

const chessDescription =
    'I developed a two-player chess game that allows both players to play on a single device. ' +
    'The frontend is built using React, providing an intuitive and responsive interface for gameplay. ' +
    'The backend is powered by a Spring Boot API, which efficiently handles the game logic and enforces chess rules. ' +
    'By applying Object-Oriented Programming (OOP) principles, I ensured a modular and maintainable codebase for the game logic, ' +
    'enabling clear separation of responsibilities, such as piece movements, game state management, and rule validations. ' +
    'This project showcases seamless integration between frontend and backend systems for a complete gaming experience.';

const chess =
    {
        name: "2 Player Chess Game",
        description: chessDescription,
        technologies: 'React, Spring Boot',
        github: 'https://github.com/wongcolin45/Chess2Players',
        image: chessImage,
        link: null,
        bigImage: true
    }

const oasisDescription =
    'NEU Bites is a web application designed to help Northeastern University students discover ' +
    'nearby food options through personalized dish recommendations. As the Front-End Developer, ' +
    'I developed the React-based frontend, leveraging hooks for efficient state management and component ' +
    'lifecycle handling. I integrated the frontend with a Flask backend via RESTful APIs, enabling seamless ' +
    'communication between the client and server. My work focused on ensuring a smooth and responsive user ' +
    'experience while collaborating with the team to align the frontend functionality with backend operations.';

const oasis =
    {
        name: "NEU Bites | Oasis Club Project",
        description: oasisDescription,
        technologies: 'React, Flask, Supabase(Postgre SQL), AWS',
        github: 'https://github.com/Oasis-NEU/f24-group1',
        image: oasisImage,
        link: null,
        bigImage: true
    }


const courses = {
    "Discrete Structure": "Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Discusses principles of proof such as truth tables, inductive proof, and basic logic. Also covers the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms.",
    "Fundamentals of Computer Science 1": "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. Assumes no prior programming experience; therefore, suitable for first-year students—majors, and nonmajors alike—who wish to explore the intellectual ideas in the discipline.",
    "Fundamentals of Computer Science 2": "Examines object-oriented programming and associated algorithms using more complex data structures as the focus. Discusses nested structures and nonlinear structures including hash tables, trees, and graphs. Emphasizes abstraction, encapsulation, inheritance, polymorphism, recursion, and object-oriented design patterns. Applies these ideas to sample applications that illustrate the breadth of computer science.",
    "Objected-Oriented Design": "Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.",
    "Introduction to Mathematical Reasoning": "Covers the basics of mathematical reasoning and problem solving to prepare incoming math majors for more challenging mathematical courses at Northeastern. Focuses on learning to write logically sound mathematical arguments and to analyze such arguments appearing in mathematical books and courses. Includes fundamental mathematical concepts such as sets, relations, and functions.",
    "Foundations of Cybersecurity": "Presents an overview of basic principles and security concepts related to information systems, including workstation security, system security, and communications security. Discusses legal, ethical, and human factors and professional issues associated with cybersecurity, including the ability to differentiate between laws and ethics. Offers students an opportunity to use a substantial variety of existing software tools to probe both computer systems and networks in order to learn how these systems function, how data moves within these systems, and how these systems might be vulnerable. Covers security methods, controls, procedures, economics of cybercrime, criminal procedure, and forensics.",
    "Foundations of Data Science": "Introduces methods and concepts from linear algebra and probability that form a basis for modern machine learning. Emphasizes computational aspects using the Python programming language (the course assumes familiarity with Python). Students work with tensors (in NumPy) and may be tasked with implementing from scratch algorithms central to numerical linear algebra and introductory machine learning."
}



export {reactTacToe, planner, chess, courses, oasis}