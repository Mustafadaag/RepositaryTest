const anaSayfa=function(req,res){
	res.render('index',{'title':'Anasayfa'});
}



const mekanBilgisi=function(req,res){
	res.render('index',{'title':'Mekan Bilgisi'});
}


const yorumEkle=function(req,res){
	res.render('index',{'title':'Yorum Ekle'});
}


module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle
};
module.exports.anaSayfa = function(req, res){
  res.render('mekanlar-liste', { title: 'Anasayfa' });	
};
module.exports.mekanBilgisi = function(req, res){
  res.render('mekan-detay', { title: 'Mekan Bilgisi' });	
};
module.exports.yorumEkle = function(req, res){
  res.render('yorum-ekle', { title: 'Bir Yorum Yap' });	
};