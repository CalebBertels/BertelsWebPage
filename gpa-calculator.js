var App = {
    launch:function(){
        App.getAllGrades();
        App.getAllCreditHours();
        App.getGPATotal();
    },

    getAllGrades:function(){
        var grade1 = $('#grade1')[0];
        var grade2 = $('#grade2')[0];
        var grade3 = $('#grade3')[0];
        var grade4 = $('#grade4')[0];
        var grade5 = $('#grade5')[0];
        var grade6 = $('#grade6')[0];
    },

    getAllCreditHours:function(){
        var credit1 = $('#credit1')[0];
        var credit2 = $('#credit2')[0];
        var credit3 = $('#credit3')[0];
        var credit4 = $('#credit4')[0];
        var credit5 = $('#credit5')[0];
        var credit6 = $('#credit6')[0];
    },

    getGPATotal:function () {
        var score1 = Number(grade1.options[grade1.selectedIndex].value) * Number(credit1.value);
        var score2 = Number(grade2.options[grade2.selectedIndex].value) * Number(credit2.value);
        var score3 = Number(grade3.options[grade3.selectedIndex].value) * Number(credit3.value);
        var score4 = Number(grade4.options[grade4.selectedIndex].value) * Number(credit4.value);
        var score5 = Number(grade5.options[grade5.selectedIndex].value) * Number(credit5.value);
        var score6 = Number(grade6.options[grade6.selectedIndex].value) * Number(credit6.value);

        var totalScore = score1 + score2 + score3 + score4 + score5 + score6;
        var totalCredits = Number(credit1.value) + Number(credit2.value) + Number(credit3.value) + Number(credit4.value) + Number(credit5.value) + Number(credit6.value);
        var gpa = (totalScore/totalCredits);

        if(isNaN(gpa)){
            document.getElementById("displayGPAError").innerHTML = ("Please enter details for at least one class, and make sure your Credit Hours are all numbers.")
        }else{
            document.getElementById("displayGPA").innerHTML = ("Your GPA is: " + gpa);
        }

    }
};