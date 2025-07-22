setTimeout(()=> {
    console.log('Two seconds are up')
}, 2000);    // this will wait for 2 seconds then it will be printed.


const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length = 4
})

// so here whichever in list has length 4 is stored in shortNames

const geocode =(address, callback) => {
    setTimeout(()=>{
        const data = {
        latitude: 0,
        longitude: 0
    }
    //return data
    callback(data)
    }, 2000)

}

//const data = geocode('Philadelphia')   // this will call geocode function with parameter address

// below is the way to call a callback function
geocode('Philadelphia', (data)=>{
    console.log(data)
})

// console.log(data)




////////////////////////////////////////////////////////////




