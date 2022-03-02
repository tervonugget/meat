//MUST HAVE - CREATE A TEMPLATE TAG
var template_particle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_particle.innerHTML = `
<div class="particle-container">
<div class="particle"></div>
</div>

<style>
    .particle-container {
        position: relative;
        display: grid;
        place-content: center;
        border: 5px solid green;
        z-index: 1;
        height: 15rem;
        width: 100vw;
        left: 0;
        bottom: 15rem;
    }

    .particle {
        position: relative;
        background: red;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        bottom: 5rem;
        left: -5rem;
    }

    .particle:hover {
        background: green;
        border: 0.25rem black solid;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheParticle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_particle.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-particle", TheParticle)