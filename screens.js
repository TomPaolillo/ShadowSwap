var PlayScreen = me.ScreenObject.extend({
	onResetEvent : function() {
		me.levelDirector.loadLevel('lv1');
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.game.addHUD(0,0,640,480);
		me.game.HUD.addItem('score', new ScoreObject(10,230));
		lvlCoins = 3;
		document.getElementById('game_state').innerHTML = "Collect all of the coins!";
		document.getElementById('instructions').innerHTML = "Arrows to move and space to jump.";
	}
});

var TitleScreen = me.ScreenObject.extend({
	init : function() {
		this.parent(true);
		me.input.bindKey(me.input.KEY.SPACE, "jump", true);
	},
	onResetEvent : function() {
		if (this.title == null) {
			this.title = me.loader.getImage('titleScreen');
			document.getElementById('game_state').innerHTML = "";
			document.getElementById("instructions").innerHTML = "";
		}
	},
	update : function() {
		if (me.input.isKeyPressed('jump')) {
			me.state.change(me.state.PLAY);
		}
		return true;
	},
	draw : function(context) {
		context.drawImage(this.title, 50, 50);
	}
})
