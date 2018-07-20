# Does your new code break current functionality?
Now you don't need to worry! With this group of test suites, you can be sure your new code doesn't interfere with a perfectly working app! 

## Make your code safe and sound
Start a local web server and make sure you're serving index.html. From there, head to the bottom of the page. You'll see the Jasmine SpecRunner. Right now, the feed behaves as you'd expect - it loads an inital feed, it switches over to new feeds when you call the loadFeed() method with an array index, and the menu opens / closes wehen you click the hamburger! If for some reason your new code breaks this functionality, Jasmine will let you know. 

# Write your own tests!
When adding some fancy new features, write new tests in feedreader.js to 
    1. Make sure they work as expected, and 
    2. Don't totally muck up what you've already made