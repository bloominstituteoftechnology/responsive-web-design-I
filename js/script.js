var form = document.getElementById("contact-form");


function formButton() {
    x = document.getElementsByClassName("hideme")[0];
    x.classList.remove("hideme");
    window.scrollTo(0,document.body.scrollHeight);
}
window.onload = resize;
window.onresize = resize;

function resize() {
    if (document.body.offsetWidth <= 800) {
        x = document.getElementById("jshelper");
        x.classList.remove("sticky-top");
    }
    if (document.body.offsetWidth > 800) {
        x = document.getElementById("jshelper");
        x.classList.add("sticky-top");
    }
    if (document.body.offsetWidth > 500) {
        x = document.getElementById("jshelper");
        x.classList.add("navbar-expand");
    }
    if (document.body.offsetWidth <= 500) {
        x = document.getElementById("jshelper");
        x.classList.remove("navbar-expand");


    }
    
    if (document.body.offsetWidth < 501) {
        if (document.getElementById("c1") != undefined) {
        x = document.getElementById("c1");
        x.classList.add("hideme");
        }
        if (document.getElementById("navservice") != undefined) {
        y = document.getElementById("navservice");
        y.classList.remove("hideme");
        } 
    }

    if (document.body.offsetWidth > 500) {
        if (document.getElementById("c1") != undefined) {
        x = document.getElementById("c1");
        x.classList.remove("hideme");
        }
        if (document.getElementById("navservice") != undefined) {
        y = document.getElementById("navservice");
        y.classList.add("hideme");
        } 
    }


    if (document.body.offsetWidth < 501) {
        x = document.getElementById("show-sm");
        y = document.getElementById("show-md");
        z = document.getElementById("show-lg");
        y.classList.add("hideme");
        z.classList.add("hideme");
        x.classList.remove("hideme");
    }

    if (document.body.offsetWidth > 500 && document.body.offsetWidth < 801) {
        x = document.getElementById("show-sm");
        y = document.getElementById("show-md");
        z = document.getElementById("show-lg");
        x.classList.add("hideme");
        y.classList.remove("hideme");
        z.classList.add("hideme");

    }

    if (document.body.offsetWidth > 800) {
        x = document.getElementById("show-sm");
        y = document.getElementById("show-md");
        z = document.getElementById("show-lg");
        x.classList.add("hideme");
        y.classList.add("hideme");
        z.classList.remove("hideme");
    } 


}