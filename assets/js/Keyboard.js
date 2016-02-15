function KeyState(keyCode)
{
	this.keyCode = keyCode;
	this.pressed = false;
}


var Keyboard = 
{
	Keys:
	{
		Right:	new KeyState(39),
		Left:	new KeyState(37),
		Top:	new KeyState(38),
		Bottom:	new KeyState(40),
		Space:	new KeyState(32),
		Ctrl:	new KeyState(17),
		A: new KeyState(65),
		B: new KeyState(66),
		Q: new KeyState(81),
		S: new KeyState(83),
		W: new KeyState(87),
		X: new KeyState(88),
		Y: new KeyState(89),
		Z: new KeyState(90)
	},
	
	Init: function()
	{
		jQuery(window).keydown(this.KeyDown.bind(this));
		jQuery(window).keyup(this.KeyUp.bind(this));
	},
	
	KeyDown: function(e)
	{
		var c = e.keyCode;
		
		for(x in this.Keys)
			if(this.Keys[x].keyCode == c)
			{
				this.Keys[x].pressed = true;
			}
	},
	
	KeyUp: function(e)
	{
		var c = e.keyCode;
		
		for(x in this.Keys)
			if(this.Keys[x].keyCode == c)
			{
				this.Keys[x].pressed = false;
			}
	}
};