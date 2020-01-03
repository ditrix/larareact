const arr = [
    {"DModelID":"0","Name":"НД","DMarkID":"11487"},
    {"DModelID":"1","Name":"ACE","DMarkID":"57"},
    {"DModelID":"2","Name":"COBRA","DMarkID":"57"},
    {"DModelID":"3","Name":"FRUEHAUF","DMarkID":"295"},
    {"DModelID":"4","Name":"SAAN","DMarkID":"295"},
    {"DModelID":"9","Name":"MDX","DMarkID":"272"},
    {"DModelID":"10","Name":"VIGOR","DMarkID":"272"},
    {"DModelID":"11","Name":"530","DMarkID":"231"}
]

console.log(arr.filter(item => item.DMarkID === '272'))