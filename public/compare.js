

function onChange(id, val){
	if(val === ''){
		if(id==='m1'){
			let img = document.querySelector('#imgm1');
			img.src='https://mykarateamerica.com/wp-content/uploads/2017/04/default-image.jpg';
			let price = document.querySelector('#pricem1');
			price.innerHTML=''
		 	let ram = document.querySelector('#ramm1');
		 	ram.innerHTML='';
		 	let internalStorage = document.querySelector('#ism1');
		 	internalStorage.innerHTML='';
		 	let primaryCamera = document.querySelector('#pcm1');
		 	primaryCamera.innerHTML='';
		 	let secondaryCamera = document.querySelector('#scm1');
		 	secondaryCamera.innerHTML='';
		 	let batteryCapacity = document.querySelector('#bcm1');
		 	batteryCapacity.innerHTML='';
		 	let screenSize = document.querySelector('#szm1');
		 	screenSize.innerHTML = '';
		 	let simType = document.querySelector('#stm1');
		 	simType.innerHTML = '';
		 	let phoneType = document.querySelector('#ptm1');
		 	phoneType.innerHTML = '';
		 	let offers = document.querySelector('#om1');
		 	offers.innerHTML = '';
		 	let features = document.querySelector('#fm1');
		 	features.innerHTML = '';
		 	let description = document.querySelector('#dm1');
		 	description.innerHTML = ''
		}
		else if(id==='m2'){
			let img = document.querySelector('#imgm2');
			img.src='https://mykarateamerica.com/wp-content/uploads/2017/04/default-image.jpg'
			let price = document.querySelector('#pricem2');
			price.innerHTML='';
		 	let ram = document.querySelector('#ramm2');
		 	ram.innerHTML=''
		 	let internalStorage = document.querySelector('#ism2');
		 	internalStorage.innerHTML='';
		 	let primaryCamera = document.querySelector('#pcm2');
		 	primaryCamera.innerHTML='';
		 	let secondaryCamera = document.querySelector('#scm2');
		 	secondaryCamera.innerHTML='';
		 	let batteryCapacity = document.querySelector('#bcm2');
		 	batteryCapacity.innerHTML='';
		 	let screenSize = document.querySelector('#szm2');
		 	screenSize.innerHTML = '';
		 	let simType = document.querySelector('#stm2');
		 	simType.innerHTML = '';
		 	let phoneType = document.querySelector('#ptm2');
		 	phoneType.innerHTML = '';
		 	let offers = document.querySelector('#om2');
		 	offers.innerHTML = '';
		 	let features = document.querySelector('#fm2');
		 	features.innerHTML = '';
		 	let description = document.querySelector('#dm2');
		 	description.innerHTML = ''
		}
		else if(id==='m3'){
			let img = document.querySelector('#imgm3');
			img.src='https://mykarateamerica.com/wp-content/uploads/2017/04/default-image.jpg';
			let price = document.querySelector('#pricem3');
			price.innerHTML=''
		 	let ram = document.querySelector('#ramm3');
		 	ram.innerHTML=''
		 	let internalStorage = document.querySelector('#ism3');
		 	internalStorage.innerHTML='';
		 	let primaryCamera = document.querySelector('#pcm3');
		 	primaryCamera.innerHTML='';
		 	let secondaryCamera = document.querySelector('#scm3');
		 	secondaryCamera.innerHTML='';
		 	let batteryCapacity = document.querySelector('#bcm3');
		 	batteryCapacity.innerHTML='';
		 	let screenSize = document.querySelector('#szm3');
		 	screenSize.innerHTML = '';
		 	let simType = document.querySelector('#stm3');
		 	simType.innerHTML = '';
		 	let phoneType = document.querySelector('#ptm3');
		 	phoneType.innerHTML = '';
		 	let offers = document.querySelector('#om3');
		 	offers.innerHTML = '';
		 	let features = document.querySelector('#fm3');
		 	features.innerHTML = '';
		 	let description = document.querySelector('#dm3');
		 	description.innerHTML = ''
		}
		else{
			let img = document.querySelector('#imgm4');
			img.src='https://mykarateamerica.com/wp-content/uploads/2017/04/default-image.jpg'
			let price = document.querySelector('#pricem4');
			price.innerHTML=''
		 	let ram = document.querySelector('#ramm4');
		 	ram.innerHTML=''
		 	let internalStorage = document.querySelector('#ism4');
		 	internalStorage.innerHTML='';
		 	let primaryCamera = document.querySelector('#pcm4');
		 	primaryCamera.innerHTML='';
		 	let secondaryCamera = document.querySelector('#scm4');
		 	secondaryCamera.innerHTML='';
		 	let batteryCapacity = document.querySelector('#bcm4');
		 	batteryCapacity.innerHTML='';
		 	let screenSize = document.querySelector('#szm4');
		 	screenSize.innerHTML = '';
		 	let simType = document.querySelector('#stm4');
		 	simType.innerHTML = '';
		 	let phoneType = document.querySelector('#ptm4');
		 	phoneType.innerHTML = '';
		 	let offers = document.querySelector('#om4');
		 	offers.innerHTML = '';
		 	let features = document.querySelector('#fm4');
		 	features.innerHTML = '';
		 	let description = document.querySelector('#dm4');
		 	description.innerHTML = ''
		}
	}
	else{
	if(id==='m1')
	fetch('fetchDetailsForCompare', {
		     method: 'POST',
		     body: JSON.stringify({productid : val}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let img = document.querySelector('#imgm1');
			img.src=res[0].cover
			img.alt=res[0].model
			let price = document.querySelector('#pricem1');
			price.innerHTML='<label><strike>'+res[0].marketPrice+'</strike><br/>'+res[0].price+'</label>'
		 	let ram = document.querySelector('#ramm1');
		 	ram.innerHTML='<label>'+res[0].ram+' GB</label>';
		 	let internalStorage = document.querySelector('#ism1');
		 	internalStorage.innerHTML='<label>'+res[0].internalStorage+' GB</label>';
		 	let primaryCamera = document.querySelector('#pcm1');
		 	primaryCamera.innerHTML='<label>'+res[0].primaryCamera+' PX</label>';
		 	let secondaryCamera = document.querySelector('#scm1');
		 	secondaryCamera.innerHTML='<label>'+res[0].secondaryCamera+' PX</label>';
		 	let batteryCapacity = document.querySelector('#bcm1');
		 	batteryCapacity.innerHTML='<label>'+res[0].batteryCapacity+' mAH</label>';
		 	let screenSize = document.querySelector('#szm1');
		 	screenSize.innerHTML = '<label>'+res[0].screenSize+' inch<label>';
		 	let simType = document.querySelector('#stm1');
		 	simType.innerHTML = '<label>'+res[0].simType+'</label>';
		 	let phoneType = document.querySelector('#ptm1');
		 	phoneType.innerHTML = '<label>'+res[0].phoneType+'</label>';
		 	let offers = document.querySelector('#om1');
		 	offers.innerHTML = '<label>'+res[0].offers+'</label>';
		 	let features = document.querySelector('#fm1');
		 	features.innerHTML = '<label>'+res[0].features+'</label>';
		 	let description = document.querySelector('#dm1');
		 	description.innerHTML = '<label>'+res[0].description+'</label>'
		 })
	else if(id==='m2'){
		fetch('fetchDetailsForCompare', {
		     method: 'POST',
		     body: JSON.stringify({productid : val}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let img = document.querySelector('#imgm2');
			img.src=res[0].cover
			img.alt=res[0].model
			let price = document.querySelector('#pricem2');
			price.innerHTML='<label><strike>'+res[0].marketPrice+'</strike><br/>'+res[0].price+'</label>'
		 	let ram = document.querySelector('#ramm2');
		 	ram.innerHTML='<label>'+res[0].ram+' GB</label>'
		 	let internalStorage = document.querySelector('#ism2');
		 	internalStorage.innerHTML='<label>'+res[0].internalStorage+' GB</label>';
		 	let primaryCamera = document.querySelector('#pcm2');
		 	primaryCamera.innerHTML='<label>'+res[0].primaryCamera+' PX</label>';
		 	let secondaryCamera = document.querySelector('#scm2');
		 	secondaryCamera.innerHTML='<label>'+res[0].secondaryCamera+' PX</label>';
		 	let batteryCapacity = document.querySelector('#bcm2');
		 	batteryCapacity.innerHTML='<label>'+res[0].batteryCapacity+' mAH</label>';
		 	let screenSize = document.querySelector('#szm2');
		 	screenSize.innerHTML = '<label>'+res[0].screenSize+' inch<label>';
		 	let simType = document.querySelector('#stm2');
		 	simType.innerHTML = '<label>'+res[0].simType+'</label>';
		 	let phoneType = document.querySelector('#ptm2');
		 	phoneType.innerHTML = '<label>'+res[0].phoneType+'</label>';
		 	let offers = document.querySelector('#om2');
		 	offers.innerHTML = '<label>'+res[0].offers+'</label>';
		 	let features = document.querySelector('#fm2');
		 	features.innerHTML = '<label>'+res[0].features+'</label>';
		 	let description = document.querySelector('#dm2');
		 	description.innerHTML = '<label>'+res[0].description+'</label>'
		 })
	}
	else if(id==='m3'){
		fetch('fetchDetailsForCompare', {
		     method: 'POST',
		     body: JSON.stringify({productid : val}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let img = document.querySelector('#imgm3');
			img.src=res[0].cover
			img.alt=res[0].model
			let price = document.querySelector('#pricem3');
			price.innerHTML='<label><strike>'+res[0].marketPrice+'</strike><br/>'+res[0].price+'</label>'
		 	let ram = document.querySelector('#ramm3');
		 	ram.innerHTML='<label>'+res[0].ram+' GB</label>'
		 	let internalStorage = document.querySelector('#ism3');
		 	internalStorage.innerHTML='<label>'+res[0].internalStorage+' GB</label>';
		 	let primaryCamera = document.querySelector('#pcm3');
		 	primaryCamera.innerHTML='<label>'+res[0].primaryCamera+' PX</label>';
		 	let secondaryCamera = document.querySelector('#scm3');
		 	secondaryCamera.innerHTML='<label>'+res[0].secondaryCamera+' PX</label>';
		 	let batteryCapacity = document.querySelector('#bcm3');
		 	batteryCapacity.innerHTML='<label>'+res[0].batteryCapacity+' mAH</label>';
		 	let screenSize = document.querySelector('#szm3');
		 	screenSize.innerHTML = '<label>'+res[0].screenSize+' inch<label>';
		 	let simType = document.querySelector('#stm3');
		 	simType.innerHTML = '<label>'+res[0].simType+'</label>';
		 	let phoneType = document.querySelector('#ptm3');
		 	phoneType.innerHTML = '<label>'+res[0].phoneType+'</label>';
		 	let offers = document.querySelector('#om3');
		 	offers.innerHTML = '<label>'+res[0].offers+'</label>';
		 	let features = document.querySelector('#fm3');
		 	features.innerHTML = '<label>'+res[0].features+'</label>';
		 	let description = document.querySelector('#dm3');
		 	description.innerHTML = '<label>'+res[0].description+'</label>'
		 })
	}
	else{
		fetch('fetchDetailsForCompare', {
		     method: 'POST',
		     body: JSON.stringify({productid : val}),
		     headers: {
		 	    'Content-Type': 'application/json'
		 	},
		 })
		 .then(res => res.json())
		 .then(res => {
		 	if(res==='error')
		 		window.alert('Some error occured while performing request. Please try again later')
		 	let img = document.querySelector('#imgm4');
			img.src=res[0].cover
			img.alt=res[0].model
			let price = document.querySelector('#pricem4');
			price.innerHTML='<label><strike>'+res[0].marketPrice+'</strike><br/>'+res[0].price+'</label>'
		 	let ram = document.querySelector('#ramm4');
		 	ram.innerHTML='<label>'+res[0].ram+' GB</label>'
		 	let internalStorage = document.querySelector('#ism4');
		 	internalStorage.innerHTML='<label>'+res[0].internalStorage+' GB</label>';
		 	let primaryCamera = document.querySelector('#pcm4');
		 	primaryCamera.innerHTML='<label>'+res[0].primaryCamera+' PX</label>';
		 	let secondaryCamera = document.querySelector('#scm4');
		 	secondaryCamera.innerHTML='<label>'+res[0].secondaryCamera+' PX</label>';
		 	let batteryCapacity = document.querySelector('#bcm4');
		 	batteryCapacity.innerHTML='<label>'+res[0].batteryCapacity+' mAH</label>';
		 	let screenSize = document.querySelector('#szm4');
		 	screenSize.innerHTML = '<label>'+res[0].screenSize+' inch<label>';
		 	let simType = document.querySelector('#stm4');
		 	simType.innerHTML = '<label>'+res[0].simType+'</label>';
		 	let phoneType = document.querySelector('#ptm4');
		 	phoneType.innerHTML = '<label>'+res[0].phoneType+'</label>';
		 	let offers = document.querySelector('#om4');
		 	offers.innerHTML = '<label>'+res[0].offers+'</label>';
		 	let features = document.querySelector('#fm4');
		 	features.innerHTML = '<label>'+res[0].features+'</label>';
		 	let description = document.querySelector('#dm4');
		 	description.innerHTML = '<label>'+res[0].description+'</label>'
		 })

	}
}
}