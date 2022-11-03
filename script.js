function addDivs(num){
    let size = 16;
    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
    const container = document.querySelector("#grid-container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const divCount = num * num;
    colorChoice = 'blue';

    function changeColor(e){
        if(mouseDown){
            e.target.style.backgroundColor = colorChoice;
        }
    }

    for(let i = 0; i < divCount; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-element');
        newDiv.addEventListener('mousedown', changeColor);
        newDiv.addEventListener('mouseover', changeColor);
        
        container.appendChild(newDiv);
    }
}
addDivs(16);