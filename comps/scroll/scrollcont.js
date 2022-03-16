//MUST HAVE - CREATE A TEMPLATE TAG
//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrollcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrollcont.innerHTML = `
<style>
    #cont {
        position:relative;
        marging-bottom:0;
        left:0;
        top:60rem;
        width:100vw;
        height:100vh;
        overflow-y:auto;
        overflow-x:none;
    }
    #bacon {
        height:2700px;
        width: 100%;
        object-fit: cover;
    }
</style>
<div id='cont'>
        <scroll-text id="scroll1"></scroll-text>
        <img id="bacon" src="./assets/images/bacon.svg">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollCont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrollcont.content.cloneNode(true)); //use the template to make a clone
        //style the main container!

        //e -> event object from your browser (mouse / keyboard / hardware events...)
        //e.target -> elemetns / <tag> the even is happening on
        //e.target.scrollTop -> a data about how far the scroll bar is if scroll is available for the element
        this.shadowRoot.querySelector("#cont").onscroll = (e) => this.HandleContScroll(e.target.scrollTop);
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleContScroll(scrollNum=0){ //var scrollNum = e.target.scrollTop
        console.log("scroll", scrollNum);
        if(scrollNum > 1){
            //first scroll-text to slide right;
            this.shadowRoot.querySelector("#scroll1").SlideRight();
        }
        //  if(scrollNum > 400){
        //     this.shadowRoot.querySelector("#scroll2").SlideRight();
        //  }
        // if(scrollNum > 600){
        //     this.shadowRoot.querySelector("#scroll3").SlideRight();
        // }
        // if(scrollNum > 800){
        //     this.shadowRoot.querySelector("#scroll4").SlideRight();
        // }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-cont", ScrollCont)