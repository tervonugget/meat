//MUST HAVE - CREATE A TEMPLATE TAG
var template_text = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_text.innerHTML = `
<div class="text-container">
    <div class="text">
        Click a particle. 
    </div>
</div>

<style>
    .text-container {
        width: 80%;
        height: 10rem;
        position: relative;
        bottom: 15rem;
        left: 10%;
        border: 0.25rem black solid;
        border-radius: 1rem;
    }

    .text {
        color: black;
        padding: 1rem;
    }
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_text.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    handleMenuClick(type) {
        if (type === "pig") {
            this.shadowRoot.querySelector(".text").innerHTML = "Pigs are also knows as hogs or swine. Traditionally, male pigs are called boars and females are called sows.";
        }
        if (type === "chicken") {
            this.shadowRoot.querySelector(".text").innerHTML = "This is a chicken.";
        }
        if (type === "cow") {
            this.shadowRoot.querySelector(".text").innerHTML = "This is a cow.";
        }
    }
    
    pDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the shoulder of the pig.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the picnic of the pig.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the hock of the pig.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the loin of the pig.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the spare rib of the pig.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the side of the pig.";
        } else if (parnumber === 7) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the ham of the pig.";
        }
    }

    chDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the neck of the chicken.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the breast of the chicken.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the back of the chicken.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the wing of the chicken.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the thigh of the chicken.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "This is the leg of the chicken.";
        }
    }
    
    cDisplayText(parnumber) {
        if (parnumber === 1) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the chuck.</strong> A firmer cut of beef, harvested from the shoulders of cows. It is a very flavourful region of meat and can be used in many dishes. Due to its versatility and affordable nature, you are probably the most familiar with this cut of meat.";
        } else if (parnumber === 2) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the breast of the cow.</strong> Also known as the brisket, these muscles support 60% of the body weight of cattle. If cooked correctly, you will be left with a super tender, delicious cut of meat.";
        } else if (parnumber === 3) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the shank of the cow.</strong> The leg portion of the animal. Due to constant use of this muscle, this meat tends to be tough, dry, and sinewy. The shank is a very lean cut of meat and can be found in stew dishes and in low-fat ground-beef.";
        } else if (parnumber === 4) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the rib of the cow.</strong> Beef ribs can be categorised into three types. This region contains the chuck short ribs. You won’t get the most tender meat from this area but it is sure packed with flavour.";
        } else if (parnumber === 5) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the plate of the cow.</strong> This meat is typically tougher, fattier, and cheaper. It can be used as two types of steak - skirt and hanger. It can also be smoked, cured, or used for ground beef.";
        } else if (parnumber === 6) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the short loin of the cow.</strong> Coming from the back of the cattle, this is where T-bone, porterhouse, and strip steaks are harvested from. Incredibly tender.";
        } else if (parnumber === 7) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the flank of the cow.</strong> Also referred to as the London Broil, this cut of meat is from the abdominal muscles of the cow. One of the two leanest cuts of meat, it is a good all-purpose beef cut.";
        } else if (parnumber === 8) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the sirloin of the cow.</strong> This cut is located on the back of the animal. Less tender than the short loin, yet more flavourful. This cut of beef can be further separated into top sirloin and bottom sirloin.";
        } else if (parnumber === 9) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the tenderloin of the cow.</strong> The tenderloin is located beneath the ribs, next to the backbone. It is widely considered the best beef cut on the animal, as it is the most tender, flavourful piece of meat you will find on a cow. ";
        } else if (parnumber === 10) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the top sirloin of the cow.</strong> This is the most prized of the three types of sirloin. This cut offers good flavour in a thick cut, ideal for grilling.";
        } else if (parnumber === 11) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the bottom sirloin of the cow.</strong> The bottom sirloin is the largest yet least tender out of the types of sirloin. This cut of beef is usually labelled as “sirloin steak” when marked for sale.";
        } else if (parnumber === 12) {
            this.shadowRoot.querySelector(".text").innerHTML = "<strong>This is the round of the cow.</strong> A large primal cut of beef, consisting of the rear legs and rump of the cow. Due to constant use of these muscles, steaks and roasts from this cut tend to be tough.";
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)