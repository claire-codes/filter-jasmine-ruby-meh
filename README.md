# Displayed Items Filter

The initial goal was to implement a filter in the form of checkboxes that would hide/show categories of items depending on the selected boxes, in __Vanilla JS__. I obviously wanted to test it so it also turned into an excuse to learn how fixtures work in Jasmine.

The code is tightly coupled to the HTML implementation: it depends on the structure in terms of class names and tags used to represent items and checkboxes.

Perhaps use a data-attribute to hold categories instead of classes.

You can see it in action by looking at `public/filter.html` - this is __not__ the same file that is used in the tests: that lives in the fixtures folder.

## Fixtures with Jasmine-jQuery

This is my current solution to testing DOM functionality with Jasmine. Using Jasmine-jQuery you can set up a piece of HTML that can be manipulated by the JavaScript under test.

I ended up using Ruby to set it all up - I always find Jasmine a pain to get going.

```
gem install jasmine
jasmine init
jasmine examples # delete those flippin' PlaySpec files later but it gives you a good starting structure
rake jasmine
# or
rake jasmine:ci
```

Put jQuery and jasmine-jQuery in helpers dir.

Make sure .js files and fixture files and specs are in the right place and you should be good to go.

## Mimicking events with JavaScript

Changing properties or attributes with JavaScript, like checking a checkbox, does not trigger actions attached to the `onchange` event. Instead you have to manually propagate an event.

```
document.querySelector(selector).dispatchEvent(new Event('change'));
```

### :bug: PhantomJS Bug

Running this with Jasmine in the browser worked fine, but doing it headlessly failed due to PhantomJS not liking the Event constructor `new Event()`. This is a known bug: [https://github.com/ariya/phantomjs/issues/11289](https://github.com/ariya/phantomjs/issues/11289)

I used the workaround given on that page and changed my code to:

```
var evt = document.createEvent('CustomEvent');
evt.initCustomEvent('change', false, false, null);
document.querySelector(selector).dispatchEvent(evt);
```

:beetle:
