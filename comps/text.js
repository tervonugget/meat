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
        position: relative;
        bottom: 15rem;
        left: 10%;
        border: 0.25rem black solid;
        border-radius: 1rem;
    }

    .text {
        color: black;
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
    handleMenuClick(type) {
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
    
    pDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the shoulder of the pig.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the picnic of the pig.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the hock of the pig.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the loin of the pig.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the spare rib of the pig.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the side of the pig.";
        } else if (parnumber === 7) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the ham of the pig.";
        }
    }

    chDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the neck of the chicken.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the breast of the chicken.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the back of the chicken.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the wing of the chicken.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the thigh of the chicken.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the leg of the chicken.";
        }
    }
    
    cDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the chuck of the cow.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the breast of the cow.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the shank of the cow.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the rib of the cow.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the plate of the cow.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the shirt of the cow.";
        } else if (parnumber === 7) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the flank of the cow.";
        } else if (parnumber === 8) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the sirloin of the cow.";
        } else if (parnumber === 9) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the tenderloin of the cow.";
        } else if (parnumber === 10) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the top sirloin of the cow.";
        } else if (parnumber === 11) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the bottom sirloin of the cow.";
        } else if (parnumber === 12) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the round of the cow.";
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)