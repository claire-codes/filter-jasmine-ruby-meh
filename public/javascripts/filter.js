var findSelectedItems = function() {
  var allTypes = document.getElementsByTagName('input');
  var which = [];
  for (var i = 0; i < allTypes.length; i++) {
    if (allTypes[i].checked) {
      which.push(allTypes[i].name);
    }
  };
  return which;
}

var displayFiltered = function() {
  var itemsToShow = findSelectedItems();
  // Go through all li's and decide whether to show or hide depending on whether it's in the itemsToShow array
  var allItems = document.getElementsByTagName('li');
  // if none are checked, show everything again
  if (itemsToShow.length == 0) {
    for (var l = 0; l < allItems.length; l++) {
      allItems[l].style.display = "list-item";
    }
  } else {
    for (var i = 0; i < allItems.length; i++) {
      // Account for items with more than one category
      types = allItems[i].className.split(" ");
      for (var j = 0; j < types.length; j++) {
        if (itemsToShow.indexOf(types[j]) != -1) {
          allItems[i].style.display = "list-item";
          break;
        } else {
          allItems[i].style.display = 'none';
        }
      }
    }
  }
}
