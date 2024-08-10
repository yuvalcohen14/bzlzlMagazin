document.getElementById("menuBar").onclick = function() {
    document.getElementById("menuContent").style.right = "0";
    document.getElementsByClassName("sidebar-details")[0].style.opacity="0.1"
}

document.getElementById("closeBtn").onclick = function() {
    document.getElementById("menuContent").style.right = "-100%";
    document.getElementsByClassName("sidebar-details")[0].style.opacity="1"

}

document.addEventListener('DOMContentLoaded', function() {
    // Add click event to each footnote link
    document.querySelectorAll('.footnote-link').forEach(item => {
        item.addEventListener('click', event => {
            // Get the footnote number from the data attribute
            const footnoteNumber = item.getAttribute('data-footnote');
            
            // Find the corresponding footnote content
            const footnoteContent = document.getElementById(`footnote${footnoteNumber}`).innerHTML;
            console.log(`footnote${footnoteNumber}`);
            
            // Display the corresponding footnote in the displayFootnote div
            document.getElementById('displayFootnote').innerHTML = footnoteContent;
        });
    });
});

