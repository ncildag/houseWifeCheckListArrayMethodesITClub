// Houswife has a toDoList and house wife will check it.

let myToDoList=[
    "clean beds",
    "vacuuming",
    "wash clothes",
    "(X)cooking",
    "(X)shopping",
    "pick up child"

];

function print(arr=[], title){
    console.log(`###### ${title} ######`)
    arr.forEach(function(a){
        console.log(a)
        
    });
}

/////////////// HOW CAN SHE FIND DONE ISSUES  /////////////////

function findDone(){
   const doneIssues = myToDoList.filter(function(item){

        return item.includes('(X)');
    });
    return doneIssues;
}


/////////////// HOW CAN SHE FIND UNDONE ISSUES  /////////////////

function findUndone(){
    const doneIssues = myToDoList.filter(function(item){
 
         return !item.includes('(X)');
     });
     return doneIssues;
 }
 

 function finishAllJobs(){
    const doneIssues = myToDoList.map(function(item){
 
        if(!item.includes('(X')){
         item = `(X) ${item}`;
        } 
         return item;
     });
     return doneIssues;
     
 }
 
 function isAllTheJobsDone (){
     const issues = finishAllJobs();
     const answer = issues.every(a=>a.includes('(X)'));

     /** if(answer==true){
         return "all of the issues is done WELL DONE";
     }
         return "all of the issues is not done";
         */
    return (answer == true) ? "all of the issues is done WELL DONE"  : "all of the issues is not done";
     }
     
 
 print(findDone(), 'DONE ISSUES');
 print(findUndone(), 'UNDONE ISSUES');
 print(finishAllJobs(), 'FINISH ALL JOBS');
 console.log('IS ALL OFF DONE',  isAllTheJobsDone());


 // DRY --> Don't repeat yourself That's why we have to change our code
 // KISS --> Keep it simple stupid 
