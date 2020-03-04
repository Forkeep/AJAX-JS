getCss.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET','/style.css')
   request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status === 200){
            const style = document.createElement('style')
            style.textContent = String(request.response)
            const head = document.head
            head.appendChild(style)
        }
   }
    request.send()
}

getJS.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 400){
                let script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('JS加载失败...')
            }
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status <400){
                let template = document.createElement('template')
                template.innerHTML = (request.response).trim()
                document.body.appendChild(template.content.firstChild)

            }else {
                alert('HTML 加载失败')
            }
        }
    }
    request.send()

}

getXML.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange =()=>{
        if (request.readyState === 4){
            if(request.status >= 200 && request.status <400){
                console.log(request.responseXML)
                text = request.responseXML.getElementsByTagName('food')[0].textContent
                alert(`XML说得好：${text}`)
            }else{
                alert('XML加载失败...')
            }
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if (request.status >=200 && request.status <400){
                console.log(typeof request.response)
               let  json = JSON.parse(request.response)
                console.log(json)
                alert('JSON 推荐：'+json.book)
            }else{
                alert('JSON加载失败...')
            }
        }
    }
    request.send()
}

let n =1
getPage.onclick = ()=>{
    if(n>=3){
        alert('没有下一页了')
        return 0
    }
    let request = new XMLHttpRequest()
    request.open('get',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if (request.readyState ===4){
            if (request.status >= 200 && request.status <400){
                n=n+1

                const array = JSON.parse(request.response)
                array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    liWrapper.appendChild(li)
                })
            }else {
                alert('没有下一页了')
            }
        }
    }
    request.send()




}


