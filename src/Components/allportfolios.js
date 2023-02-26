import port1 from "../img/portImages/watson_translator.png";
import port2 from "../img/portImages/kangaroo.jpg";
import port3 from "../img/portImages/port3.jpg";
import port4 from "../img/portImages/pacman.jpg";
import port5 from "../img/portImages/PD.jpg";
import port6 from "../img/portImages/breast.png";
import port7 from "../img/portImages/Covid.png";

const portfolios = [
  {
    id: 1,
    category: "Machine Learning",
    link1: "https://drfreud1-translation-app.herokuapp.com/",
    link2: "www.github.com",
    icon1: "Watch",
    icon2: "Y",
    image: port1,
    title: "Text translator using AWS Translate API",
  },
  {
    id: 2,
    category: "Machine Learning",
    link1: "https://object-recognition-tfjs.herokuapp.com/",
    link2: "www.github.com",
    icon1: "Watch",
    icon2: "Y",
    image: port2,
    title: "Kangaroo Object Recognition",
  },
  {
    id: 3,
    category: "Software Development",
    link1: "https://santiago-website.herokuapp.com/",
    link2: "www.github.com",
    icon1: "Watch",
    icon2: "Y",
    image: port3,
    title: "Personal website using ReactJs",
  },
  {
    id: 4,
    category: "Software Development",
    link1: "https://github.com/DrFreud1/ManPac",
    link2: "www.github.com",
    icon1: "Repo",
    icon2: "Y",
    image: port4,
    title: "Modified Pac-Man game written in Haskell",
  },
  {
    id: 5,
    category: "Computer Science Research",
    link1: "https://github.com/DrFreud1/Parkinson-s-Disease-Detection",
    link2: "https://link.springer.com/chapter/10.1007/978-3-030-96293-7_12",
    icon1: "Repo",
    icon2: "Publication",
    image: port5,
    title: "Parkinson's Disease Detection using ML",
  },
  {
    id: 6,
    category: "Computer Science Research",
    link1:
      "https://github.com/DrFreud1/Automated-identification-of-breast-cancer-using-digitized-mammogram-images",
    link2: "https://link.springer.com/chapter/10.1007/978-3-030-33904-3_32",
    icon1: "Repo",
    icon2: "Publication",
    image: port6,
    title: "Automated Breast Cancer Recognition using Image Processing and ML",
  },
  {
    id: 7,
    category: "Computer Science Research",
    link1:
      "https://github.com/DrFreud1/Exploratory-Analysis-of-covid19-on-South-America",
    link2: "https://link.springer.com/chapter/10.1007/978-3-030-75680-2_31",
    icon1: "Repo",
    icon2: "Publication",
    image: port7,
    title: "Covid Impact Analysis in South America 2020",
  },
];

export default portfolios;
