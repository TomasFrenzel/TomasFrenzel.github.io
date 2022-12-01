<!--JQuery-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    $("#navigation_bar #hamburger").click(function () {
    $("#navigation_bar ul").slideToggle("slow")
});

    // Vanishing menu in less than 500px
    window.addEventListener("resize", resizeListener);

    let windowWidth = window.innerWidth;

    function resizeListener() {
    windowWidth = window.innerWidth;
}

    if (windowWidth < 501) {
    $("#navigation_bar ul").click(function () {
        $("#navigation_bar ul").hide();
    });
} else {
    $("#navigation_bar ul").show();
}

    // Position change on click
    $("#navigation_bar a, .btn").on("click", function (event) {
    if (this.hash !== " ") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
{
    scrollTop: $(hash).offset().top - 260,
},
    800
    )
}
})
