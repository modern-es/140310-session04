import Handlebars from "handlebars";
import './ajax';

const studentTmpl = document.querySelector('#studentTmpl')
const students = [
    { name: 'Alireza Abolhasani' },
    { name: 'Zahra Aghaei' },
    { name: 'Hadi Behdad' },
    { name: 'Mohammad Farahypour' },
    { name: 'Setare Modaresi' },
    { name: 'Atefeh Daneshvar' },
    { name: 'Sara Farani Sani' },
    { name: 'Nastaran Malekpoor' },
    { name: 'Seyedeh Zahra Ashrafian' },
]

//section 2
const template = Handlebars.compile(studentTmpl.innerHTML);
const html = template({ data: students });

const app = document.querySelector('#app')
app.innerHTML = html;
console.log(html)