//Launch the function only after all the page content is loaded
document.addEventListener('DOMContentLoaded', function displayMenuBtnOverVideo() {
    generateMainMenuButton1();
});

function generateMainMenuButton1() {
    //Generate and insert the custom menu button
    var getVideoDiv = document.getElementById("fwduvpDiv0");
    getVideoDiv.insertAdjacentHTML("beforeend",
        `<div class="show-menu top-left" id="menuBtnDiv1">
            <button class="btn btn-sm" id="menuBtn" onclick="videoOverlayMenuGenerator1()">
            <span class="iconify" data-icon="whh:menu" data-inline="false"></span><span class="menu-button-title"> MENU</span>
            </button>
            </div>`
    );
}

function generateMainMenuButton2() {
    //Generate and insert the custom menu button
    var getVideoDiv = document.getElementById("fwduvpDiv0").children[0].children[1];
    getVideoDiv.insertAdjacentHTML("beforeend",
        `<div class="show-menu top-left" id="menuBtnDiv2">
            <button class="btn btn-sm" id="menuBtn" onclick="videoOverlayMenuGenerator2()">
            <span class="iconify" data-icon="whh:menu" data-inline="false"></span><span class="menu-button-title"> MENU</span>
            </button>
            </div>`
    );
}

//Generate and insert the custom menu
function videoOverlayMenuGenerator1() {
    var getMyMenuButton = document.getElementById("fwduvpDiv0").children[1].children[1];

    getMyMenuButton.insertAdjacentHTML("afterbegin", menuContent);

    //Pause the video play
    fwduvpPlayer0.pause();

    $("#menuBtnDiv1").remove();

}

//Generate and insert the custom menu
function videoOverlayMenuGenerator2() {
    var getMyMenuButton = document.getElementById("fwduvpDiv0").children[0].children[1];

    getMyMenuButton.insertAdjacentHTML("afterbegin", menuContent);

    //Pause the video play
    fwduvpPlayer0.pause();

    $("#menuBtnDiv2").remove();
}

var menuContent = `<div class="container animated slideInDown" id="menu">
    <div class="row" id="menuBarTitle">
        <div class="col-sm">
            <span class="d-inline-block" id="menuTextDiv">MENU</span>
            <div class="d-inline-block float-right" id="closeBtnDiv">
                <button type="button" class="close" id="closeIcon" onclick="bringBackMenuBtn()">
                    <span>&times;</span>
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm" id="menuBtnsWrap">
            <div class="row menuBtns">
                <div class="col-sm">
                    <button class="btn btn-block menuBtnsText" onclick="resumePlay()">PLAY</button>
                </div>
            </div>
            <div class="row menuBtns">
                <div class="col-sm">
                    <button class="btn btn-block menuBtnsText" onclick="scrubbAt()">PLAY MOMENT</button>
                </div>
            </div>
            <div class="row menuBtns">
                <div class="col-sm menuBtnsText">
                <button class="btn btn-block" onclick="restartVideo()">REPLAY</button>
                </div>
            </div>
            <div class="row menuBtns">
                <div class="col-sm">
                    <a href="https://www.google.com/" class="btn btn-block menuBtnsText">OUR CONTACTS</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

//Display back the custom menu buttoon and hides the custom menu
function bringBackMenuBtn() {
    generateMainMenuButton2();

    $("#menu").remove();
}

// Functions to manipulate the video from the custom menu buttons
function resumePlay() {
    fwduvpPlayer0.play();

    $("#menu").remove();
    generateMainMenuButton2();
}

function scrubbAt() {
    fwduvpPlayer0.scrubbAtTime("00:00:20");

    $("#menu").remove();
    generateMainMenuButton2();
}

function restartVideo() {
    fwduvpPlayer0.stop();
    fwduvpPlayer0.play();

    $("#menu").remove();
    generateMainMenuButton2();
}