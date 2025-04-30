function result() {
    var name = document.getElementById('name').value;
    var sub1 = parseInt(document.getElementById('sub1').value);
    var sub2 = parseInt(document.getElementById('sub2').value);
    var sub3 = parseInt(document.getElementById('sub3').value);

    var totalmarks = 300;
    var obtmarks = sub1 +sub2 + sub3;
    var Percentage = (obtmarks / totalmarks) * 100;
    var grade ="";
    if (Percentage >= 90) {
        console.log(Percentage);
        var grade = "A";
        console.log(grade);
    }
    else if (Percentage >= 80) {
        console.log(Percentage)
        var grade = "B";
        console.log(grade);
    }
    else if (percentage >= 70) {
        console.log(Percentage)
        var grade = "C";
        console.log(grade);
    }
    else if (percentage >= 60) {
        console.log(Percentage)
        var grade = "D";
        console.log(grade);
    }
    else if (percentage >= 50) {
        console.log(Percentage)
        var grade = "Fail";
        console.log(grade);
    }
    document.getElementById('rName').innerHTML = name;
    document.getElementById('total').innerHTML = obtmarks;
    document.getElementById('average').innerHTML = Percentage;
    document.getElementById('grade').innerHTML = grade;
}