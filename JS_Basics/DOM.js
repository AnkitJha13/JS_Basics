
# The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.



const a = document.querySelector('h1')
a.innerHTML = "changed"    // changing HTML

a.style.backgroundColor = "yellow"   // changing css

a.addEventListener('click', function(params) {     //adding eventListener
//  alert("Danger ahead")
  console.log("athena");
})
