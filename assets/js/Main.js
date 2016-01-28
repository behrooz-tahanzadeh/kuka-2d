Main = 
{
	intervalTime:100,
	intervalID:-1,
	
	
	BgOpacity:1,
	
	
	Init:function()
	{
		Vars.Init();
		Arm.Init();
		jQuery("div#pp").click(this.PP.bind(this));
		jQuery('input#tail').change(this.TailChange.bind(this));
		jQuery(window).keydown(this.WindowOnKeyPress.bind(this));
		
		this.intervalID = setInterval(this.Loop.bind(this), this.intervalTime);
	},
	
	
	WindowOnKeyPress: function(e)
	{
		switch (e.keyCode)
		{
			case Keyboard.Right:
				Arm.List[1].angle+=0.01
				break;
				
			case Keyboard.Left:
				Arm.List[1].angle-=0.01
				break;
				
			case Keyboard.Top:
				Arm.List[2].angle-=0.01
				break;
				
			case Keyboard.Bottom:
				Arm.List[2].angle+=0.01
				break;
				
			case Keyboard.Space:
				this.PP();
				break;
				
			default:
				console.log(e.keyCode)
		}
	},
	
	
	
	
	TailChange:function(e)
	{this.BgOpacity = jQuery('input#tail').val();},
	
	
	
	
	Loop: function()
	{
		var ctx = Vars.Ctx;
		
		ctx.fillStyle = "rgba(255,255,255,"+this.BgOpacity+")";
		ctx.fillRect(0, 0, Vars.PageW, Vars.PageH);
		
		Arm.DrawAll();
	},
	
	
	
	
	PP: function()
	{
		if(this.intervalID == -1)
		{
			this.intervalID = setInterval(this.Loop.bind(this), this.intervalTime);
			jQuery("div#pp").html('pasue');
		}
		else
		{
			clearInterval(this.intervalID);
			this.intervalID = -1;
			jQuery("div#pp").html('play');
		}
	}
};//eo Main{}




jQuery(document).ready(Main.Init.bind(Main));