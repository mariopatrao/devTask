function typewriter(){sContents=" ",iRow=Math.max(0,iIndex-iScrollAt);for(var e=document.getElementById("typedtext");iRow<iIndex;)sContents+=aText[iRow++]+"<br />";e.innerHTML=sContents+aText[iIndex].substring(0,iTextPos)+"",iTextPos++==iArrLength?(iTextPos=0,++iIndex!=aText.length?(iArrLength=aText[iIndex].length,setTimeout("typewriter()",500)):$(".hideFirst").fadeIn()):setTimeout("typewriter()",iSpeed)}var iRow,aText=new Array("Hello","Welcome to my solution to the Radley Yeldar developer task.","Click the link below to continue"),iSpeed=50,iIndex=0,iArrLength=aText[0].length,iScrollAt=20,iTextPos=0,sContents="";typewriter();