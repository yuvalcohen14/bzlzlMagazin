
// function getRandomPosition(containerWidth, containerHeight, divWidth, divHeight) {
//     const randomX = Math.random() * (containerWidth - divWidth);
//     const randomY = Math.random() * (containerHeight - divHeight);
//     const randomDeg = (Math.random() - 0.5) * (20);
//     return { x: randomX, y: randomY, deg: randomDeg };
// }
// function getPosition(divNum, divAmounts, containerWidth, containerHeight, divWidth, divHeight) {
//     const currentPlace = ((divNum * 2) / divAmounts);
//     const divMud =(divNum>0.6*divAmounts)? divNum % 6 : divNum;
//     const randomX = ((divMud * 2) / (divAmounts)) * (containerWidth - divWidth);
//     const randomY = (( (divNum%5)*5 ) / divAmounts) * (containerHeight - divHeight);
//     const randomDeg = (Math.random() - 0.5) * (20);
//     return { x: randomX+50, y: randomY+50, deg: randomDeg };
// }


// function positionDivsRandomly() {
//     const container = document.getElementsByClassName('main-content-pick')[0];
//     const divs = container.getElementsByClassName('article-pick');
//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;
//     const divWidth = divs[0].clientWidth;
//     const divHeight = divs[0].clientHeight;
//     let divNum = 0;
//     for (const div of divs) {
//         // const { x, y, deg } = getRandomPosition(containerWidth, containerHeight, divWidth, divHeight);
//         const { x, y, deg } = getPosition(divNum, divs.length, containerWidth, containerHeight, divWidth, divHeight);
//         div.style.left = `${x}px`;
//         div.style.top = `${y}px`;
//         div.style.transform = `rotate(${deg}deg)`;
//         divNum++;
//     }
// }


// // Position divs randomly when the page loads
// window.onload = positionDivsRandomly;
function getRandomRotation(maxRotation) {
    return (Math.random() - 0.5) * 2 * maxRotation;
}
function getRandomOffset(maxOffset = 50) {
    return (Math.random() - 0.5) * maxOffset;
}

function getRandomPosition(divAmount, divNum, containerWidth, containerHeight, divWidth, divHeight, sidebar) {
    const currentPlace = ((divNum) / divAmount);
    // divNum = divAmount-divNum;
    const divMudX = (divNum > (0.6 * divAmount)) ? divNum % 3 : divNum % 3;
    const divMudY = (divNum < (0.8 * divAmount)) ? currentPlace : currentPlace;

    const randomX = ((divMudX * 5) / (divAmount)) * (containerWidth - divWidth);
    const randomY = (divMudY * 1.2) * (containerHeight - divHeight);


    return { x: 50 + randomX + getRandomOffset(), y: randomY + 30 + getRandomOffset() };
}

function positionDivsRandomly() {
    const container = document.getElementsByClassName('main-content-pick')[0];
    const sidebar = document.getElementsByClassName('sidebar-details')[0];
    const divs = container.getElementsByClassName('article-pick');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const divWidth = divs[0].clientWidth;
    const divHeight = divs[0].clientHeight;
    const maxRotation = 20; // Maximum rotation in degrees

    const sidebarRect = sidebar.getBoundingClientRect();
    const existingDivs = [];
    let divNum = 0;
    const divAmount = divs.length;

    for (const div of divs) {
        const { x, y } = getRandomPosition(divAmount, divNum, containerWidth, containerHeight, divWidth, divHeight, sidebarRect);
        const rotation = getRandomRotation(maxRotation);
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.style.transform = `rotate(${rotation}deg)`;
        existingDivs.push(div);
        divNum++;
    }
}

// Position divs randomly when the page loads

// Position divs randomly and setup the toggle functionality when the page loads
window.onload = () => {
    positionDivsRandomly();
};
