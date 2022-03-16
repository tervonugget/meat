//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrolltext = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrolltext.innerHTML = `
<style>
h1 {
  position:absolute;
  transition:left 1s;
  left:-10vw;
  top:0;
  width:50%;
  height:70px;
  margin:80px 0px 30px 0;
  filter: opacity(0);
  color:white;
  font-size:4rem;
}
h2 {
    position:absolute;
    transition:left 1s;
    left:-10vw;
    top:35rem;
    width:50%;
    height:5px;
    margin: 0;
    filter: opacity(0);
    color:white;
  }
</style>
    <h1 class='head'>HOW CAN YOU HELP?</h1>
    <h2 
    class='subhead'>You don’t have to force yourself to be vegan to make a difference.
    <br><br>
    By making small sacrifices and making conscious purchasing decisions, we can all contribute to a better world.
    <br><br>
    Substitute some of your meat with plant based alternatives. Try getting the plant based burger instead of your usual beef or chicken burger
    <br><br>
    Donate to animal protection organizations that focus on helping farm animals. These organizations help defend the horrific treatment and suffering of these animals.
    <br><br>
    Spread the awareness. More than a third of children don’t know how our meat is processed, educating them at a young age will let them be more aware of how their meat ends up on their plate.
    </h2>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrolltext.content.cloneNode(true)); //use the template to make a clone

        //assign variables!
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    SlideRight(){
        this.shadowRoot.querySelector(".head").style.cssText = `
            left:30vw;
            filter: opacity(1);
        `
        this.shadowRoot.querySelector(".subhead").style.cssText = `
            left:30vw;
            filter: opacity(1);
        `
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-text", ScrollText)

//HOW CAN I HELP? You don’t have to cut out meat entirely to make a difference.
// By making small sacrifices and making conscious purchasing decisions, we can all contribute to a better world. 

//Opt for products from animals that haven't been tortured. When purchasing meat, egg, or dairy products, 
//look for obvious animal welfare labeling on the packaging.

//Eliminate one animal product from one meal each day (e.g. drop the sausage at breakfast, grilled chicken from your salad, or bacon from your club sandwich).