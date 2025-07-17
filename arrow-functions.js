///////////////////////////////////////////////
// Program 1 - Old ES5 approach

const { text } = require("stream/consumers");

// const square = function(x) {
//     return x * x
// }



// const square = (x) => x * x

// console.log(square(3))

///////////////////////////////////////////////
// Program 2 - Using old way ES5 with function keyword

// const event = {
//     name : 'CAPM training',
//     // adding below line later
//     guestList:['Rahul','Suraj','Pankaj'],
//     printGuestList(){
//         that = this
//         console.log('Guest list for', this.name)

//     this.guestList.forEach( function(guest) {
//         console.log(guest+' is attending '+that.name)
//     });
//     },

// }

// event.printGuestList()

///////////////////////////////////////////////

// Program 3 - Using new way ES6 with arrow function

// const event = {
//     name : 'CAPM training',
//     // adding below line later
//     guestList:['Rahul','Suraj','Pankaj'],
//     printGuestList(){
//         that = this
//         console.log('Guest list for', this.name)

//     this.guestList.forEach((guest) => {            // removed function keyword
//         console.log(guest+' is attending '+that.name)
//     });
//     },

// }

// event.printGuestList()


//////////////////////////////////////////////////////
// // Program 4 : filtering data in long way without arrow function

// const task = {
//     tasks:[

//         {
//             text:'Grocery Shopping',
//             completed: true
//         },
//         {
//             text:'Laptop shopping',
//             completed: false
//         },
//         {
//             text:'Gift shopping',
//             completed: false
//         }

//     ],
//     getTasksToDo(){
//         const tasktodo = this.tasks.filter((task)=>{
//             return task.completed === false
//         })
//         return tasktodo
//     }
// }

// console.log(task.getTasksToDo())

//////////////////////////////////////////////////////
// Program 5 : Simplifying in one line
const task = {
    tasks:[

        {
            text:'Grocery Shopping',
            completed: true
        },
        {
            text:'Laptop shopping',
            completed: false
        },
        {
            text:'Gift shopping',
            completed: false
        }

    ],
    getTasksToDo(){
        debugger
        return taskstodo = this.tasks.filter((task)=> task.completed ===  false)
    }
} 

console.log(task.getTasksToDo())