```
gem install jasmine
jasmine init
jasmine examples # delete those flippin' PlaySpec files later but it gives you a good starting structure
rake jasmine
# or
rake jasmine:ci
```

Put jQuery and jasmine-jQuery in helpers dir. Jasmine-jQuery is what we'll use to load fixtures to test with.

Make sure .js files and fixture files and specs are in the right place and you should be good to go.

## Mimicking events with JavaScript

Changing properties with JavaScript does not trigger actions attached to the `onchange` event. You have to manually propagate an event.

```
document.querySelector(selector).dispatchEvent(new Event('change'));
```

### :bug: BUG

Running this with Jasmine in the browser worked fine, but doing it headlessly failed due to PhantomJS not liking the Event constructor `new Event()`. This is a known bug: [https://github.com/ariya/phantomjs/issues/11289](https://github.com/ariya/phantomjs/issues/11289)

I used the workaround given on that page and use:

```
var evt = document.createEvent('CustomEvent');
evt.initCustomEvent('change', false, false, null);
document.querySelector(selector).dispatchEvent(evt);
```

# Filter

Goals was to implement a filter in the form of checkboxes that would hide/show items depending on the selected boxes, in __Vanilla JS__.

The code is tightly coupled to the HTML implementation: it depends on the structure in terms of class names and tags used to represent items and checkboxes.

Perhaps use a data-attribute to hold categories instead of classes.

You can see it in action by looking at `public/filter.html` - this is __not__ the same file that is used in the tests: that lives in the fixtures folder.

:beetle:
