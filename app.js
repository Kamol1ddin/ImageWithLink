let input = document.querySelector('.search-inp')
let search = document.querySelector('.search-btn')
let wrapper = document.querySelector('.wrapper')
let container = document.querySelector('.container')

search.addEventListener('click', () =>{
        let img = document.createElement('img')
        img.setAttribute('src', input.value)
        wrapper.append(img)
        img.addEventListener('click', () =>{    
                let imgLink = document.createElement('img')
                imgLink.setAttribute('src', input.value)
                container.append(imgLink)
        })
})