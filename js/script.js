


function openTab(sectionID) {
    const tabs = document.querySelectorAll(".tab_content");
    const links=document. querySelectorAll(".tab-links");

    links.forEach(link =>{
        link.classList.remove("active_link");
    })

    tabs.forEach(tab => {
        tab.classList.remove("active_tab");
    });

    

    document.getElementById(sectionID).classList.add("active_tab");
    event.currentTarget.classList.add("active_link");
}



const bar=document.getElementById("ulBar");


function opeNTab(){
    bar.style.right="0";
    


}
function closeTab(){
    bar.style.right="-200px";
}



const webAppUrl = "https://script.google.com/a/macros/seu.edu.bd/s/AKfycbyzW8WYPrA5MGEIVZ_YdliswTzxk2D5HYp61WwpHELaJWD4CaTVrpRy1YRs47IW1DR5/exec"

const form =document.forms['googlesheets'];

form.addEventListener('submit', e=>{
    e.preventDefault();
    fetch(webAppUrl, {method: 'POST',body: new FormData(form), // Essential for Apps Script cross-origin requests
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
})
})
.then(() => alert('Message sent successfully!'))
.catch(error => console.error('Error:', error));
