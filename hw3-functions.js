
/**
 * Created by Hans Dulimarta
 * TODO: Add your name below this line
 * @author Tyler Bruder
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
  var numElements = 0;
  const klaz = document.getElementById(rootId);
  var child = klaz.childNodes;

  for (var i = 0; i < child.length; i++) {
    if (child[i].getAttribute("id") != null) {
      child[i].className = klazName;
      numElements++;
    }
  }
  return numElements;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
  //logic from https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
  const quote = new LoremIpsum();
  const info = document.getElementsByClassName("table-home");
  //getting given number of rows
  var numRows = info[0].getAttribute("data-gv-row");
  //adding 1 at function call so its never null 
  numRows++;
  //getting given number of columns
  var numcols = info[0].getAttribute("data-gv-column");

  var newTable = document.createElement("table");
  var body = document.createElement("table");
  newTable.appendChild(body);

  for (var i = 0; i < numRows; i++) {
    //creates number of rows in new table based off random value given
    var tr = document.createElement("tr");
    body.appendChild(tr);
  }

  for (var j = 0; j < numcols; j++) {
    if (i == 0) {
      var header = document.createElement("th");
      tr.appendChild(header);
    }
    else {
      var td = document.createElement("td");
      let quotes = quote.generate(4);
      td.appendChild(document.createTextNode(quotes));
      tr.appendChild(td);
    }
  }
  info[0].appendChild(body);
}
