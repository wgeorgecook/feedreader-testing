/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Loops through the feeds and makes sure they're
        // defined and not empty
        it('should have associated urls', function() {
            for (item of allFeeds) {
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
            };
        });


        // Loops through the feeds and makes sure the associated
        // names are defined and not empty
        it('should have associated names', function() {
            for (item of allFeeds) {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);
            };
        });
    });


    
    describe('The menu', function() {
        
        // Verifies the menu will hide and show as appropriate
        const bodyEl = $('body');
        it('should be hidden by default', function() {
            // Check for the menu-hidden class on the body
            expect(bodyEl.hasClass('menu-hidden')).toBe(true);
        });

        
        it('should display and hide when menu is clicked', function() {
            // Make sure the body loses the menu-hidden class when we
            // click the menuIcon
            const menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(bodyEl.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(bodyEl.hasClass('menu-hidden')).toBe(true);
        });
        
    });

    // Verifies the loadFeed function generates a set of initial items
    describe('Initial entries', function() {
        // Ensures that the initial items have properties
        // Call the loadFeed function before each spec
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Check the feed element for children, and make sure the first
        // child has an entry associated with it
        it('should be populated', function(done) {
            const feed = $('.feed');
            expect(feed.children(0).hasClass('entry-link')).toBe(true);
            done();
        });
    });

    // Ensures new feeds load when called
    describe('New Feed Selection', function() {
        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        const feed = $('.feed');
        let urlNow;
        let urlBefore;
        
       
        // Call the loadFeed function before each spec
        beforeEach(function(done) {
            loadFeed(0, function() {
                // Save the first entry URL before loading the new feed
                urlBefore = feed.children(0)[0].href;
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function() {
                // Save the new first entry URL
                urlNow = feed.children(0)[0].href;
                done();
            });
        });
     
        it('should update content', function(done) {
            // Compare the new first entry URL to the saved first one
            expect(urlBefore).not.toEqual(urlNow);
            done();
        });
    });
