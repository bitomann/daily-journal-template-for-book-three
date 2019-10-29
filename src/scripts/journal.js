import API from "./data.js"
import renderDom from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
.then(entries => renderDom.renderJournalEntries(entries))


document.getElementById("recordEntry").addEventListener("click",() => {
    event.preventDefault()
console.log("something")
} )

function recordEntry() {
    console.log("record entry")
   
  }


  document.querySelectorAll("input");
  
  console.log()
