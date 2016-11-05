/*Camille Campbell
ID:620088143
Shuffle partially works*/
window.onload = function()
{
	
	var start=false;
	var id=document.getElementById("puzzlearea");
	var getAll=id.getElementsByTagName("div");
	var sb=document.getElementById("shufflebutton");
	var original=[];
	var allPos=[];
	var store,store1,store2,el;
	var ch=false;
	
	//<--------Set background picture----------------->//
	$(getAll[0]).css('background-position','0px 400px');
	$(getAll[1]).css('background-position','-100px 400px');
	$(getAll[2]).css('background-position','-200px 400px');
	$(getAll[3]).css('background-position','-300px 0px');
	$(getAll[4]).css('background-position','0px 300px');
	$(getAll[5]).css('background-position','-100px 300px');
	$(getAll[6]).css('background-position','-200px 300px');
	$(getAll[7]).css('background-position','-300px 300px');
	$(getAll[8]).css('background-position','0px 200px');
	$(getAll[9]).css('background-position','-100px 200px');
	$(getAll[10]).css('background-position','-200px 200px');
	$(getAll[11]).css('background-position','-300px 200px');
	$(getAll[12]).css('background-position','0px 100px');
	$(getAll[13]).css('background-position','-100px 100px');
	$(getAll[14]).css('background-position','-200px 100px');
	
	//<---------Positioning divs-------------->//
	for (i=0;i<getAll.length;i++)
	{
		$(getAll[i]).css("position","relative");
		getAll[i].style.cssFloat= "left";
		getAll[i].style.styleFloat= "left";
		getAll[i].className="puzzlepiece";
		store=$(getAll[i]).offset();
		storePosition(store.top,store.left,original);
		storeAll(store.top,store.left,allPos);
		$(getAll[i]).attr("id",i);
	}
	storeAll(402,504,allPos);
	
	//<--------Stores the original positions of the puzzle pieces------->//
	function storePosition(xval,yval, original)
	{
		original.push({x: xval, y: yval})
	};
	
	//<----------Stores all the positions in the puzzle--------->//
	function storeAll(xval,yval, allPos)
	{
		allPos.push({x: xval, y: yval})
	};
	for (i=0;i<allPos.length;i++)//remove this
	{
		console.log("Top1:"+allPos[i].x+" "+"Left:"+allPos[i].y);
	}
	
	//<------Shuffles the puzzle pieces when the shuffle button is clicked----->//
	sb.addEventListener("click",function()
	{
		var parent=$("#puzzlearea");
		var child= parent.children();
		
		for (i=0;i<getAll.length;i++)
		{
			parent.append(child.splice(Math.floor(Math.random() * getAll.length), 1)[0]);
			
		}
		ch=true;
			for (i=0;i<getAll.length;i++)
			{
				getAll[i].addEventListener("mouseover",function()//this works
				{
					for(j=0;j<getAll.length;j++)
					{
						for(i=0;i<allPos.length;i++)
						{
							var numx=allPos[i].x;
							var numy=allPos[i].y;
							 el=getEl(allPos[i].x,allPos[i].y);
							if (!$(el).is("div"))
							{	
								if(numx==402 && numy==504)
								{
									changeClass(getAll[14]);
									changeClass(getAll[11]);
									
									getAll[11].addEventListener("click", function()
									{
										$(getAll[11]).offset({top:402, left:504});
									})
									getAll[14].addEventListener("click", function()
									{
										$(getAll[14]).offset({top:402, left:504});
									})
								}
								else if(numx==402 && numy==404)
								{
									changeClass(getAll[10]);
									changeClass(getAll[13]);
									changeClass(getAll[14]);
									
									getAll[10].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[10]).offset({top:402, left:404});
									})
									getAll[13].addEventListener("click", function()
									{
										//this.style.left="100px";
										$(getAll[13]).offset({top:402, left:404});
									})
									getAll[14].addEventListener("click", function()
									{
										//this.style.left="-100px";
										$(getAll[14]).offset({top:402, left:404});
										console.log($(getAll[14]).offset());
									})
								}
								else if(numx==402 && numy==304)
								{
									changeClass(getAll[9]);
									changeClass(getAll[12]);
									changeClass(getAll[13]);
									getAll[9].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[9]).offset({top:402, left:304});
									})
									getAll[12].addEventListener("click", function()
									{
										//this.style.left="100px";
										$(getAll[12]).offset({top:402, left:304});
									})
									getAll[13].addEventListener("click", function()
									{
										$(getAll[13]).offset({top:402, left:304});
									})
								}
								else if(numx==402 && numy==204)
								{
									changeClass(getAll[8]);
									changeClass(getAll[12]);
									getAll[8].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[8]).offset({top:402, left:204});
									})
									getAll[12].addEventListener("click", function()
									{
										//this.style.left="-100px";
										$(getAll[12]).offset({top:402, left:204});
										//console.log($(getAll[14]).offset());
									})
								}
								else if(numx==302 && numy==504)
								{
									changeClass(getAll[7]);
									changeClass(getAll[11]);
									getAll[7].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[7]).offset({top:302, left:504});
									})
									if($(getAll[10]).offset().left==404)
									{
										changeClass(getAll[10]);
										getAll[10].addEventListener("click", function()
										{
											//this.style.left="100px";
											$(getAll[10]).offset({top:302, left:504});
										})
									}
									getAll[11].addEventListener("click", function()
									{
										$(getAll[11]).offset({top:302, left:504});
									})
									if($(getAll[3]).offset().top==202 || $(getAll[3]).offset().left==404)
									{
										changeClass(getAll[3]);
										getAll[3].addEventListener("click", function()
										{
											$(getAll[3]).offset({top:302, left:504});
										})
									}
								}
								else if(numx==302 && numy==404)
								{
									changeClass(getAll[6]);
									changeClass(getAll[10]);
									changeClass(getAll[14]);
									if($(getAll[11]).offset().top==302)
									{
										changeClass(getAll[11]);
										getAll[11].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[11]).offset({top:302, left:404});
										})
									}
									getAll[6].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[6]).offset({top:302, left:404});
									})
									if($(getAll[7]).offset().top==302)
									{
										changeClass(getAll[7]);
										getAll[7].addEventListener("click", function()
										{
											//this.style.left="100px";
											$(getAll[7]).offset({top:302, left:404});
										})
									}
									getAll[14].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[14]).offset({top:302, left:404});
									})
									getAll[10].addEventListener("click", function()
									{
										$(getAll[10]).offset({top:302, left:404});
									})
								}
								else if(numx==302 && numy==304)
								{
									
									changeClass(getAll[8]);
									changeClass(getAll[9]);
									changeClass(getAll[13]);
									if($(getAll[10]).offset().left==404)
									{
										changeClass(getAll[10]);
										getAll[10].addEventListener("click", function()
										{
										//this.style.top="100px";
											$(getAll[10]).offset({top:302, left:304});
										})
									}
									if($(getAll[5]).offset().top==202)
									{
										changeClass(getAll[5]);
										getAll[5].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[5]).offset({top:302, left:304});
										})
									}
									getAll[8].addEventListener("click", function()
									{
										//this.style.left="100px";
										$(getAll[8]).offset({top:302, left:304});
									})
									getAll[9].addEventListener("click", function()
									{
										$(getAll[9]).offset({top:302, left:304});
									})
									getAll[13].addEventListener("click", function()
									{
										$(getAll[13]).offset({top:302, left:304});
									})
								}
								else if(numx==302 && numy==204)
								{
									changeClass(getAll[4]);
									changeClass(getAll[12]);
									changeClass(getAll[8]);
									getAll[4].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[4]).offset({top:302, left:204});
									})
									getAll[12].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[12]).offset({top:302, left:204});
									})
									getAll[8].addEventListener("click", function()
									{
										$(getAll[8]).offset({top:302, left:204});
									})
								}
								else if(numx==202 && numy==504)
								{
									changeClass(getAll[3]);
									changeClass(getAll[6]);
									changeClass(getAll[7]);
									getAll[3].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[3]).offset({top:202, left:504});
									})
									getAll[6].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[6]).offset({top:202, left:504});
									})
									getAll[7].addEventListener("click", function()
									{
										$(getAll[7]).offset({top:202, left:504});
									})
								}
								else if(numx==202 && numy==404)
								{
									
									changeClass(getAll[5]);
									changeClass(getAll[10]);
									changeClass(getAll[6]);
									if ($(getAll[2]).offset().top == 202)
									{
										changeClass(getAll[2]);
										getAll[2].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[2]).offset({top:202, left:404});
										})
									}
									if ($(getAll[3]).offset().top == 202)
									{
										changeClass(getAll[3]);
										getAll[3].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[3]).offset({top:202, left:404});
										})
									}
									getAll[5].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[5]).offset({top:202, left:404});
									})
									getAll[10].addEventListener("click", function()
									{
										$(getAll[10]).offset({top:202, left:404});
									})
									getAll[6].addEventListener("click", function()
									{
										$(getAll[6]).offset({top:202, left:404});
									})
									if ($(getAll[7]).offset().top == 202)
									{
										changeClass(getAll[7]);
										getAll[7].addEventListener("click", function()
										{
											$(getAll[7]).offset({top:202, left:404});
										})
									}
								}
								else if(numx==202 && numy==304)
								{
									changeClass(getAll[4]);
									changeClass(getAll[9]);
									changeClass(getAll[5]);
									changeClass(getAll[6])
									getAll[6].addEventListener("click", function()
									{
											//this.style.top="100px";
										$(getAll[6]).offset({top:202, left:304});
									})
									if($(getAll[1]).offset().left==304)
									{
										changeClass(getAll[1]);
										getAll[1].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[1]).offset({top:202, left:304});
										})
									}
									getAll[4].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[4]).offset({top:202, left:304});
									})
									getAll[9].addEventListener("click", function()
									{
										$(getAll[9]).offset({top:202, left:304});
									})
									getAll[5].addEventListener("click", function()
									{
										$(getAll[5]).offset({top:202, left:304});
									})
								}
								else if(numx==202 && numy==204)
								{
									changeClass(getAll[0]);
									changeClass(getAll[4]);
									changeClass(getAll[8]);
									getAll[0].addEventListener("click", function()
									{
										//this.style.top="100px";
										$(getAll[0]).offset({top:202, left:204});
									})
									getAll[4].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[4]).offset({top:202, left:204});
									})
									getAll[8].addEventListener("click", function()
									{
										$(getAll[8]).offset({top:202, left:204});
									})
								}
								else if(numx==102 && numy==504)
								{
									
									
									changeClass(getAll[3]);
									if($(getAll[2]).offset().top==102)
									{
										changeClass(getAll[2]);
										getAll[2].addEventListener("click", function()
										{
											//this.style.top="100px";
											$(getAll[2]).offset({top:102, left:504});
										})
									}
									if($(getAll[7]).offset().top==202)
									{
										changeClass(getAll[7]);
										getAll[7].addEventListener("click", function()
										{
											//this.style.top="-100px";
											$(getAll[7]).offset({top:102, left:504});
										})
									}
									getAll[3].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[3]).offset({top:102, left:504});
									})
								}
								else if(numx==102 && numy==404)
								{
									
									changeClass(getAll[6]);
									
									if($(getAll[1]).offset().top==102)
									{
										changeClass(getAll[1]);
									}
									if($(getAll[3]).offset().top!=102 && $(getAll[3]).offset().left==504)
									{
										changeClass(getAll[2]);
										console.log($(getAll[3]).offset());
										getAll[2].addEventListener("click", function()
										{
											//this.style.top="-100px";
											$(getAll[2]).offset({top:102, left:404});
										})
									}
									else
									{
										changeClass(getAll[2]);
										changeClass(getAll[3]);
										getAll[3].addEventListener("click", function()
										{
											//this.style.top="-100px";
											$(getAll[3]).offset({top:102, left:404});
										})
										console.log($(getAll[3]).offset());
										getAll[2].addEventListener("click", function()
										{
											//this.style.top="-100px";
											$(getAll[2]).offset({top:102, left:404});
										})
									}
									getAll[1].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[1]).offset({top:102, left:404});
									})
									getAll[6].addEventListener("click", function()
									{
										//this.style.top="-100px";
										$(getAll[6]).offset({top:102, left:404});
									})
								}
								else if(numx==102 && numy==304)
								{
									changeClass(getAll[0]);
									changeClass(getAll[1]);
									
									if ($(getAll[2]).offset().left == 404)
									{
										changeClass(getAll[2]);
										getAll[2].addEventListener("click", function()
										{
											//this.style.top="-100px";
											$(getAll[2]).offset({top:102, left:304});
										})
									}
									if ($(getAll[5]).offset().top == 202)
									{
										changeClass(getAll[5]);
										getAll[5].addEventListener("click", function()
										{
											
											$(getAll[5]).offset({top:102, left:304});
										})
									}
									getAll[0].addEventListener("click", function()
									{
											
											$(getAll[0]).offset({top:102, left:304});
									})
									getAll[1].addEventListener("click", function()
									{
											
											$(getAll[1]).offset({top:102, left:304});
									})
								}
								else if(numx==102 && numy==204)
								{
									changeClass(getAll[0]);
									if ($(getAll[1]).offset().top == 102)
									{
										changeClass(getAll[1]);
										getAll[0].addEventListener("click", function()
										{
											
											$(getAll[0]).offset({top:102, left:204});
										})
									}
									if($(getAll[1]).offset().top==102)
									{
										changeClass(getAll[1]);
										getAll[0].addEventListener("click", function()
										{
											
											$(getAll[1]).offset({top:102, left:204});
										})
									}
									
									if($(getAll[2]).offset().top==102)
									{
										changeClass(getAll[2]);
										getAll[2].addEventListener("click", function()
										{
											
											$(getAll[2]).offset({top:102, left:204});
										})
									}
								}
							}
						}
					}				
				});
			
				getAll[i].addEventListener("mouseleave",function()
				{
					for(j=0;j<getAll.length;j++)
					{
						getAll[j].className="puzzlepiece";
					}				
				});
			}
		
	});
	
	//<-----------Stores the element that is at a position every 1ms----->//
	window.setInterval(function()
	{
			for(i=0;i<allPos.length;i++)
			{
			    el=getEl(allPos[i].x,allPos[i].y);
			}
			
	},100);
	
	//<-----------Change class of div-------->//
	function changeClass(ele)
	{
		ele.className="puzzlepiece movablepiece";
	}
	
	//<---Checks the current positions of each puzzle piece--->// 
	window.setInterval(function()//change
	{
		var s="#";
		for(i=0;i<getAll.length;i++)
		{
			s="#"+i;
			console.log($(s).offset());
			if(ch)
			{
				if(original[i].x==$(s).offset().top && original[i].y==$(s).offset().left)
				{
					$("body").css("backgroundColor","green");
					document.querySelector("h1").innerHTML="You WIN!";
				}
				else
				{
				$("body").css("backgroundColor","white");
				document.querySelector("h1").innerHTML="Fifteen Puzzle";
				}
			}
		}
	},500);
	
	//<-----------------Gets the element at a certain position------------->//
	function getEl(top,left)
	{
		//numx=top;
		//numy=left;
		return $("body").find("div.puzzlepiece").filter(function() 
		{
			//numx=$(this).offset().top;
			//numy=$(this).offset().left
            return $(this).offset().top == top && $(this).offset().left == left;
        });
	}
	
	
}
