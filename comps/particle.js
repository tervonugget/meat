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
<div class="particle" id="par8"></div>
<div class="particle" id="par9"></div>
<div class="particle" id="par10"></div>
<div class="particle" id="par11"></div>
<div class="particle" id="par12"></div>
</div>

<style>
    .particle-container {
        position: relative;
        display: grid;
        place-content: center;
        z-index: 1;
        height: 15rem;
        width: 100vw;
        left: 0;
        bottom: 20rem;
    }

    .particle {
        position: relative;
        background: #fa8b23;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
    }

    .particle:hover {
        background-color: white;
    }

    

    #par1 {
        left: -4.75rem;
        top: 0.25rem;
    }

    #par2 {
        left: -4.75rem;
        top: 4rem;
    }

    #par3 {
        left: -4.75rem;
        top: 6.5rem;
    }

    #par4 {
        left: -0.5rem;
        bottom: 4.25rem;
    }

    #par5 {
        left: -0.5rem;
        bottom: 0.5rem;
    }

    #par6 {
        bottom: 2rem;
        left: 4rem;
    }

    #par7 {
        bottom: 8.75rem;
        left: 8rem;
    }

    #par8 {
        display: none;
    }
    
    #par9 {
        display: none;
    }
    
    #par10 {
        display: none;
    }
    
    #par11 {
        display: none;
    }
    
    #par12 {
        display: none;
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

        // Check particle, current animal, call appropriate function/text
        this.shadowRoot.querySelector("#par1").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(1);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(1);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(1);
            }
        }
        this.shadowRoot.querySelector("#par2").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(2);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(2);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(2);
            }
        }
        this.shadowRoot.querySelector("#par3").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(3);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(3);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(3);
            }
        }
        this.shadowRoot.querySelector("#par4").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(4);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(4);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(4);
            }
        }
        this.shadowRoot.querySelector("#par5").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(5);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(5);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(5);
            }
        }
        this.shadowRoot.querySelector("#par6").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(6);
            } else if (this.currentAnimal === "chicken") {
                document.querySelector("#text").chDisplayText(6);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(6);
            }
        }
        this.shadowRoot.querySelector("#par7").onclick = () => {
            if (this.currentAnimal === "pig") {
                document.querySelector("#text").pDisplayText(7);
            } else if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(7);
            }
        }
        this.shadowRoot.querySelector("#par8").onclick = () => {
            if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(8);
            }
        } 
        this.shadowRoot.querySelector("#par9").onclick = () => {
            if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(9);
            }
        }
        this.shadowRoot.querySelector("#par10").onclick = () => {
            if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(10);
            }
        }
        this.shadowRoot.querySelector("#par11").onclick = () => {
            if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(11);
            }
        }
        this.shadowRoot.querySelector("#par12").onclick = () => {
            if (this.currentAnimal === "cow") {
                document.querySelector("#text").cDisplayText(12);
            }
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeParticle(type = "pig") {
        this.currentAnimal = type;
        if (this.currentAnimal === "pig") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par2").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par3").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par4").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par5").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par6").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par7").style.cssText = `
                background: #fa8b23;
            `
            this.shadowRoot.querySelector("#par8").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par9").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par10").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par11").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par12").style.cssText = `
                display: none;
            `
        }
        if (this.currentAnimal === "chicken") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: yellow;
                left: -4rem;
                top: 1rem;
            `
            this.shadowRoot.querySelector("#par2").style.cssText = `
                background: yellow;
                left: -4rem;
                top: 2.5rem;
            `
            this.shadowRoot.querySelector("#par3").style.cssText = `
                background: yellow;
                left: 0rem;
                top: -1.25rem;
            `
            this.shadowRoot.querySelector("#par4").style.cssText = `
                background: yellow;
                left: 0rem;
                top: -0.5rem;
            `
            this.shadowRoot.querySelector("#par5").style.cssText = `
                background: yellow;
                left: 0rem;
                top: 1rem;
            `
            this.shadowRoot.querySelector("#par6").style.cssText = `
                background: yellow;
                left: 2rem;
                top: -0.5rem;
            `
            this.shadowRoot.querySelector("#par7").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par8").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par9").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par10").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par11").style.cssText = `
                display: none;
            `
            this.shadowRoot.querySelector("#par12").style.cssText = `
                display: none;
            `
        }
        if (this.currentAnimal === "cow") {
            this.shadowRoot.querySelector("#par1").style.cssText = `
                background: lightgreen;
                left: -2.25rem;
                top: 5rem;
            `
            this.shadowRoot.querySelector("#par2").style.cssText = `
                background: lightgreen;
                left: -2.25rem;
                top: 7.5rem;
            `
            this.shadowRoot.querySelector("#par3").style.cssText = `
                background: lightgreen;
                left: -2.25rem;
                top: 8.75rem;
            `
            this.shadowRoot.querySelector("#par4").style.cssText = `
                background: lightgreen;
                left: 1rem;
                top: 0.5rem;
            `
            this.shadowRoot.querySelector("#par5").style.cssText = `
                background: lightgreen;
                left: 1rem;
                top: 3rem;
            `
            this.shadowRoot.querySelector("#par6").style.cssText = `
                background: lightgreen;
                left: 3.75rem;
                top: -2.5rem;
            `
            this.shadowRoot.querySelector("#par7").style.cssText = `
                background: lightgreen;
                left: 3.75rem;
                top: 0rem;
            `
            this.shadowRoot.querySelector("#par8").style.cssText = `
                display: block;
                background: lightgreen;
                left: 6rem;
                top: -8rem;
            `
            this.shadowRoot.querySelector("#par9").style.cssText = `
                display: block;
                background: lightgreen;
                left: 6rem;
                top: -7.75rem;
            `
            this.shadowRoot.querySelector("#par10").style.cssText = `
                display: block;
                background: lightgreen;
                left: 6rem;
                top: -7.5rem;
            `
            this.shadowRoot.querySelector("#par11").style.cssText = `
                display: block;
                background: lightgreen;
                left: 6rem;
                top: -7.25rem;
            `
            this.shadowRoot.querySelector("#par12").style.cssText = `
                display: block;
                background: lightgreen;
                left: 9rem;
                top: -11.5rem;
            `
        }

    }

    pigParticles(animalParticle) {
        if (animalParticle === "p1") {
            document.querySelector("#text").pDisplayText(1);
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-particle", TheParticle)