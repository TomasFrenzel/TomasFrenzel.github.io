document.addEventListener("DOMContentLoaded", () => {
    let photo1 = document.getElementById("photo-1");
    let photo2 = document.getElementById("photo-2");
    let fullPage = document.getElementById("fullimages");
    let fullphoto1 = document.getElementById("full-photo-1");
    let fullphoto2 = document.getElementById("full-photo-2");
    let cancel = document.getElementById("cancel");

    photo1.addEventListener("click",
        () => {
            fullPage.style.display = "flex";
            fullphoto1.style.display = "block";
            fullphoto2.style.display = "none";

            cancel.addEventListener("click", () => {
                fullPage.style.display = "none";
            })
        })

    photo2.addEventListener("click",
        () => {
            fullPage.style.display = "flex";
            fullphoto1.style.display = "none";
            fullphoto2.style.display = "block";

            cancel.addEventListener("click", () => {
                fullPage.style.display = "none";
            })
        })
})