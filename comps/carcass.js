//MUST HAVE - CREATE A TEMPLATE TAG
var template_carcass = document.createElement('template'); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_carcass.innerHTML = `

<div class="carcass-container">
  <img id="carcass" src="./assets/animals/pig-carcass.svg">
  <p id="carcass-text">The average person eats 27 pigs in their lifetime.</p>
</div>

<style>
  .carcass-container {
    position: absolute;
    left: 10%;
    width: 80%;
    display: grid;
    template-grid-columns: 1fr;
    place-items: center;
  }

  #carcass {
    max-height: 100vh;
    opacity: 50%;
    filter: drop-shadow(0.5rem 0.5rem 0.5rem black);

  }

  #carcass-text {
    font-size: 5rem;
    font-weight: bold;
    position: relative;
    bottom: 45rem;
    color: white;
    filter: drop-shadow(0.5rem 0.5rem 0.5rem black);
  }

</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheCarcass extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: 'open' }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_carcass.content.cloneNode(true)); //use the template to make a clone
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define('the-carcass', TheCarcass);
