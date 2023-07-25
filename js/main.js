var inp = document.getElementById('inp')
var div=document.getElementById('div')
var mydata=[]
if(localStorage.getItem('data') !=null)
{
    mydata= JSON.parse( localStorage.getItem('data'))
    console.log(mydata) 
    display(mydata)
}





function createTask(){
  task={
    name:inp.value
  }
  mydata.push(task)
  localStorage.setItem('data',JSON.stringify(mydata))
  clearInp()
  display(mydata)
  console.log(mydata)
}


function display(arr){
 var lines =``
 for(var i = 0 ; i<arr.length;i++){
     lines+=`
     <tr class='w-100 d-flex justify-content-between '> 
     <td class='fs-2 text-white'>${i+1 } -         ${arr[i].name}</td>
     <td> <i class="fa-solid fa-trash text-white fs-2 " onclick=Deletetask(${i})></i> </td></tr>`
 }
 div.innerHTML = lines
}


function clearInp(){
    inp.value=''
}

function Deletetask(index){
    mydata= JSON.parse( localStorage.getItem('data'))
    mydata.splice(index,1)
   
    localStorage.setItem('data',JSON.stringify(mydata))
    display(mydata)
}





