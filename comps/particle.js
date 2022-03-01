//MUST HAVE - CREATE A TEMPLATE TAG
var template_particle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_particle.innerHTML = `
<div class="particle"></div>

<style>
    .particle {
        background: red;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        position: relative;
        left: 20rem;
        bottom: 20rem;
    }

    .particle:hover {
        background: green;
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