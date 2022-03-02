//MUST HAVE - CREATE A TEMPLATE TAG
var template_particle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_particle.innerHTML = `
<div class="particle-container">
<div class="particle" id="par1"></div>
<div class="particle" id="par2"></div>
<div class="particle" id="par3"></div>
<div class="particle" id="par4"></div>
<div class="particle" id="par5"></div>
<div class="particle" id="par6"></div>
<div class="particle" id="par7"></div>
</div>

<style>
    .particle-container {
        position: relative;
        display: grid;
        place-content: center;
        /* border: 5px solid green; */
        z-index: 1;
        height: 15rem;
        width: 100vw;
        left: 0;
        bottom: 20rem;
    }

    .particle {
        position: relative;
        background: red;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
    }

    .particle:hover {
        background: green;
    }

    #par1 {
        left: -5rem;
        top: 1rem;
    }

    #par2 {
        left: -5rem;
        top: 3rem;
    }

    #par3 {
        left: -5rem;
        top: 6.5rem;
    }

    #par4 {
        bottom: 3.5rem;
    }

    #par5 {
        left: -0.5rem;
        bottom: 1.5rem;
    }

    #par6 {
        bottom: 3rem;
        left: 4rem;
    }

    #par7 {
        bottom: 9rem;
        left: 8rem;
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
        this.currentAnimal = "pig";
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeParticle(type = "chicken") {
        this.currentAnimal = type;
        if (this.currentAnimal === "chicken") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: yellow;
                left: -4.5rem;
                top: 2rem;
            `
        }

        if (this.currentAnimal === "pig") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: green;
            `
        }
        
        if (this.currentAnimal === "cow") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: orange;
            `
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-particle", TheParticle)