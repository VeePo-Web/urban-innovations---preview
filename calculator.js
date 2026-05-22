// JavaScript Document

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function CalcArea(ObjID, ObjType) {
	ObjWidth = 'Width' + ObjID;
	ObjLength = 'Length' + ObjID;
	ObjArea = 'Area' + ObjID;
	
	if(ObjType != "Area" && ObjType != "Diameter" && ObjType != "AreaDiameter") {
		Width = 0;
		Length = 0;
		if(isNaN(document.getElementById(ObjWidth).value) == true) {
			document.getElementById(ObjWidth).style.background = '#FFCCCD';
		} else {
			document.getElementById(ObjWidth).style.background = '#FFFFFF';
			Width = eval(document.getElementById(ObjWidth).value);
		}
	
		if(isNaN(document.getElementById(ObjLength).value) == true)	{
			document.getElementById(ObjLength).style.background = '#FFCCCD';
		} else	{
			document.getElementById(ObjLength).style.background = '#FFFFFF';
			Length = eval(document.getElementById(ObjLength).value);
		}
	
		if(Width != undefined && Length != undefined) {
			document.getElementById(ObjArea).value = Width * Length;
		}
	} else if(ObjType == "Area") {
		//document.getElementById(ObjWidth).value = "";
		//document.getElementById(ObjLength).value = "";
	}	else if(ObjType == "AreaDiameter")	{
		//document.getElementById(ObjDiameter).value = "";
	}

	if(ObjType == "Diameter") {
		ObjDiameter = 'Diameter' + ObjID;
		ObjArea = 'Area' + ObjID;
	
		if(isNaN(document.getElementById(ObjDiameter).value) == true) {
			document.getElementById(ObjDiameter).style.background = '#FFCCCD';
		} else {
			document.getElementById(ObjDiameter).style.background = '#FFFFFF';
		}

		Radius = document.getElementById(ObjDiameter).value / 2;
		Radius = Radius * Radius;
		Radius = Radius * 3.1416;
		Radius = Math.round(Radius);
		document.getElementById(ObjArea).value = Radius;
	}

	Area1 = document.getElementById("Area1").value;
	Area2 = document.getElementById("Area2").value;
	Area3 = document.getElementById("Area3").value;
	Area4 = document.getElementById("Area4").value;
	Area5 = document.getElementById("Area5").value;
	Area6 = document.getElementById("Area6").value;

	if(isNaN(Area1) == true || Area1 == "") {
		Area1 = 0;
	}

	if(isNaN(Area2) == true || Area2 == "") {
		Area2 = 0;
	}

	if(isNaN(Area3) == true || Area3 == "") {
		Area3 = 0;
	}

	if(isNaN(Area4) == true || Area4 == "") {
		Area4 = 0;
	}

	if(isNaN(Area5) == true || Area5 == "") {
		Area5 = 0;
	}

	if(isNaN(Area6) == true || Area6 == "") {
		Area6 = 0;
	}

	TotalArea = parseInt(Area1) + parseInt(Area2) + parseInt(Area3) + parseInt(Area4) + parseInt(Area5) + parseInt(Area6);
	document.getElementById("TotalArea").value = TotalArea;
	
	Depth = document.getElementById("Depth").value;
	MulchReq = ((TotalArea * Depth) / 36);
	MulchReq = Math.round(MulchReq * Math.pow(10,1)) / Math.pow(10,1);
	document.getElementById("Mulch").value = MulchReq;
}