var images=["father.jpg", "mother.jpg", "skye.jpg", "daughter.jpg"];
var names=["Abhishek", "Richa", "Skye", "Siya"];
var i = 0 ;
function change(){
document.getElementById("roses").src=images[i];
document.getElementById("name").innerHTML=names[i];
i++;
if(i==4){
    i=0;
}

}

