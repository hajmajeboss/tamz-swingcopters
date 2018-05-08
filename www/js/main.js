//Global constants
const VH = window.screen.availHeight - 24;
const VW = window.screen.availWidth;

//Engine setup
var Q = Quintus({ development: true })
    .include("Sprites, Scenes, Input, 2D, Touch, UI")
    .setup({width:360, height:640, scaleToFit: true})
    .touch();
