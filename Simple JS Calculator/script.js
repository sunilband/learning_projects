let ans=document.querySelector('.ans')

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
chk.addEventListener('click',()=>ans.textContent="0")

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

//calculate
function calculate(){
let temp=ans.textContent
ans.textContent=eval(temp.replaceAll("X","*"))
}
chk=document.querySelector('.equ')
chk.addEventListener('click',calculate)

