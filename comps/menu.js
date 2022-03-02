//MUST HAVE - CREATE A TEMPLATE TAG
var template_menu = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_menu.innerHTML = `
<div class="menu-container">
    <div class="name-container">
        <div id="name">Cow</div>
    </div>
</div>

<style>
    .menu-container {
        display: inline-block;
    }

    .name-container {
        background-color: #101010;
        border-radius: 40%;
        padding: 1rem;
    }

    .name-container:hover {
        background-color: blue;
    }

    #name {
        color: white;
    }

    #name:hover {
        text-decoration: underline;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class AnimalMenu extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_menu.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".name-container > #name").innerHTML = (this.getAttribute("name"))
        this.shadowRoot.querySelector(".name-container > #name").onclick = () => {
            document.querySelector("#map-bg").changeMap(`./assets/animals/${this.getAttribute("name")}.svg`);
            if (this.shadowRoot.querySelector(".name-container > #name").innerHTML === "chicken") {
                document.querySelector(".par").changeParticle("chicken");
            }
            if (this.shadowRoot.querySelector(".name-container > #name").innerHTML === "pig") {
                document.querySelector(".par").changeParticle("pig");
            }
            if (this.shadowRoot.querySelector(".name-container > #name").innerHTML === "cow") {
                document.querySelector(".par").changeParticle("cow");
            }
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("animal-menu", AnimalMenu)