function createMeWhatId(where, what, id) {
  var mycont = document.createElement(what);
  if (id != "non") {
    mycont.id = id;
  }

  document.getElementById(where).appendChild(mycont);
}
function createMeWhat(where, what, id, classname) {
  var mycont = document.createElement(what);
  if (id != "non") {
    mycont.id = id;
  }
  if (classname != "non") {
    mycont.className = classname;
  }

  document.getElementById(where).appendChild(mycont);
}
function createMeWhatClass(where, what, classname) {
  var mycont = document.createElement(what);
  if (classname != "non") {
    mycont.className = classname;
  }
  document.getElementById(where).appendChild(mycont);
}
function cParagraphContent(where, what, content, classname) {
  var mycont = document.createElement(what);
  if (classname != "non") {
    mycont.className = classname;
  }
  var cont = document.createTextNode(content);
  mycont.appendChild(cont);
  document.getElementById(where).appendChild(mycont);
}

function simpleText(id, content) {
  var td1 = document.getElementById(id);
  var text = document.createTextNode(content);
  td1.appendChild(text);
}

function createTerminal(where) {
  document.getElementById(vhere).innerHTML = "";
  createMeWhat(vhere, 'table', 'terminalspace', 'non');
  createMeWhat('terminalspace', 'tr', 'terminalWindowSpace', 'non');
  createMeWhat('terminalWindowSpace', 'textarea', 'terminalWindow', 'terminalWindow');
  document.getElementById("terminalWindow").rows = "25";
  document.getElementById("terminalWindow").cols = "40";
  document.getElementById("terminalWindow").readOnly = true;
  createMeWhat('terminalspace', 'tr', 'terminalCMDSpace', 'non');
  createMeWhat('terminalspace', 'tr', 'terminalCMDSpace', 'non');
  createMeWhat('terminalCMDSpace', 'input', 'commandWindow', 'terminalWindow');
  document.getElementById("commandWindow").type = "text";
  document.getElementById("commandWindow").size = "40";
  document.getElementById("commandWindow").onchange = resolve;
}

function clearId(where) {
  document.getElementById(vhere).innerHTML = "";
}
function clearClass(where) {
  document.getElementsByClassName(vhere).innerHTML = "";
}
function setInId() {

}
function setInClass() {

}

function printhelp(){
  var helpmsg = "Methods: \n";
  helpmsg = helpmsg + "help: print this!\n";
  helpmsg = helpmsg + "clearId: wipe content inside element with specific ID\n";
  helpmsg = helpmsg + "use: clearId id\n";
  helpmsg = helpmsg + "clearClass: \n";
  helpmsg = helpmsg + "use: clearClass classname \n";
  helpmsg = helpmsg + "createMeWhat: create specific element\n";
  helpmsg = helpmsg + "use: createMeWhat where(Id) element elementId elementClassname\n";
  helpmsg = helpmsg + "for element without clas or Id type non on specific place\n";
  helpmsg = helpmsg + "\n";
  helpmsg = helpmsg + "\n";
  helpmsg = helpmsg + "\n";
  helpmsg = helpmsg + "\n";
  helpmsg = helpmsg + "\n";
  document.getElementById("terminalWindow").value = helpmsg;
}

function resolve() {
  var arrToSeparate = document.getElementById("commandWindow").value;
  var separator = ' ';
  var command = arrToSeparate.split(separator);
  if (command[0] == "help") {
    printhelp();
  }
  else if (createTerminal) {

  }
  else if (clearClass) {

  }
  else if (clearId) {

  }
  else if (simpleText) {

  }
  else if (cParagraphContent) {

  }
  else if (createMeWhatClass) {

  }
  else if (createMeWhat) {

  }
  else if (createMeWhatId) {

  }
}
