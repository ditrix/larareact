	let mark = []
models.map((item)=> {
	if(item.active === "1"){
	mark.push({'id':item.DModelID,'mark_id':item.DMarkID,'name':item.Name})
	}
})

//console.log(mark)

mark.sort(function(a,b){
	if(a.name > b.name){
		return 1
	}
	if(a.name < b.name){
		return -1
	}
	return 0;
})
//console.log('----------------------------')

console.log(mark)