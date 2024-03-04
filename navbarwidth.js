// ------------------control side nav----------------
var ul = document.getElementsByTagName("ul")[0];
var header = document.getElementById("header");// to manage it's width
var button = document.getElementById("nav1-bars");
var headarSpan = document.getElementsByClassName('headar-span');
var container1Left = document.getElementsByClassName('toggel-div');
// console.log(headarSpan);

// console.log(ul);
button.addEventListener('click', manageNavWidth);
function manageNavWidth(){
    // console.log('done');
    var currentWidth = header.offsetWidth;
    var maxWidth = 230; // Initial width
    var minWidth = 50; // Minimum width you desire
  
    // If current width is equal to maximum width, toggle to minimum width, else toggle to maximum width
    if (currentWidth === maxWidth) {
        // headarSpan.style.display = 'none';
        for (const item of headarSpan) {
            item.style.display = 'none';
          
            for(const item of container1Left){
                item.classList.remove('container1-left');
            }
        }
        
        header.style.width = minWidth + "px";



    } else {
        for (const item of headarSpan) {
        header.style.width = maxWidth + "px";

            item.style.display = '';
            for(const item of container1Left){
                item.classList.add('container1-left')
            }
            
        }
        

    }
}

// ------------end control sid nav----------

// --------------start toggel-light-------------
var onOff = document.getElementsByClassName('toggel-light');
var lamp = document.getElementsByClassName('lamp-light');

for(const item of onOff){
    item.addEventListener("change", ()=>{
        console.log("true");
        for(const item of lamp){
            lamp.classList.remove("remove");
        }

    })
}






// ------------------end toggel-light------------