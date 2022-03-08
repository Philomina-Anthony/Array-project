function display(){
  // alert("you clicked submit button");
  var student_names  = []
  student1_name = document.getElementById("r1").value;
  // alert(student1_name);
  for(i=1; i<=4; i++)
  {
    student_name = document.getElementById("r" + i).value;
    student_names.push(student_name)
    student_names.sort()
  }
  document.getElementById("out1").innerText=student_names;
  
  // alert(student_names.toString())
}
 