var Vars = 
{
	CDom:false,
	CJq:false,
	Ctx:false,
		
	PageW:0,
	PageH:0,
	
	BgOpacity:1,
	
	Init: function()
	{
		this.CJq = jQuery('#drawingArea').eq(0);
		this.CDom = this.CJq.get(0);
		this.Ctx = this.CDom.getContext("2d");
		
		this.PageW = jQuery(window).width();
		this.PageH = jQuery(window).height();
		
		this.CDom.width = this.PageW;
		this.CDom.height = this.PageH;
	}//eof
}//eoc