/* alert ("start") */
let defaultValueHight = "Добавить важных дел";
let defaultValueLow = "Добавить дел";
let emptyString = ""

import { plusHighButtons } from "./veiw.js";
import { plusLowButtons } from "./veiw.js";
import { exButtons } from "./veiw.js";


for (let elem of plusHighButtons) {
    elem.addEventListener("submit", plusHighTask);
}
for (let elem of plusLowButtons) {
    elem.addEventListener("submit", plusLowTask);
}
for (let elem of exButtons) {
    elem.addEventListener("click", deleteTask);
}


function plusHighTask() {
    try {
        //c=a+5;
        let form = parentHighForm.cloneNode(true);
        form.querySelector(".input.text").placeholder = parentHighForm.querySelector(".input.text").value;
        parentHighForm.querySelector(".input.text").value = emptyString;
        parentHighForm.querySelector(".input.text").placeholder = defaultValueHight;
        form.querySelector(".button.high.plus").remove();
        form.querySelector(".input.text").insertAdjacentHTML("afterend", `<button class="button ex" type="submit">x</button>`);
        form.querySelector(".button.ex").addEventListener("click", deleteTask);
        parentHighForm.after(form);
    } catch (err) {
        alert(err)
    }
}


function plusLowTask() {
    let form = parentLowForm.cloneNode(true);
    form.querySelector(".input.text").placeholder = parentLowForm.querySelector(".input.text").value;
    parentLowForm.querySelector(".input.text").value = emptyString;
    parentLowForm.querySelector(".input.text").placeholder = defaultValueLow;
    form.querySelector(".button.low.plus").remove();
    form.querySelector(".input.text").insertAdjacentHTML("afterend", `<button class="button ex" type="submit">x</button>`);
    form.querySelector(".button.ex").addEventListener("click", deleteTask);
    parentLowForm.after(form);
}


function deleteTask() {
    this.parentNode.remove();
}