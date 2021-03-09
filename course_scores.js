'use strict';
function exam(code, name, cfu, score, honors, datePassed){
this.code = code;
this.name = name;
this.cfu = cfu;
this.score = score;
this.honors = honors;
this.datePassed = datePassed;
}

function examList(){
    this.exams = [];
    this.exams.add = (exam) => {
        this.exams.push(exam);
    };
    this.find = (courseCode) => {
        const result = this.exams.filter(ex => ex.code === courseCode);
        if(result.length == 1){
            return result[0];
        }else{
            return undefined;
        }
    }
}

const war = new exam('01XF', 'web', 6, 30, false, '08-03-2021');
const db = new exam('01AB', 'Data science', 8, 27, false, '08-01-2021');
console.log(war);
console.log(db);
debugger;