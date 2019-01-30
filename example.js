/*
console.log("A;B");
alert("hello world");
var test = prompt("type in something");
*/




/*
var a = Number(prompt("a"));
var b = Number(prompt("b"));
*/
/*
if (a>b){
    alert("a>b");
}
 else if(a==b){
    alert("a=b");
}
 else if(a<b){
    alert("a<b");
}
else {alert("error");}
*/
/*
function compare(a,b){
    if (a>b){
    return("a>b");
}
 else if(a==b){
    return("a=b");
}
 else if(a<b){
    return("a<b");
}
else {return("error");}
    }

alert(compare(a,b));

*/


/*




var p = 0,q = 0,r = 0;

function compare(a,b){
    if (a>b){
    p=1;
}
 else if(a==b){
    q=1;
}
 else if(a<b){
    r=1;
}
else {return("error");}
    }

alert(compare(a*b,a*a));

if (p=1){alert("big")};
if (q=1){alert("same")};
if (r=1){alert("small")};


*/




var user = prompt("剪刀?石頭?布?");

if(user=="剪刀"||user=="石頭"||user=="布"){

alert("你出"+user);
var computer = Math.random();
if(computer <=0.33){
    computer = "剪刀";
}
 else if(computer <=0.66){
    computer = "石頭";
}
 else{
    computer = "布";
}
alert("電腦出"+computer);
if(computer == user){
    alert("平手");
    alert("按F5以繼續");
}
else if(computer=="剪刀"){
        if(user=="石頭"){
            alert("你贏了");
            alert("按F5以繼續");
        }
        else{alert("你輸了");
            alert("按F5以繼續");}
    }
else if(computer=="石頭"){
        if(user=="布"){
            alert("你贏了");
            alert("按F5以繼續");
        }
        else{alert("你輸了");
            alert("按F5以繼續");}
    }
else if(computer=="布"){
        if(user=="剪刀"){
            alert("你贏了");
            alert("按F5以繼續");
        }
        else{alert("你輸了");
            alert("按F5以繼續");}
    }
}
else{alert("輸入有誤!!");
    alert("按F5以繼續");
    }



















































