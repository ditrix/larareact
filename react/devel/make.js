/*код создания массива из сырых данных */
const markList = [
{DMarkID:"3","Name":"BSS NV","NameEn":"BSS NV","NameRu":"BSS NV","IsActive":"1","TypeOp":"I","LastDate":"02/11/2009 14:05"},
{DMarkID:"4","Name":"JELCZ","NameEn":"JELCZ","NameRu":"ЕЛЬЧ","IsActive":"1","TypeOp":"M","LastDate":"26/01/2010 13:07"},
{DMarkID:"5","Name":"BELLIER","NameEn":"BELLIER","NameRu":"BELLIER","IsActive":"0","TypeOp":"I","LastDate":"02/11/2009 14:05"},
{DMarkID:"6","Name":"CADILLAC","NameEn":"CADILLAC","NameRu":"Кадиллак","IsActive":"1","TypeOp":"M","LastDate":"26/01/2010 13:07"},
{DMarkID:"8","Name":"MASERATI","NameEn":"MASERATI","NameRu":"Мазерати","IsActive":"0","TypeOp":"M","LastDate":"26/01/2010 13:07"},
{DMarkID:"10","Name":"SCANIA","NameEn":"SCANIA","NameRu":"Скания","IsActive":"1","TypeOp":"M","LastDate":"26/01/2010 13:07"},
{DMarkID:"11","Name":"HONDA","NameEn":"HONDA","NameRu":"Хонда","IsActive":"1","TypeOp":"M","LastDate":"26/01/2010 13:07"},
]

let mark = []
markList.map((item)=> {mark.push({'id':item.DMarkID,'name':item.Name})})

console.log(mark)

mark.sort(function(a,b){
	if(a.name > b.name){
		return 1
	}
	if(a.name < b.name){
		return -1
	}
	return 0;
})
console.log('----------------------------')

console.log(mark)

console.log('ok')

