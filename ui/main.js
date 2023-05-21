function getData(){
    console.log('fuck')
    let input = window.document.getElementById('inp').value
    console.log(input)
    const backUrl = `http://localhost:3000/api/getdata?url=${input.toString()}`
    console.log(backUrl)
    let data = fetchData(backUrl)
}

function fetchData(url){
    console.log("sfsdfg")
    fetch(url).then(res => res.json()).then(res =>{
        makeTable(res.res)
    })
}

function makeTable(data){
    let th = ` <tr>
    <th>Scripts</th>
    <th>tags</th>
    <th>AST</th>
  </tr>`
  let scripts = data.scripts
  let tags = data.tags
  let ast = data.ast
  console.log("ast",ast)
  let tagTrs = ''

  
  tags.forEach(element => {
    tagTrs += `<tr><td>${element}</td></tr>`
  });
   console.log(scripts)
    let table1 = `<table>
    <tr>
    <th>Tags</th>
    </tr>
        ${tagTrs}
    </table>`
    console.log(table1)
    let tableDiv = window.document.getElementById('tags')
    tableDiv.innerHTML = table1
    let scriptsTags = ''
    scripts.forEach(e => {
        scriptsTags += `<tr><td>${e}</td></tr>`
    })
   let table2 = `<table>
   <tr>
   <th>Scripts</th>
   </tr>
       ${scriptsTags}
   </table>`
   let scriptt = window.document.getElementById('script')
   scriptt.innerHTML = table2

   let astdiv = window.document.getElementById('ast')
   astdiv.innerHTML = `<div>AST<br>${JSON.stringify(ast)}</div>`
}