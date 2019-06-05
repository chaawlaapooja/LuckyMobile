
const price = document.querySelectorAll(".one");
const brand = document.querySelectorAll(".three");

const price1 = document.querySelector(".shopList1");
const brand1 = document.querySelector(".shopList3");

const filterButton = document.querySelector(".listItem")



function createListElement(b,ce) {
	let li = document.createElement("li");
	let att1 = document.createAttribute("value");       // Create a "class" attribute
	att1.value = b;                           // Set the value of the class attribute
	li.setAttributeNode(att1);
	// adds style to the list items
	li.classList.add("listItem1");
	li.appendChild(document.createTextNode(b));
	ce.appendChild(li);
} 
// end of createListElement functi0n
function deleteListItem(e) {
		e.remove();
	}
	
	function myFunc(ic, val){
		if(ic===true)
		{
			createListElement(val,brand1);
		}
		else if(ic===false)
		{
			var g = document.querySelectorAll('.shopList3 > li');
			g.forEach(function(g){
				if(g.innerHTML===val)
				{
					deleteListItem(g);
				}
			})
			
		}
		let arr = [];
		brand.forEach(function(brand){
			if(brand.checked===true){
				arr.push(brand.value);
			}
		})
		let arr1 = [];
		price.forEach(function(price){
			if(price.checked===true){
				arr1.push(price.value);
			}
		})
		fetch('applyFiltersForSelectedBrands', {
		     method: 'POST',
		     body: JSON.stringify({data: arr, data1 : ic, data2:arr1}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let toBeChange = document.querySelector('.w3ls_mobiles_grid_right_grid3')
		 	let html_str = '';
			for(let p of res) {
			   html_str +=`<div class="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_mobiles">
										<div class="agile_ecommerce_tab_left mobiles_grid">
											<div class="hs-wrapper hs-wrapper2">
												<img src="${p.cover}" alt=" " class="img-responsive" />
												<img src="${p.first}" alt=" " class="img-responsive" />
												<img src="${p.second}" alt=" " class="img-responsive" />
												<img src="${p.third}" alt=" " class="img-responsive" />
												<div class="w3_hs_bottom w3_hs_bottom_sub1">
													<ul>
														<li>
															<a href="#" data-toggle="modal" data-target="#myProductModal${p._id}"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
														</li>
													</ul>
												</div>
											</div>
											<h5><a href="/single">${p.brand} - ${p.model}</a></h5>
											<form action='/productDetails' method='post'>
									<input type="hidden" name="pid" value=${p._id} />
									<div style="padding-top:3%"><input type="submit" class='btn btn-success' value='See Details' /></div>
								</form>
											<div class="simpleCart_shelfItem">
												<p><span>Rs.${p.marketPrice}</span> <i class="item_price">Rs.${p.price}</i></p>
												<form action="#" method="post">
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" /> 
													<input type="hidden" name="w3ls_item" value="${p.model}" /> 
													<input type="hidden" name="amount" value="${p.price}"/>   
													<button type="submit" class="w3ls-cart">Add to cart</button><hr>
												</form>
											</div> 
											<!--<div class="mobiles_grid_pos">
												<h6>New</h6>
											</div>-->
										</div>
									</div>`
			}
			toBeChange.innerHTML = html_str;
		 	
		 	console.log(res)})
	}

	function myPriceFunc(ic, val){
		if(ic===true)
		{
			createListElement(val,price1);
		}
		else if(ic===false)
		{
			var g = document.querySelectorAll('.shopList1 > li');
			g.forEach(function(g){
				if(g.innerHTML===val)
				{
					deleteListItem(g);
				}
			})
			
		}
		let arr = [];
		price.forEach(function(price){
			if(price.checked===true){
				arr.push(price.value);
			}
		})
		let arr1 = [];
		brand.forEach(function(brand){
			if(brand.checked===true){
				arr1.push(brand.value);
			}
		})
		fetch('applyFiltersForSelectedPrices', {
		     method: 'POST',
		     body: JSON.stringify({data: arr, data1 : ic, data2:arr1}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let toBeChange = document.querySelector('.w3ls_mobiles_grid_right_grid3')
		 	let html_str = '';
			for(let p of res) {
			   html_str +=`<div class="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_mobiles">
										<div class="agile_ecommerce_tab_left mobiles_grid">
											<div class="hs-wrapper hs-wrapper2">
												<img src="${p.cover}" alt=" " class="img-responsive" />
												<img src="${p.first}" alt=" " class="img-responsive" />
												<img src="${p.second}" alt=" " class="img-responsive" />
												<img src="${p.third}" alt=" " class="img-responsive" />
												<div class="w3_hs_bottom w3_hs_bottom_sub1">
													<ul>
														<li>
															<a href="#" data-toggle="modal" data-target="#myProductModal${p._id}"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
														</li>
													</ul>
												</div>
											</div>
											<h5><a href="/single">${p.brand} - ${p.model}</a></h5>
											<form action='/productDetails' method='post'>
									<input type="hidden" name="pid" value=${p._id} />
									<div style="padding-top:3%"><input type="submit" class='btn btn-success' value='See Details' /></div>
								</form> 
											<div class="simpleCart_shelfItem">
												<p><span>Rs.${p.marketPrice}</span> <i class="item_price">Rs.${p.price}</i></p>
												<form action="#" method="post">
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" /> 
													<input type="hidden" name="w3ls_item" value="${p.model}" /> 
													<input type="hidden" name="amount" value="${p.price}"/>   
													<button type="submit" class="w3ls-cart">Add to cart</button><hr>
												</form>
											</div> 
											<!--<div class="mobiles_grid_pos">
												<h6>New</h6>
											</div>-->
										</div>
									</div>`
			}
			toBeChange.innerHTML = html_str;
		 	})
		
	}
	
	//let p =[];
	filterButton.addEventListener("click", function(){
		if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	var g = document.querySelectorAll('.shopList1 > li');
		g.forEach(function(g){
				deleteListItem(g);
		})
		var h = document.querySelectorAll('.shopList3 > li');
		h.forEach(function(h){
				deleteListItem(h);
		})
		var k =(document.querySelectorAll('input[type="checkbox"]'))
			k.forEach(function(k){
				if(k.checked)
				{
					k.checked=false;
				}
			})
		fetch('clearFilters', {
		     method: 'POST',
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	let toBeChange = document.querySelector('.w3ls_mobiles_grid_right_grid3')
		 	let html_str = '';
			for(let p of res) {
			   html_str +=`<div class="col-md-4 agileinfo_new_products_grid agileinfo_new_products_grid_mobiles">
										<div class="agile_ecommerce_tab_left mobiles_grid">
											<div class="hs-wrapper hs-wrapper2">
												<img src="${p.cover}" alt=" " class="img-responsive" />
												<img src="${p.first}" alt=" " class="img-responsive" />
												<img src="${p.second}" alt=" " class="img-responsive" />
												<img src="${p.third}" alt=" " class="img-responsive" />
												<div class="w3_hs_bottom w3_hs_bottom_sub1">
													<ul>
														<li>
															<a href="#" data-toggle="modal" data-target="#myProductModal${p._id}"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
														</li>
													</ul>
												</div>
											</div>
											<h5><a href="/single">${p.brand} - ${p.model}</a></h5>
											<form action='/productDetails' method='post'>
									<input type="hidden" name="pid" value=${p._id} />
									<div style="padding-top:3%"><input type="submit" class='btn btn-success' value='See Details' /></div>
								</form>
											<div class="simpleCart_shelfItem">
												<p><span>Rs.${p.marketPrice}</span> <i class="item_price">Rs.${p.price}</i></p>
												<form action="#" method="post">
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" /> 
													<input type="hidden" name="w3ls_item" value="${p.model}" /> 
													<input type="hidden" name="amount" value="${p.price}"/>   
													<button type="submit" class="w3ls-cart">Add to cart</button><hr>
												</form>
											</div> 
											<!--<div class="mobiles_grid_pos">
												<h6>New</h6>
											</div>-->
										</div>
									</div>`
			}
			toBeChange.innerHTML = html_str;
		 	})
		});

function SortChange() {
	document.querySelector('.w3ls_mobiles_grid_right_grid3').classList.toggle("reverse");
    
}


