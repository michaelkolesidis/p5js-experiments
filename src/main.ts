import './style/style.scss';
import body from './components/Body.js';
import projects from './components/Projects.js';
import { disableRightClick } from './utils/functions.js';

// Components
body();
projects();

// Global Functions
disableRightClick(); // Disable right click
