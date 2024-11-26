document.addEventListener("DOMContentLoaded",()=>{
    console.log("dom is loaded and parsed ");

let ideas = [];
const view1 = document.querySelector("#view1");
const view2 = document.querySelector("#view2");

const creatDivsFromIdeas = (parent,ideas) =>{
    if (!parent) {
        console.error("parent ellement not found");
        return;
    }

    ideas.forEach(({title,content,isPrivate}) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(isPrivate? "created-div-private":"created-div");
        const divTitle = document.createElement("h2");
        divTitle.textContent = title;
        const divParagraph = document.createElement("p");
        divParagraph.textContent = content;
        newDiv.append(divTitle,divParagraph);
        parent.append(newDiv);
    });
};
const addIdea = () =>{
    const title = prompt("enter the title of the idea:").trim();
    const content = prompt("Enter the content of your idea:").trim();
    const isPrivateInpute = prompt("Is this idea private? (yes/no)").trim().toLocaleLowerCase();

    if (title ===""|| content ==="") {
        alert("PLease enter bouth title and the content of your idea !!");
        return;
    }
    if (isPrivateInpute !== "yes" && isPrivate !== "no") {
        alert ("Please specify yes or no for privacy");
        return;
    }
    const isPrivate = isPrivateInpute === "yes";

    ideas.push({
        title,content,isPrivate
    });

    if (isPrivate) {
        view2.style.display ="flex";
        console.log(view2);
        creatDivsFromIdeas(view2,ideas.filter((idea)=> idea.isPrivate));
    } else {
       creatDivsFromIdeas(view1,ideas.filter((idea)=> !idea.isPrivate));
    }
    const addAnother = prompt("Do you want to add another idea? (yes/no)").trim().toLocaleLowerCase();
    if (addAnother == "yes") {
        addIdea();
    } else {
        alert("thanks for your Ideas!!");
    }
};
addIdea();
});