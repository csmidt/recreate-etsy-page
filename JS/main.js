$(document).ready(function(){
	$.get("https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function(data){
        putInDom(data)
    })
})


function putInDom(data) {
	var ourData = data.results.map(function(item){
		return {
			price: item.price,
			shopname: item.Shop.shop_name,
			title: item.title,
			img: item.Images[0].url_570xN
		}
	})

	var htmlStr = "";
	ourData.forEach(function(item){
		htmlStr += `
		<div class="pics">
			<div><img src="${item.img}" /></div>
			<p class="description"> ${item.title} </p>
			<p class="prices"> ${item.price} </p>
			<p class="shopname"> ${item.shopname} </p>
		</div>
		`
	})

	$("#allpics").html(htmlStr)
}

