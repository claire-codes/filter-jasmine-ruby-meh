```
gem install jasmine
jasmine init
jasmine examples # delete those flippin' PlaySpec files later but it gives you a good starting structure
rake jasmine
#or
rake jasmine:ci
```

Put jQuery and jasmine-jQuery in helpers dir. Jasmine-jQuery is what we'll use to load fixtures to test with.

Make sure .js files and fixture files and specs are in the right place and you should be good to go.
