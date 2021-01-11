
	$('.klik').on('click',function () {
		var nama = prompt('Apa benar ini finka?, coba isi nama lengkapmu');
		if (nama == null) {
			nama = "nama";
		}
		if (nama.toLowerCase() == 'finka cindy antika') {
			alert('jadi ini benar '+nama+' yaa');
			alert('ok lanjut yaa');
			alert('Nikah sama aku yaaaaa')
			const makan = confirm('dek sudah makan belomm?');
			if (makan) {
				alert('kalo boong gua gampar lu :)')
				alert('dek kamu jangan nakal nakal gausah begadang jangan lupa maem, jaga kesehatanmu aku dan tuhan gamau kamu sakit');
				alert('Ntar kalo kamu sakit siapa yang meh menganiaya aku? siapa yang mau cabut kumisku :)')
				alert('intinya aku gamau kamu kenapa kenapa')
				document.location.href='home.html';
			}else{
				alert('yaudah gih makan dulu sono :)');
			}
		}else{
			alert('maaf nih dek '+nama+' anda bukan nama lengkap finka, ulangi yahh');
		}
	})