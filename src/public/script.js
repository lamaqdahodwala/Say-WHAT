function createdivs(data){
    let posts = String(data)
    posts = (posts.split(', '))
    for (var i of posts){
        if (i == 'None'){
            continue;
        }
        let div = document.createElement('div')

        
    }
    console.log('request sent')
    
}


function refresh(){
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/newestposts')
    .then(response => response.text())
    .then(data => createdivs(data))
}

function post(){
    unhide('postscreen')
    hide('thingstodo')
    hide('title')
    
}
function sendtoserver(){
    const data = {
        title: String(document.getElementsByTagName('textarea')[0].value),
        contents: String(document.getElementsByTagName('textarea')[1].value)
    }
    const request = new Request('https://saywhatserver.lamaqdahodwala.repl.co/post', {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) 
    fetch(request)
    .then(res => res.json())
    .then(res => console.log(res))

    alert(document.getElementsByTagName('textarea')[0].value)    
    
}

function hide(element){
    document.getElementById(element).hidden = true
}

function unhide(element){
    document.getElementById(element).hidden = false
}

