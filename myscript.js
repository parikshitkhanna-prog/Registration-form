let form = document.querySelector('form')
form.addEventListener('submit',function(event)
{
  event.preventDefault()

  let fname = form.elements.fname.value
  let lname = form.elements.lname.value
  let city = form.elements.city.value
  let gender = form.elements.gender.value
  let tskills = form.elements['tskills']
  let a=[]
  let error=document.getElementById('error')

  if(fname==''){
    error.innerHTML="First name is required";
    document.getElementById('fname').focus()
  }

  else if(lname==''){
    error.innerHTML="Last name is required";
    document.getElementById('lname').focus()
  }

  else if(city==''){
    error.innerHTML="City is required";
    document.getElementById('city').focus()
  }

  else if(gender==''){
    error.innerHTML="Select your gender";
  }

  else if(tskills[0].checked==false && tskills[1].checked==false && tskills[2].checked==false)
  {
    error.innerHTML="Atleast one skill is required";
  }
  else
  {
    error.innerHTML=''
    for(let i=0;i<tskills.length;i++)
  {
    if(tskills[i].checked)
    {
      a.push(tskills[i].value)
    }

  }

  console.log(fname)
  console.log(lname)
  console.log(city)
  console.log(gender)
  console.log(a)
}
})



  