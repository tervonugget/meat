//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrolltexttwo = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrolltexttwo.innerHTML = `
<style>
.head {
  position:relative;
  transition:left 1s;
  left:-10vw;
  width:50%;
  height:555px;
  margin:90px 0;
  filter: opacity(0);
}
</style>
    <h2 class='head'> Hey</h2>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollTextTwo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrolltexttwo.content.cloneNode(true)); //use the template to make a clone

        //assign variables!
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    SlideRightTwo(){
        this.shadowRoot.querySelector(".head").style.cssText = `
            left:20vw;
            filter: opacity(1);
        `
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-text-two", ScrollTextTwo)

//HOW CAN I HELP? You don’t have to cut out meat entirely to make a difference.
// By making small sacrifices and making conscious purchasing decisions, we can all contribute to a better world. 

//Opt for products from animals that haven't been tortured. When purchasing meat, egg, or dairy products, 
//look for obvious animal welfare labeling on the packaging.

//Eliminate one animal product from one meal each day (e.g. drop the sausage at breakfast, grilled chicken from your salad, 
//or bacon from your club sandwich).