document.addEventListener("DOMContentLoaded",()=>{
    console.log("dom is loaded and parsed ");

let ideas = [];
const view1 = document.querySelector("#view1");
const view2 = document.querySelector("#view2");

const creatDivsFromIdeas = (parent,ideasToShow) =>{
    if (!parent) {
        console.error("parent ellement not found");
        return;
    }
    parent.innerHTML = ""; // Clears the existing content in the parent container

    ideasToShow.forEach((idea,index) => {
        const {title,content,isPrivate} = idea;
        const newDiv = document.createElement("div");
        newDiv.classList.add(isPrivate? "created-div-private":"created-div");
        const divTitle = document.createElement("h2");
        divTitle.textContent = title;
        const divParagraph = document.createElement("p");
        divParagraph.textContent = content;

        newDiv.addEventListener("click",()=>{
            updateIdea(index);
        })

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
    if (isPrivateInpute !== "yes" && isPrivateInpute !== "no") {
        alert ("Please specify yes or no for privacy");
        return;
    }
    const isPrivate = isPrivateInpute === "yes";

    ideas.push({
        title,content,isPrivate
    });
    updateView();

    if (isPrivate) {
        view2.style.display ="flex";
        console.log(view2);
        creatDivsFromIdeas(view2,ideas.filter((idea)=> idea.isPrivate));
    } else {
       creatDivsFromIdeas(view1,ideas.filter((idea)=> !idea.isPrivate));
    }
    const addAnother = prompt("Do you want to add another idea? (yes/no)").trim().toLocaleLowerCase();
    if (addAnother === "yes") {
        addIdea();
    } else {
        alert("thanks for your Ideas!!");
    }
};
const updateIdea = (index)=>{
    const idea = ideas[index];

    if (!idea) {
        alert("idea not found!");
        return;
    }
    const newTitle = prompt("enter the new title for your idea");
    const newContent  = prompt("enter the new content for your idea");
    const isPrivateInpute = prompt("is your idea private or no (yes/no)?",idea.isPrivate?"yes":"no").trim().toLowerCase();
    if (newTitle ===""|| newContent === "") {
        alert("Title or content cannot be empty!");
        return;
    }
    if (isPrivateInpute !== "yes" && isPrivateInpute !="no") {
        alert("idea must be private or public specify yes or no for privacy");
        return;
    }

    ideas[index] = {
        title:newTitle,
        content:newContent,
        isPrivate:isPrivateInpute ==="yes",
    };
   
    updateView();
};
const updateView = ()=>{ 
    creatDivsFromIdeas(view1,ideas.filter((idea)=> !idea.isPrivate));
    creatDivsFromIdeas(view2,ideas.filter((idea)=> idea.isPrivate));
};
addIdea();
});