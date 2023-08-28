function jfun1()
    {
        var name= form1.txt1.value;
        var nam1=form1.txt2,value;
        var nam2=form1.txt3,value;
        if(name=="" || nam1==""||nam2=="")
        {
            alert("Data Required!!!")
            form1.txt1.focus();
            return(false);
            
        }
        else{
            alert("Thank you for contacting us!");
            return true;
        }
    }


      function calculateResult() {
        var name = document.getElementById("name").value;
        var subject1 = parseFloat(document.getElementById("subject1").value);
        var subject2 = parseFloat(document.getElementById("subject2").value);   
        var subject3 = parseFloat(document.getElementById("subject3").value); 
        if(name=="" || subject1==""||subject2==""||subject3=="")
        {
            alert("Data Required!!!")
            form1.txt1.focus();
            return(false);
            
        }
        else{  
        var totalMarks = subject1 + subject2 + subject3; 
        var maximumMarks = 300; 
        var percentage = (totalMarks / maximumMarks) * 100;
        document.getElementById("result").innerHTML = "Student Name: " + name + "<br>" +
          "Total Marks: " + totalMarks + "<br>" +
          "Percentage: " + percentage.toFixed(2) + "%" + "<br>" +
          "Maximum Marks: " + maximumMarks; 
      }
    
      }

      function jfun3()
      {
          prompt("Enter Your Email to Subscribe")
      }
      function jfun4(){
        window.open("https://www.wise.live/blog/how-to-function-live-virtual-classroom-software/#:~:text=Teachers%20can%20do%20it%20with,%2C%20exams%2C%20and%20deadlines%20regularly.","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=400,width=400,height=400");
      }
    