function setCookie(name, value) { 
        var exp = new Date(); 
        exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000); 
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"; 
}

function getCookie(name) { 
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); 
        if (arr = document.cookie.match(reg)) 
            return unescape(arr[2]); 
        else 
            return null; 
}

function saveToFile(o){
	var a=document.createElement("a");
	var s=JSON.stringify(o);
	s="data="+s;
	a.setAttribute("href","data:text/plain;charset=utf-8,"+s);
	a.setAttribute("download","map_data.js");
	a.style.display="none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

// 	ctx.save();
// 	ctx.beginPath();
// 	ctx.fillStyle= "rgba("+this.c[0]+","+this.c[1]+","+this.c[2]+","
// 		+((this.value-this.range[0])/(this.range[1]-this.range[0])*1.05-0.05)+")";	
// 	ctx.moveTo(this.x-this.r,this.y);
// 	ctx.lineTo(this.x-this.r/2,this.y-this.r*Math.sqrt(3)/2);
// 	ctx.lineTo(this.x+this.r/2,this.y-this.r*Math.sqrt(3)/2);
// 	ctx.lineTo(this.x+this.r,this.y);
// 	ctx.lineTo(this.x+this.r/2,this.y+this.r*Math.sqrt(3)/2);
// 	ctx.lineTo(this.x-this.r/2,this.y+this.r*Math.sqrt(3)/2);
// 	ctx.lineTo(this.x-this.r,this.y);
// 	ctx.fill();
// 	ctx.restore();