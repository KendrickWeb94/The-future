

const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent =
            header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${
                accordionContent.scrollHeight + 32
            }px`;
            header.querySelector(".bx").classList.remove("bx-plus");
            header.querySelector(".bx").classList.add("bx-minus");

        } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".bx").classList.add("bx-plus");
            header.querySelector(".bx").classList.remove("bx-minus");

        }
    });
});

