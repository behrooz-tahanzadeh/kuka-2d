function Point2D(x,y)
{
	this.x = x;
	this.y = y;
}//eoc



Point2D.prototype.distanceTo = function(pt)
{
	return this.distanceToXY(pt.x, pt.y)
}//eof



Point2D.prototype.distanceToXY = function(x,y)
{
	return Math.sqrt(Math.pow(this.x-x, 2) + Math.pow(this.y-y, 2));
};//eof


Point2D.prototype.update = function(x,y)
{
	this.x = x;
	this.y = y;
};//eof



Point2D.prototype.add = function(x,y)
{
	return new Point2D(this.x+x, this.y+y);
};//eof