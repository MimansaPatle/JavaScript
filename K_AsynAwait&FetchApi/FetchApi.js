// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')      //data ko laneki promise krta h  // this will return a promise

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {        // this is a post request, post is used to send data to the server
                method: 'POST',                                              
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json()        //data ko parse krne ki promise   // this will return a promise that resolves to the JSON data
    // let data = await x.text()                                   // this will return a promise that resolves to the text data
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })


//post request is used to send data to the server, it is used to create a new resource on the server & it is secure than get request
//get request is used to get data from the server, it is used to read a resource from the server & it is not secure as the data is sent in the URL
//put request is used to update a resource on the server, it is used to update an existing resource on the server & it is secure than get request
//delete request is used to delete a resource from the server, it is used to delete an existing resource from the server & it is secure than get request
//patch request is used to update a resource on the server, it is used to update an existing resource on the server & it is secure than get request