
function createGameMenu(windowWidth,windowHeight) {
    let bgColor = "#111b27";
    let color = "#6b7986";
    let transparent = "#00000000";

    // middle box
    let menuRect = new Rectangle(0, 0, windowWidth , windowHeight*0.1, color, bgColor);
    let bottomMenuRect = new Rectangle(0, windowHeight*0.9, windowWidth , windowHeight*0.1, color, bgColor);
    
    // Playe One Face
    let playerOneFace = new Rectangle(0, 0, windowWidth*0.20 , windowHeight*0.1, transparent, transparent);
    let playerOneFaceButton = new Rectangle(0,0, playerOneFace.width*0.5 , playerOneFace.height*0.5, transparent, transparent);
    playerOneFaceButton.alignMiddleTo(playerOneFace);
    let playerOneFaceButtonHTML = document.createElement("button");
    playerOneFaceButtonHTML.style.cssText = setbound(playerOneFaceButton.x, playerOneFaceButton.y , playerOneFaceButton.width, playerOneFaceButton.height);
    playerOneFaceButtonHTML.innerHTML = "";
    playerOneFaceButtonHTML.id="playerface1";

    // Player Two Face
    let playerTwoFace = new Rectangle(windowWidth*0.80, 0, windowWidth*0.20 , windowHeight*0.1, transparent, transparent);
    let playerTwoFaceButton = new Rectangle(0,0, playerOneFace.width*0.5 , playerOneFace.height*0.5, transparent, transparent);
    playerTwoFaceButton.alignMiddleTo(playerTwoFace);
    let playerTwoFaceButtonHTML = document.createElement("button");
    playerTwoFaceButtonHTML.style.cssText = setbound(playerTwoFaceButton.x, playerTwoFaceButton.y , playerTwoFaceButton.width, playerTwoFaceButton.height);
    playerTwoFaceButtonHTML.innerHTML = "";
    playerTwoFaceButtonHTML.id="playerface2";

    // Players One names and information
    let playerOneName = new Rectangle(windowWidth*0.20, 0, windowWidth*0.30 , windowHeight*0.1, transparent, transparent);
    let playerOneNameButton = new Rectangle(0,0, playerOneName.width*0.7 , playerOneName.height*0.8, transparent, transparent);
    playerOneNameButton.alignMiddleTo(playerOneName);
    let playerOneNameButtonHTML = document.createElement("span");
    playerOneNameButtonHTML.classList.add('left');
    playerOneNameButtonHTML.id = "playerOneName";
    playerOneNameButtonHTML.style.cssText = setbound(playerOneNameButton.x, playerOneNameButton.y , playerOneNameButton.width, playerOneNameButton.height);

    // Players Two names and information
    let playerTwoName = new Rectangle(windowWidth*0.50, 0, windowWidth*0.30 , windowHeight*0.1, transparent, transparent);
    let playerTwoNameButton = new Rectangle(0,0, playerTwoName.width*0.7 , playerTwoName.height*0.8, transparent, transparent);
    playerTwoNameButton.alignMiddleTo(playerTwoName);
    let playerTwoNameButtonHTML = document.createElement("span");
    playerTwoNameButtonHTML.classList.add('right');
    playerTwoNameButtonHTML.id = "playerTwoName";
    playerTwoNameButtonHTML.style.cssText = setbound(playerTwoNameButton.x, playerTwoNameButton.y , playerTwoNameButton.width, playerTwoNameButton.height);

    // Player One Menu
    let playerOneScore = new Rectangle(0, windowHeight*0.1, windowWidth*0.15 , windowWidth*0.12, color, bgColor);
    let playerOneScoreButton = new Rectangle(0,0, playerOneScore.width , playerOneScore.height, transparent, transparent);
    playerOneScoreButton.alignMiddleTo(playerOneScore);
    let playerOneScoreButtonHTML = document.createElement("p");
    playerOneScoreButtonHTML.id = "PlayerOneWins";
    playerOneScoreButtonHTML.style.cssText = setbound(playerOneScoreButton.x, playerOneScoreButton.y , playerOneScoreButton.width, playerOneScoreButton.height);
    
    // Player One Image Menu
    let playerOneScoreImage = new Rectangle(windowWidth*0.15, windowHeight*0.1, windowWidth*0.12 , windowWidth*0.12, color, bgColor);
    let playerOneScoreImageButton = new Rectangle(0,0, playerOneScoreImage.width , playerOneScoreImage.height, transparent, transparent);
    playerOneScoreImageButton.alignMiddleTo(playerOneScoreImage);
    let playerOneScoreImageButtonHTML = document.createElement("img");
    playerOneScoreImageButtonHTML.id = "playerOneScoreImage";
    playerOneScoreImageButtonHTML.style.cssText = setbound(playerOneScoreImageButton.x, playerOneScoreImageButton.y , playerOneScoreImageButton.width, playerOneScoreImageButton.height);

    // Player Two Menu
    let playerTwoScore = new Rectangle(windowWidth*0.85, windowHeight*0.1, windowWidth*0.15 , windowWidth*0.12, color, bgColor);
    let playerTwoScoreButton = new Rectangle(0,0, playerTwoScore.width , playerTwoScore.height, transparent, transparent);
    playerTwoScoreButton.alignMiddleTo(playerTwoScore);
    let playerTwoScoreButtonHTML = document.createElement("p");
    playerTwoScoreButtonHTML.id = "PlayerTwoWins";
    playerTwoScoreButtonHTML.style.cssText = setbound(playerTwoScoreButton.x, playerTwoScoreButton.y , playerTwoScoreButton.width, playerTwoScoreButton.height);

    // Player Two Image Menu
    let playerTwoScoreImage = new Rectangle(windowWidth*0.73, windowHeight*0.1, windowWidth*0.12 , windowWidth*0.12, color, bgColor);
    let playerTwoScoreImageButton = new Rectangle(0,0, playerTwoScoreImage.width , playerTwoScoreImage.height, transparent, transparent);
    playerTwoScoreImageButton.alignMiddleTo(playerTwoScoreImage);
    let playerTwoScoreImageButtonHTML = document.createElement("img");
    playerTwoScoreImageButtonHTML.id = "playerTwoScoreImage";
    playerTwoScoreImageButtonHTML.style.cssText = setbound(playerTwoScoreImageButton.x, playerTwoScoreImageButton.y , playerTwoScoreImageButton.width, playerTwoScoreImageButton.height);

    // About Game Menu
    let aboutGameSection = new Rectangle(0, windowHeight*0.9, windowWidth*0.30 , windowHeight*0.1, transparent, transparent);
    let aboutGameButton = new RoundRectangle(0,0, aboutGameSection.width*0.8, aboutGameSection.height*0.5,10 , transparent, transparent);
    aboutGameButton.alignMiddleTo(aboutGameSection);
    let aboutGameButtonHTML = document.createElement("button");
    aboutGameButtonHTML.id ="aboutGame";
    aboutGameButtonHTML.style.cssText = setbound(aboutGameButton.x, aboutGameButton.y , aboutGameButton.width, aboutGameButton.height);
    	
    // Setting Menu
    let settingSection = new Rectangle(windowWidth*0.30, windowHeight*0.9, windowWidth*0.20 , windowHeight*0.1, transparent, transparent);
    let settingSectionButton = new Rectangle(0,0, settingSection.width*0.5 , settingSection.height*0.5, transparent, transparent);
    settingSectionButton.alignMiddleTo(settingSection);
    let settingSectionButtonHTML = document.createElement("button");
    settingSectionButtonHTML.style.cssText = setbound(settingSectionButton.x, settingSectionButton.y , settingSectionButton.width, settingSectionButton.height);
    settingSectionButtonHTML.id = "gamesettings";

    // Menu Icon Menu
    let menuIconSection = new Rectangle(windowWidth*0.80, windowHeight*0.9, windowWidth*0.20 , windowHeight*0.1, transparent, transparent);
    let menuIconSectionButton = new Rectangle(0,0, menuIconSection.width*0.5 , menuIconSection.height*0.5, transparent, transparent);
    menuIconSectionButton.alignMiddleTo(menuIconSection);
    let menuIconSectionButtonHTML = document.createElement("button");
    menuIconSectionButtonHTML.style.cssText = setbound(menuIconSectionButton.x, menuIconSectionButton.y , menuIconSectionButton.width, menuIconSectionButton.height);
    menuIconSectionButtonHTML.id = "gamemenu";
    
    createStyleInHTML();
    
    appendAll([
        aboutGameButtonHTML,
        settingSectionButtonHTML,
        menuIconSectionButtonHTML,
        playerOneScoreButtonHTML,
        playerTwoScoreButtonHTML,
        playerOneFaceButtonHTML,
        playerTwoFaceButtonHTML,
        playerOneNameButtonHTML,
        playerTwoNameButtonHTML,
        playerOneScoreImageButtonHTML,
        playerTwoScoreImageButtonHTML
    ]);
    

    return [
            menuRect,
            playerOneFace,playerTwoFace,
            playerOneName,playerTwoName,
            playerOneScore,playerTwoScore,
            bottomMenuRect,
            aboutGameSection,
            settingSection,
            menuIconSection
        ];
}

function createStyleInHTML(){
    let style = document.createElement("style");
    style.innerHTML = `
        button {
            position : absolute;
            border : 1px solid #6b7986;
            border-radius : 10px;
            font-size : 12px;
            background-color :#1b2838;
            color : #6b7986;
            font-weight: 700;
        }
        p {
            position : absolute;
            font-size : 12px;
            color : #6b7986;
            font-weight: 700;
            text-align: center;
            font-size: 30px;
        }
        img {
            position : absolute;
            text-align: center;
        }
        span {
            position : absolute;
            font-size : 12px;
            color : #6b7986;
            font-weight: 700;
            font-size: 15px;
        }
        .left {
            text-align: left;
        }
        .right {
            text-align: right;
        }
        #playerface1, #playerface2 {
            border-radius: 50%;
            outline: 4px solid #6b7986;
        }
        .timer {
            background-color : green;
            color: white;
        }
    `;
    document.body.appendChild(style);
}

function setbound(x,y,width,height){
    return `
        top : ${y}px;
        left : ${x}px;
        width : ${width}px;
        height : ${height}px;
    `;
}

function appendAll(arr) {
    arr.forEach((item)=>{
        document.body.prepend(item);
    });
}

