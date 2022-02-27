//MUST HAVE - CREATE A TEMPLATE TAG
var template_map = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_map.innerHTML = `
<div class="map-container">
    <img id="map" src="./assets/animals/pig-chart.svg">
</div>

<style>
    .map-container {
        background-color: red;
    }

    #map {
        background-color: red;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class AnimalMap extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_map.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("animal-map", AnimalMap)