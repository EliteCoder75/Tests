import "./styles.css";

// index.js
import { greeting } from "./greeting.js";
import odinImage from "../odin.jpeg";
   
const image = document.createElement("img");
image.src = odinImage;
   
const tag = document.createElement()
document.body.appendChild(image);
document.body.appendChild(tag);

console.log(greeting);
