//MUST HAVE - CREATE A TEMPLATE TAG
var template_top = document.createElement('template'); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_top.innerHTML = `
<div class="btn-container">
<button>
  BACK TO TOP
</button>
</div>

<div class="p-container">
  <p>
  Try selecting another animal :)
  </p>
</div>

<style>

  .btn-container {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

  button {
    position: absolute;
    bottom: -105rem;

    border: none;
    padding: 0.75rem;
    margin: 1rem 1rem;
    border-radius: 10%;
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease 0s;
    cursor: pointer;

    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  button:hover {
        background-color: #2EE59D;
        transform: translateY(-0.5rem);
  }

  p {
    position: absolute;
    bottom: -110rem;
  }

  .p-container {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

</style>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTop extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: 'open' }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_top.content.cloneNode(true)); //use the template to make a clone
    this.shadowRoot.querySelector("button").onclick = () => {
      document.querySelector("#top-button").toTop();
    }
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!
  toTop() {
    document.body.scrollTop - 0;
    document.documentElement.scrollTop = 0;
  }
}

//MUST HAVE - define the tag for the custom elements
customElements.define('the-top', TheTop);
