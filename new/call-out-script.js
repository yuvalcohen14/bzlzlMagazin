function getRandomRotation(maxRotation) {
    return (Math.random() - 0.5) * 2 * maxRotation;
}
function rotateArchivecovers() {
    const covers = document.getElementsByClassName('cover-pick');
    for (const cover of covers) {
        const rotation = getRandomRotation(6);
        console.log(rotation);
        cover.style.transform = `rotate(${rotation}deg)`;
    }
}
window.onload = () => {
    rotateArchivecovers();
}
