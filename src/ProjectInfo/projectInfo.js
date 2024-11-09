import ttt from '../images/ttt.png';
import plannerImage from '../images/planner.png';


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


const courses = {
    "Discrete Structure": "Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Discusses principles of proof such as truth tables, inductive proof, and basic logic. Also covers the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms.",
    "Fundamentals of Computer Science 1": "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. Assumes no prior programming experience; therefore, suitable for first-year students—majors, and nonmajors alike—who wish to explore the intellectual ideas in the discipline.",
    "Fundamentals of Computer Science 2": "Examines object-oriented programming and associated algorithms using more complex data structures as the focus. Discusses nested structures and nonlinear structures including hash tables, trees, and graphs. Emphasizes abstraction, encapsulation, inheritance, polymorphism, recursion, and object-oriented design patterns. Applies these ideas to sample applications that illustrate the breadth of computer science.",
    "Objected-Oriented Design": "Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.",
    "Introduction to Mathematical Reasoning": "Covers the basics of mathematical reasoning and problem solving to prepare incoming math majors for more challenging mathematical courses at Northeastern. Focuses on learning to write logically sound mathematical arguments and to analyze such arguments appearing in mathematical books and courses. Includes fundamental mathematical concepts such as sets, relations, and functions.",
    "Foundations of Cybersecurity": "Presents an overview of basic principles and security concepts related to information systems, including workstation security, system security, and communications security. Discusses legal, ethical, and human factors and professional issues associated with cybersecurity, including the ability to differentiate between laws and ethics. Offers students an opportunity to use a substantial variety of existing software tools to probe both computer systems and networks in order to learn how these systems function, how data moves within these systems, and how these systems might be vulnerable. Covers security methods, controls, procedures, economics of cybercrime, criminal procedure, and forensics.",
    "Foundations of Data Science": "Introduces methods and concepts from linear algebra and probability that form a basis for modern machine learning. Emphasizes computational aspects using the Python programming language (the course assumes familiarity with Python). Students work with tensors (in NumPy) and may be tasked with implementing from scratch algorithms central to numerical linear algebra and introductory machine learning."
}



export {reactTacToe, planner, courses}