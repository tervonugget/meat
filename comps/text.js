//MUST HAVE - CREATE A TEMPLATE TAG
var template_text = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_text.innerHTML = `
<div class="text-container">
    <div class="text">
        This is a test. 
    </div>
</div>

<style>
    .text-container {
        width: 80%;
        height: 10rem;
        background-color: blue;
        position: absolute;
        bottom: 15rem;
        left: 10%;
    }

    .text {
        color: white;
        padding: 1rem;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_text.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    handleParticleClick(type) {
        if (type === "pig") {
            this.displayText("pig");
        } else if (type === "chicken") {
            this.displayText("chicken");
        } else if (type === "cow") {
            this.displayText("cow");
        }
    }
    
    displayText(type) {
        if (type === "pig") {
            this.shadowRoot.querySelector(".text").innerHTML = "This is a pig.";
        }
        if (type === "chicken") {
            this.shadowRoot.querySelector(".text").innerHTML = "This is a chicken.";
        }
        if (type === "cow") {
            this.shadowRoot.querySelector(".text").innerHTML = "This is a cow.";
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)