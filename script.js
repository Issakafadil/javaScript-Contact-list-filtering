let filter = document.getElementById('inputFilter')

filter.addEventListener('keyup', filterName =>{
    //get value of the input

    let keystroke = document.getElementById('inputFilter').value.toUpperCase()
    
    //get the uls 
    let name = document.getElementById('names')

    
     
    //get the lis 
    let li = name.querySelectorAll('li.collection-item')

    //loop through the list of names

    li.forEach(listname =>{
       let a = listname.getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(keystroke) > -1){
            listname.style.display = ''
           

        }else{
            listname.style.display = 'none'
           
        }
    })
})
