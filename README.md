# My Cat Website
A demo with extension problems using [The Cat API](https://thecatapi.com/)

## Demo Plan
A high-level overview of where this demo is going:

1. fetch a random cat pic from the API and display it
2. re-fetch the cat pic without refreshing the browser
3. get a random cat pic by breed
4. add a "favorite cats" list
5. add a gallery of favorite cats
6. organize our random cat pic and gallery into separate tabs/views

# Extension Problems
These can be done in whatever order you want!

## Change gallery list order
Make the gallery items appear with the newest additions at the beginning of the list. There are a couple different ways you could do this:
- change the order when you're adding a new imgUrl to the array
- use a flexbox property to modify the display order (hint: it's one of the first properties listed in the [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))

## Remove Favorite button
Update the Favorites Gallery to display a "Remove" button alongside each item you've added. Here's how I'd recommend approaching this:
1. In App.jsx, inside the App component, make a `removeFromFavs` function. It should take one parameter called `imgUrl`. Inside the function:

    a. use the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to filter out all the urls in your favorites array in state, then
    b. use the setter function to update the favorites array to be your new filtered array.
2. In the Gallery component, in the first line of the component definition, define a props object with one prop called `removeFunction`.
3. Back in App.jsx, pass the `removeFromFavs` function you made as the `removeFunction` prop where you use the Gallery component.
4. In the Gallery component, wrap a `<section>` tag around the `<img/>` we're creating in the `.map()` function.
5. Inside the section you just made, make a `<button>` element (either before or after the image -- up to you) with the text "Remove". Give the button an `onClick` function. It should be an anonymous arrow function that calls the function this component received as the `removeFunction` prop. (Remember to pass in the image URL we get from the `.map()` function, so the remove function knows which image to remove!)

## Dog Mode
[The Cat API](https://thecatapi.com/) is great, but what about our canine friends? Let's add a "dog mode" to our cat website using [The Dog API](https://thedogapi.com/)!

The great thing about this API is that it offers exactly the same API endpoints and data structures as the API we're already using. The only difference is that we'll be sending our requests to `thedogapi.com` instead of `thecatapi.com`.

Here's my recommended plan of attack:

1. In the App component, add a new piece of state called `mode` that tracks whether we're in `dog` mode or `cat` mode.
2. Create a new component called `Mode`.

  - The component should accept one prop called `setMode` (which will be the same as our `setMode` function we made with useState())

  - The component should include an HTML element or MUI component that allows the user to choose between Cat Mode and Dog Mode.

  - The input that toggles between the two modes should have an `onChange` function. It should be an anonymous arrow function that calls `setMode`. Don't forget to pass either `'cat'` or `'dog'`.

3. In your App component, the `thecatapi.com` URL shows up in two places. Update each of these strings to use `${template literal}` syntax to say either `thecatapi` or `thedogapi`, depending on the current value of the `mode` variable.

Next, you have a decision to make -- do you want to keep one unified list of favorites, or do you want to keep your favorite dogs and your favorite cats in separate lists?

If you want to keep them all together, there's nothing else to do -- you're done with Dog Mode!

If you'd like to keep two separate lists, you'll need to do a few more things:

1. First, update your App component's state so you have two separate state variables called `favCats` and `favDogs`.
2. Next, update the `addToFavs` function. You'll need to check the current mode. If it's in `cat` mode, add the image to `favCats`. If it's in `dog` mode, add the image to `favDogs`.
3. You'll also need to update the value you're passing into the Gallery component accordingly. If you're in `dog` mode, pass in `favDogs`, otherwise pass in `favCats`.
