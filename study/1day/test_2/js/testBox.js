(() => {
    let firstImg = null;
    const imgChange = () => {
        const target = document.getElementById('animalProfile');
        const src = target.getAttribute("src");
        const changeImgNumber = "0" + getRandomNumber(9);
        if (firstImg === null) {
            firstImg = src;
        }
        target.setAttribute("src", src.replace(/[0-9]{2}/, changeImgNumber))
    };

    const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * max) + 1 + min;

    const textAppend = () => {
        document.getElementById('animalProfileContents').appendChild(getDescription());
    };

    const getDescription = () => {
        const pTag = document.createElement("P");
        pTag.classList.add("animal-profile-description");
        pTag.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec";
        return pTag;
    };

    const boxResize = () => {
        const target = document.getElementById('animalProfileBox');
        target.style.width = getRandomNumber(600, 300) + "px";
    };

    

    const btnMake = (event, btnText = "btn") => {
        const btn = document.createElement("BUTTON");
        btn.setAttribute("type", "button");
        btn.onclick = event;
        btn.innerText = btnText;
        return btn;
    };
    
    const testArticle = document.createElement("ARTICLE");
    testArticle.classList.add("test-btn-box");
    const imgChangeBtn = btnMake(imgChange, "이미지 변경(랜덤)");
    const textAppendBtn = btnMake(textAppend, "글  추가");
    const boxResizeBtn = btnMake(boxResize, "프로필 박스 크기 변경(랜덩)");

    testArticle.appendChild(boxResizeBtn);
    testArticle.appendChild(textAppendBtn);
    testArticle.appendChild(imgChangeBtn);
    document.body.prepend(testArticle);
})();