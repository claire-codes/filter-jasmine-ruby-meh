var checkBox = function(selector) {
  $(selector).prop('checked', true);
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent('change', false, false, null);
  document.querySelector(selector).dispatchEvent(evt);
}

var unCheckBox = function(selector) {
  $(selector).prop('checked', false);
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent('change', false, false, null);
  document.querySelector(selector).dispatchEvent(evt);
}

describe("A suite", function() {
  beforeEach(function() {
    loadFixtures('filter.html');
  });

  it("shows foo when foo is selected", function() {
    checkBox('#foo-check');
    expect($('#foo-link')).toBeVisible();
    expect($('#bar-link')).not.toBeVisible();
    expect($('#foo-bar-link')).toBeVisible();
  });

  it("shows bar when bar is selected", function() {
    checkBox('#bar-check');
    expect($('#foo-link')).not.toBeVisible();
    expect($('#bar-link')).toBeVisible();
    expect($('#foo-bar-link')).toBeVisible();
  });

  it("shows foo and bar when foo and bar is selected", function() {
    checkBox('#bar-check');
    checkBox('#foo-check');
    expect($('#foo-link')).toBeVisible();
    expect($('#bar-link')).toBeVisible();
    expect($('#foo-bar-link')).toBeVisible();
  });

  it("shows everything when nothing is selected", function() {
    checkBox('#bar-check');
    checkBox('#foo-check');
    unCheckBox('#foo-check');
    unCheckBox('#bar-check');
    expect($('#foo-link')).toBeVisible();
    expect($('#bar-link')).toBeVisible();
    expect($('#foo-bar-link')).toBeVisible();
  });
});
