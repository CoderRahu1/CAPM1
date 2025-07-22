setTimeout(()=> {
    console.log('Two seconds are up')
}, 2000);    // this will wait for 2 seconds then it will be printed.


const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length = 4
})

// so here whichever in list has length 4 is stored in shortNames

const geocode =(address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    return data
}

const data = geocode('Philadelphia')   // this will call geocode function with parameter address
console.log(data)
