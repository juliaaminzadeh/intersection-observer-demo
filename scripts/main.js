/*
i might want to have a threshold for when the class is toggled 

what counts as an intersection?

an intersection is whenever a given percentage of an element is visible within the viewport

how much should be showing, to trigger an intersection (detection)?

threshold: 25% or 0.25
*/

/* 
in what context is the observer observing?
it is observing the root node. 
*/
let options = {
  root: null,
  threshold: 0.25,
}


/*
how are we going to handle intersection changes?
when something starts to intersect or when something ceases to intersect
 
if is starts to intersect what do we want to do?
- apply the active class 
If it ceases to intersect?
- remove the active class
*/
function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
//entry.isIntersecting
if (entry.isIntersecting) {
    //add active if intersecting
    entry.target.classList.add("active")
}
else {
    //remove active if no longer intersection
    entry.target.classList.remove("active")
}
  });

    

    
}

let observer = new IntersectionObserver(intersectionHandler, options);

/*
we need to get reference to all of our images
 */

let images = document.querySelectorAll("img");

/*
Loop through all the images, and tell the observer to observe each one
*/
images.forEach((image) => {
    observer.observe(image);
});

