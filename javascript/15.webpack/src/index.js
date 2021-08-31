import { hello, add} from './util.js';
import "./style.css";
import logo from "./images/a.PNG"

const text = hello("<h1>나는 이승준333</h1>")
const num = add(1,4)
const img = `<img src="${logo}" alt="이승준"/>`


document.getElementById("root").innerHTML = img + text + num

