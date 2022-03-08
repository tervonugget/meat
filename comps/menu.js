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
        border: none;
        padding: 0.75rem;
        margin: 1rem 1rem;
        border-radius: 10%;
        box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
        transition: all 0.5s ease 0s;
        cursor: pointer;
    }

    .name-container:hover {
        background-color: #2EE59D;
        transform: translateY(-0.5rem);
    }

    #name {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    #name:hover {
        text-decoration: none;
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
                document.querySelector("#text").handleMenuClick("chicken");
                document.querySelector('#carcass').changeCarcass("chicken");
                document.querySelector('#carcass').changeCarcassText("chicken");
                document.querySelector('#calc').deathInterval("chicken");
            }
            if (this.shadowRoot.querySelector(".name-container > #name").innerHTML === "pig") {
                document.querySelector(".par").changeParticle("pig");
                document.querySelector("#text").handleMenuClick("pig");
                document.querySelector('#calc').deathInterval("pig");
                document.querySelector("#carcass").changeCarcass("pig");
                document.querySelector("#carcass").changeCarcassText("pig");
            } 

            if (this.shadowRoot.querySelector(".name-container > #name").innerHTML === "cow") {
                document.querySelector(".par").changeParticle("cow");
                document.querySelector("#text").handleMenuClick("cow");
                document.querySelector('#carcass').changeCarcassText("cow");
                document.querySelector('#calc').deathInterval("cow"); 
            }
            this.changeMenuBg();  
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeMenuBg(type = 'pig') {
        this.shadowRoot.querySelector(".name-container").style.cssText = `
        background: #2EE59D;
        `

        if(this.getAttribute("name")==='pig'){
            document.querySelector("#cow").resetBG();
            document.querySelector("#chicken").resetBG();
            //reset chicken as well
        }

        if(this.getAttribute("name")==='chicken'){
            document.querySelector("#pig").resetBG();
            document.querySelector("#cow").resetBG();
        }

        if(this.getAttribute("name")==='cow'){
            document.querySelector("#pig").resetBG();
            document.querySelector("#chicken").resetBG();
        }
    // } else if (this.currentAnimal != type) {
    //     this.shadowRoot.querySelector(".name-container").style.cssText = `
    //     bacground: #FFFFFF;
    //     `
    // }
    
    
    console.log("hi");
    
    }

    resetBG(){
        //resets the background color to white
        this.shadowRoot.querySelector(".name-container").style.cssText = `
        background: #fffff;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("animal-menu", AnimalMenu)