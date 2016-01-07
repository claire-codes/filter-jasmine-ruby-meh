var whichSelected = function() {
  var allTypes = document.getElementsByTagName('input');
  var which = [];
  for (var i = 0; i < allTypes.length; i++) {
    if (allTypes[i].checked) {
      which.push(allTypes[i].id);
    }
  };
  return which;
}

var testy = function() {
  return true;
}

var displayFiltered = function() {
  var checked = whichSelected();
  // Go through all li's and decide whether to show or hide depending on whether it's in the checked array
  var all = document.getElementsByTagName('li');
  // if none are checked, show everything again
  if (checked.length == 0) {
    for (var l = 0; l < all.length; l++) {
      all[l].style.display = "block";
    }
  } else {
    for (var k = 0; k < all.length; k++) {
      types = all[k].className.split(" ");
      for (var j= 0; j < types.length; j++) {
        if (checked.indexOf(types[j]) != -1) {
          all[k].style.display = "block";
          break;
        } else {
          all[k].style.display = 'none';
        }
      }
    }
  }
}
