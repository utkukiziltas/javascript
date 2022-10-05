

const templete = document.createElement('template');
templete.innerHTML=`
<h5></h5>
<br>
<img src="" width="200px">
<br>
<p></p>
<br>
<button id="toggle-hide">içeriği gizle</button>
`


class blog extends HTMLElement {
    constructor() {
        super();
        this.showInfo = false;



        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templete.content.cloneNode(true));
            this.shadowRoot.querySelector('h5').innerHTML
            =this.getAttribute('title');
        this.shadowRoot.querySelector('img').src
            =this.getAttribute('img');
        this.shadowRoot.querySelector('p').innerHTML
            =this.getAttribute('content');
        this.toggleButton = this.shadowRoot.querySelector("#toggle-hide");
    }

    toggleInfo(){
        this.showInfo = !this.showInfo;
       if (this.showInfo){
           this.toggleButton.innerHTML ="içeriği göster";
           this.shadowRoot.querySelector("p").style.display="none";
       }else{
           this.toggleButton.innerHTML ="içeriği gizle";
           this.shadowRoot.querySelector("p").style.display="revert";
       }
    }

    connectedCallback(){
        this.toggleButton.
            addEventListener('click',() =>this.toggleInfo())
    }

}


window.customElements.define('blog-col',blog);




