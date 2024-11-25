console.log(document.readyState);

document.addEventListener("DOMConetentLoaded",()=>{
    console.log("DOM is fully loadeed and parsed");
    
})


const view1 = document.querySelector("#view1");
// console.log(view1); check if it works
const titleinput = document.getElementById("title-input");
const contentinput = document.getElementById("centent-input");
const btn = document.getElementById("add-div-btn");
const checkbtn = document.getElementById("checkbox");
//console.log(checkbtn); check the button if its there or not 

const creatDivs = (parent,title,paragraph)=>{
    if (!parent) {
      console.error("parent ellement not found");
    }
    const newDiv = document.createElement("div");
    if (checkbtn) {
        newDiv.classList.add("created-div-private");
    } else {
        newDiv.classList.add("created-div");
    }

    const divtitle = document.createElement("h2");
    divtitle.textContent = title;
    const divparagraph = document.createElement("p");
    divparagraph.textContent = paragraph;
    newDiv.append(divtitle,divparagraph);
    parent.append(newDiv);
};


btn.addEventListener("click",()=>{
    const title = titleinput.value.trim();
    const paragraph = contentinput.value.trim();
    if (title ==="" || paragraph ==="") {
        alert("please fill in bouth filed there is no idea without a name amd there is no name without a content ");
      return;
    }
    else if (checkbtn.checked) {
        const view2 = document.querySelector("#view2");
        console.log(view2);
        view2.style.display = "flex";
        creatDivs(view2,title,paragraph);
    }
   else{
    creatDivs(view1,title,paragraph);
   }

   //clear the variable so the y get filed again here 
   titleinput.value = "";
   contentinput.value = "";
   checkbtn.checked = false;
}
)





