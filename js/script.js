// $(document).ready(function() {
//     $("h2").css("text-decoration", "underline");// underlines all <h2> elements
//     $("ul").css("border", "solid 1px #ccc"); // adds a border to all lists
// }); 

$(document).ready(function() {
    $("h2").addClass("underline"); // underlines all <h2> elements
    $("ul").addClass("border"); // adds a border to all lists
});

$(document).ready(function() {
    $("h2").removeClass("underline"); // remove all the underlined <h2> elements
    $("ul").removeClass("border"); // remve the border to all lists
});

// the above example are how you would go about changing the CSS in reality.


