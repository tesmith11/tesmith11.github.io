// This code runs when the page loads
$(function() {
    $(".thumbnail").on("click", function(event) {
      event.preventDefault()
      var elementThatWasClicked = $(this)
      console.log(elementThatWasClicked)
      elementThatWasClicked.parent().remove()

          //when clicking the space is still there - we are trying to get the space to go away
          //went to website and try to get the div to disappear when you click the image
          //go to jquery and use "traverse" -  how do you traverse up the tree
          //we want the parent element to be removed as well from the document object
          //.parent is going to say that the element that was clicked and remove that
  })

})
