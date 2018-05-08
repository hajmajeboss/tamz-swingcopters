//Constants
const HAMMER_OBSTACLE_X = 20;
const HAMMER_OBSTACLE_Y = 34;

//Scenes
Q.scene('mainmenu', function (stage) {
    var label_copters = stage.insert(new Q.UI.Text({x: VW/2, y: 200, label: 'Swing\nCopters.js', align: 'center', color: 'white', outlineWidth: 8, outlineColor: 'black', size: 50}));
    var city = stage.insert(new Q.City());
    var play_btn = stage.insert(new Q.UI.Button({x: VW/2, y: VH/2 + 20, fill: "white", highlight: '#8DC73F', label: 'Play', color: 'yellow', size: 60}));
    var highscore_btn = stage.insert(new Q.UI.Button({x: VW/2, y: VH/2 + 80, fill: "white", highlight: '#8DC73F', label: 'Highscore'}));

    play_btn.on("click", function () {
        Q.stageScene('level1');
    })

    highscore_btn.on("click", function () {
        Q.stageScene('highscore');
    });
});

Q.scene('highscore', function (stage) {
    var date = new Date();
    var city = stage.insert(new Q.City());
    var label = stage.insert(new Q.UI.Text({x: VW/2, y: 200, label: 'Highscore', align: 'center', color: 'white', outlineWidth: 8, outlineColor: 'black', size: 50}));
    var score = stage.insert(new Q.UI.Text({x: VW/2, y: 280, label: 'Score: 0', align: 'center', color: 'white', outlineWidth: 5, outlineColor: 'black', size: 25}));
    var date = stage.insert(new Q.UI.Text({x: VW/2, y: 320, label: 'Date: ' + date.toDateString() , align: 'center', color: 'white', outlineWidth: 5, outlineColor: 'black', size: 25}));
    var back_btn = stage.insert(new Q.UI.Button({x: VW/2, y: 400 , fill: "white", highlight: '#8DC73F', label: 'Back'}));

   back_btn.on('click', function () {
       Q.stageScene('mainmenu');
   })
});

Q.scene("level1", function (stage) {
    var swing = stage.insert(new Q.SwingCopter());
    var city = stage.insert(new Q.City());

    var cloud_list = [];

    for (var i = 0; i < 3; i++) {
        var cloud = stage.insert(new Q.Cloud());
        cloud_list.push(cloud);
    }

    var obstacle_list = [];
    var hammer_list = [];
    for (var i = 0; i<2; i++) {
        var x = 0;
        var y = 250*(i + 1)-150;
        var left = stage.insert(new Q.ObstacleLeft({ x: 0, y: y }));
        var hammer_left = stage.insert(new Q.Hammer( {x: left.p.cx - HAMMER_OBSTACLE_X, y: y+HAMMER_OBSTACLE_Y}));
        console.log(left.p.x);
        var right = stage.insert(new Q.ObstacleRight( {x: 360, y:y }));
        var hammer_right = stage.insert(new Q.Hammer({x: right.p.x - right.p.cx + HAMMER_OBSTACLE_X, y: y+HAMMER_OBSTACLE_Y}));
        obstacle_list.push([left, right]);
        hammer_list.push([hammer_left, hammer_right]);
    }
})  ;

//Load resources
Q.load(sprite_lst,function() {
    Q.stageScene("mainmenu");

});