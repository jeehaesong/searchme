*search me*  - autocomplete feature demo on search box


### To getting started : `yarn start`

Open [http://localhost:3000](http://localhost:3000) to see 'Search me' in the browser.


### To build: `yarn build`

Build the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.


### To test: `yarn test`

Launches the test runner in the interactive watch mode.<br>

### Thought Process

The goal of 'search me' is to show a simple autocomplete feature within a search box. In this app, you can search within a limited set of 'cities' and 'books'. when the user types at least three characters into the input box, it lists results that best match the user input (in this case, finds all items that have the search string).

Cities and books behave similarly, the only difference is that 'cities' is an array of strings while 'books' in an array of JavaScript objects.
Since JS objects in 'books' have two keys, the requirement is to search only by the 'title' property, not the 'author' property.

Thus, I decided to create a High-Order-Component called 'withSearch'. When passing the component 'Books' and 'Cities' to 'withSearch', the HOC should be provide a search bar and able to handle the two different types of data (one is an array of strings, and the other is an array of objects).
I am assuming that the data could come in a JSON format for an app of this type. Therefore, instead of having 'cities' and 'books' as global variables, I created a Data.json sile and imported into 'App.js'.

### Responsive page
'search me' is mobile-friendly.
