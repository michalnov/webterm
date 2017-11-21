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
  if (what == "video") {
    if (mycont.canPlayType("video/mp4")) {
        mycont.setAttribute("src","");
    } else {
        mycont.setAttribute("src","movie.ogg");
    }
    //mycont.setAttribute("width", "320");
    //mycont.setAttribute("height", "240");
    mycont.setAttribute("controls", "controls");
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
  document.getElementById(where).innerHTML = "";
  createMeWhat(where, 'table', 'terminalspace', 'non');
  createMeWhat('terminalspace', 'tr', 'terminalWindowSpace', 'non');
  createMeWhat('terminalWindowSpace', 'textarea', 'terminalWindow', 'terminalWindow');
  document.getElementById("terminalWindow").rows = "25";
  document.getElementById("terminalWindow").cols = "80";
  document.getElementById("terminalWindow").readOnly = true;
  createMeWhat('terminalspace', 'tr', 'terminalCMDSpace', 'non');
  createMeWhat('terminalCMDSpace', 'input', 'commandWindow', 'terminalWindow');
  document.getElementById("commandWindow").type = "text";
  document.getElementById("commandWindow").size = "80";
  document.getElementById("commandWindow").onchange = resolve;
  createMeWhat('terminalspace', 'tr', 'colorpick', 'non');
  createMeWhat('colorpick', 'input', 'picker', 'non');
  document.getElementById("picker").type = "color";
}

function clearId(where) {
  document.getElementById(where).innerHTML = "";
}
function clearClass(where) {
  document.getElementsByClassName(where).innerHTML = "";
}
function setInId(where, atribute, newWalue) {
  var tochange = document.getElementById(where);
  if (atribute == "src") {
    tochange.src = newWalue;
  }
  else if (atribute == "width") {
    tochange.width  = newWalue;
  }
  else if (atribute == "height") {
    tochange.height = newWalue;
  }
  else if (atribute == "color") {
    newWalue = document.getElementById("picker").value;
    tochange.style.color = newWalue;
  }
  else if (atribute == "bgcolor") {
    newWalue = document.getElementById("picker").value;
    tochange.style.backgroundColor = newWalue;
  }
  else if (atribute == "bgimg") {
    tochange.backgroundImage = newWalue;
  }
  else if (atribute == "value") {
    tochange.value = newWalue;
  }
}
function setInClass() {

}

function ParagraphContent(where, what, content, classname) {
  var mycont = document.createElement(what);
  if (classname != "non") {
    mycont.className = classname;
  }
  var cont = document.createTextNode(content);
  mycont.appendChild(cont);
  document.getElementById(where).appendChild(mycont);
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
  helpmsg = helpmsg + "PContent: where what content className\n";
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

  var what = 'non';
  var where = 'non';
  var atribute = 'non';
  var newWalue = 'non';
  var Id = 'non';
  var className = 'non';


  if (command[0] == "help") {
    printhelp();
  }
  else if (command[0] == "clear") {
    document.getElementById("commandWindow").value = "";
  }
  else if (command[0] == "clearClass") {

  }
  else if (command[0] == "clearId") {

  }
  else if (command[0] == "PContent") {
    where = command[1];
    what = command[2];
    content = command[3];
    className = command[4];
    ParagraphContent(where, what, content, className);
  }
  else if (command[0] == "cParagraphContent") {

  }
  else if (command[0] == "createMeWhat") {
    where = command[1];
     what = command[2];
      Id = command[3];
      className  = command[4];
    createMeWhat(where, what, Id, className);
  }
  else if (command[0] == "setInClass") {
    where  = command[1];
    atribute = command[2];
    newWalue = command[3];
    setInClass(where, atribute, newWalue);
  }
  else if (command[0] == "setInId") {
    where  = command[1];
    atribute = command[2];
    newWalue = command[3];
    setInId(where, atribute, newWalue);
  }
}
