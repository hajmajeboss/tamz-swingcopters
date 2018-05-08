//List of resources to load
var sprite_lst = [
    "../img/swing0.png",
    "../img/background_city.png",
    "../img/cloud.png",
    "../img/obstacle_right.png",
    "../img/obstacle_left.png",
    "../img/hammer.png"
];

//Sprites
Q.Sprite.extend("SwingCopter", {
    init: function(p) {
        this._super(p,{
            asset: "../img/swing0.png",
            x: VW/2,
            y: VH-135,
            z: 1000
        });
    }
});

Q.Sprite.extend("City", {
    init: function(p) {
        this._super(p,{
            asset: "../img/background_city.png",
            x: VW/2,
            y: VH - 67,
            z: 1

        });
    }
});

Q.Sprite.extend("Cloud", {
    init: function(p) {
        this._super(p,{
            asset: "../img/cloud.png",
            x: Math.floor(Math.random() * Math.floor(320)),
            y: Math.floor(Math.random() * Math.floor(320)),
            z: 2
        });
    }
});

Q.Sprite.extend("ObstacleLeft", {
    init: function(p) {
        this._super(p,{
            asset: "../img/obstacle_left.png",

            z: 2
        });
    }
});

Q.Sprite.extend("ObstacleRight", {
    init: function(p) {
        this._super(p,{
            asset: "../img/obstacle_right.png",

            z: 2
        });
    }
});

Q.Sprite.extend("Hammer", {
    init: function(p) {
        this._super(p,{
            asset: "../img/hammer.png",
            z: 2
        });
    }
});