//MUST HAVE - CREATE A TEMPLATE TAG
var template_calc = document.createElement('template'); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_calc.innerHTML = `

<div class="calc-container">
  <div class="invert">
  <div class="calc-text">
    In the time you've spent on this site,
  </div>
  <div id="death-number">
    0
  </div>
  <div class="calc-text">
    pigs have been killed.
  </div>
  </div>
</div>

<style>
  #death-number {
    font-size: 8rem;
    font-weight: bold;
    color: red;
  }

  .calc-text {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }

  .calc-container {
    background-color: #202020;
    padding: 5rem;
  }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheCalculation extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: 'open' }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_calc.content.cloneNode(true)); //use the template to make a clone
    this.timer = null;
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!
  deathInterval(type) {
    this.shadowRoot.querySelector("#death-number").innerHTML = 0;
    if (this.timer != null) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(()=>this.deathCount(type), 1000);
  }

  deathCount(type) {
    let count = this.shadowRoot.querySelector('#death-number').innerHTML;
    if (type === 'pig') {
      count = Number(count);
      count = count + 47;
      console.log(count);
      this.shadowRoot.querySelector('#death-number').innerHTML = count;
    }
  }
}

//MUST HAVE - define the tag for the custom elements
customElements.define('the-calculation', TheCalculation);
