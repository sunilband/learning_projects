let ans=document.querySelector('.ans')

//very very bad solution to not add consecutive operators but it works LOL
let incl=["+","-","x","X","/","."]
setInterval(
    function () {
        if(incl.includes(ans.textContent[ans.textContent.length-1]) && incl.includes(ans.textContent[ans.textContent.length-2])){
           ans.textContent=ans.textContent.slice(0, -1);
        }
        
    }
,10)


//operator event listners
let chk=document.querySelector('.plus')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"+")

chk=document.querySelector('.minus')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"-")

chk=document.querySelector('.mul')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"X")

chk=document.querySelector('.div')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"/")

chk=document.querySelector('.dot')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+".")

chk=document.querySelector('.clr')
chk.addEventListener('click',()=>ans.textContent=" ")

//numbers event listners
chk=document.querySelector('.one')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"1")

chk=document.querySelector('.two')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"2")

chk=document.querySelector('.three')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"3")

chk=document.querySelector('.four')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"4")

chk=document.querySelector('.five')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"5")

chk=document.querySelector('.six')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"6")

chk=document.querySelector('.seven')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"7")

chk=document.querySelector('.eight')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"8")

chk=document.querySelector('.nine')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"9")

chk=document.querySelector('.zero')
chk.addEventListener('click',()=>ans.textContent=ans.textContent+"0")
//calculate
function calculate(){
let temp=ans.textContent
ans.textContent=eval(temp.replaceAll("X","*")).toFixed(4)
}
chk=document.querySelector('.equ')
chk.addEventListener('click',calculate)

