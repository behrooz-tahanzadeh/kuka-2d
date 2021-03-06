function Arm(imageSrc, parentArm, length, angle, imagePt)
{
	
	this.image = new Image();
	this.image.src = imageSrc;
	this.image.onload = this.imageOnLoad.bind(this);
	
	this.isLoaded = false;
	this.parentArm = parentArm;
	this.length = length;
	this.angle = angle;
	
	this.imagePt = imagePt;
	
	Arm.List.push(this);
}//eoc




Arm.List = [];




Arm.DrawAll = function()
{
	/*
	var ctx = Vars.Ctx;
	ctx.lineWidth = "2";
	ctx.strokeStyle="#FF0000";
	*/
	for(var i=0; i<Arm.List.length; ++i)
		Arm.List[i].draw();
}//eof




Arm.prototype.draw = function()
{
	var ctx = Vars.Ctx;
	var s = this.startPt();
	var e = this.endPt();
	var a = this.getTotalAngle();
	
	var w = this.image.width;
	var h = this.image.height;

	ctx.translate(s.x, s.y);
	ctx.rotate(a);
	ctx.drawImage(this.image, this.imagePt.x,this.imagePt.y , w,h);
	ctx.rotate(-a);
	ctx.translate(-s.x, -s.y);
	/*
	ctx.beginPath();
	
	ctx.moveTo(s.x, s.y);
	ctx.lineTo(e.x, e.y);
	
	ctx.stroke();
	*/
};//eof




Arm.prototype.imageOnLoad = function()
{this.isLoaded = true;};//eof




Arm.prototype.startPt = function()
{
	if(this.parentArm == null)
		return new Point2D(400, 500);
	else
		return this.parentArm.endPt();
};//eof




Arm.prototype.endPt = function()
{
	var pt = this.startPt();
	var a = this.getTotalAngle();
	
	var lx = Math.cos(a)*this.length;
	var ly = Math.sin(a)*this.length;
	
	return pt.add(lx,ly);
};//eof




Arm.prototype.getTotalAngle = function()
{
	if(this.parentArm == null)
		return this.angle;
	else
		return this.angle + this.parentArm.getTotalAngle();
};//eof


Arm.Init = function()
{
	var a0 = new Arm("assets/png/a0.png", null, 80, 0, new Point2D(-131,-68));
	var a3 = new Arm("assets/png/a3.png", a2, 80, Math.PI/4, new Point2D(-28,-32));
	var a2 = new Arm("assets/png/a2.png", null, 232, Math.PI/4, new Point2D(-99,-85));
	var a1 = new Arm("assets/png/a1.png", a0, 226, Math.PI/-4, new Point2D(-47,-65));
	
	a2.parentArm = a1;
	a3.parentArm = a2;
};