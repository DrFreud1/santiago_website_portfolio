import port1 from '../img/portImages/watson_translator.png';
import port2 from '../img/portImages/kangaroo.jpg';
import port3 from '../img/portImages/port3.jpg';
import port4 from '../img/portImages/pacman.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Machine Learning',
        link1: 'https://drfreud1-translator-app.mybluemix.net/',
        link2: 'www.github.com',
        icon1: 'Watch',
        icon2: 'Y',
        image: port1,
        title: 'English to French translator using IBM Watson API'
    },
    {
        id: 2,
        category: 'Machine Learning',
        link1: 'https://object-recognition-tfjs.herokuapp.com/',
        link2: 'www.github.com',
        icon1: 'Watch',
        icon2: 'Y',
        image: port2,
        title: 'Kangaroo Object Recognition'
    },
    {
        id: 3,
        category: 'Software Development',
        link1: 'https://santiago-website.herokuapp.com/',
        link2: 'www.github.com',
        icon1: 'Watch',
        icon2: 'Y',
        image: port3,
        title: 'Personal website using ReactJs'
    },
    {
        id: 3,
        category: 'Software Development',
        link1: 'https://github.com/DrFreud1/ManPac',
        link2: 'www.github.com',
        icon1: 'Repo',
        icon2: 'Y',
        image: port4,
        title: 'Modified Pac-Man game written in Haskell'
    }
]

export default portfolios;