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
		
		this.intervalID = setInterval(this.Loop.bind(this), this.intervalTime);
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