fetch("https://api.github.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    // console.log(data);
    const parent = document.getElementById('parent');
    for(let i = 0; i < data.length; i++) {
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    
    image.style.height = "250px";
    image.style.width = "250px";
    parent.append(image);
    }
    
})

// in the next file we will see what is json and how to work with it