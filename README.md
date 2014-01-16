# Generate jQuery events on show and hide

__showandtell.js__ lets you know when an element is shown or hidden using jQuery.

I was working on a [simple modal system](http://github.com/hypesystem/d_modal.js) when I hit a [dead
end](http://stackoverflow.com/questions/21078248). I would like to allow users to hide my modals how
they usually do (with `hide()` or `fadeOut()` or whatever other jQuery method they use).

jQuery, as you probably know, [does not send out events on hide](http://stackoverflow.com/questions/2857900).
On top of that, it has a wide variety of different ways to hide an object. This library strives to add a
simple unified approach to listening to hides. The goal is to cover all the possible cases.