var _0x4237=['url(\x22CoverPhoto.png\x22)','prof_pic','src','star1','classList','add','checked','star2','star3','star4','loader','display','none','target','type','match','image.*','onload','createElement','<img\x20class=\x22thumb\x22\x20src=\x22','result','\x22\x20title=\x22','\x22/><img\x20onclick=\x22removePic(this.parentNode,\x20$(this.parentNode).index())\x22\x20style=\x22height:\x202.5vw;\x20width:\x202.5vw;\x20cursor:\x20pointer;\x20position:\x20absolute;\x20margin-top:\x20-15.5vw;\x20margin-left:\x20-2.8vw;\x20z-index:\x2020;\x22\x20src=\x22close-black.png\x22>','join','list','insertBefore','readAsDataURL','remove','NoPic.png','files','profile','cover','base64','charCodeAt','Successfully\x20uploaded\x20your\x20pictures','getTime','child','put','TaskEvent','bytesTransferred','totalBytes','%\x20done','state','TaskState','PAUSED','Upload\x20is\x20paused','RUNNING','Upload\x20is\x20running','code','storage/unauthorized','storage/canceled','snapshot','ref','getDownloadURL','change','pic','addEventListener','AIzaSyDdjSnZXerTyTOi7g3910IalzfxARpJXu0','https://trakarotwo.firebaseio.com','trakarotwo','1004981268613','initializeApp','log','name','storage','firestore','settings','getItem','email','collection','doc','get','then','exists','Document\x20data:','data','catch','Error\x20getting\x20document:','hotelAccount','set','password','fylla_rating','rating','cover_url','logo_url','hotel','update','href','profile2.html','gallery','split','splice','concat','gallery_url','length','<div\x20style=\x27float:left\x27><img\x20style\x20=\x20\x27position:\x20relative;\x20height:\x2014vw;\x20margin:\x200.5vw;\x20cursor:\x20pointer;\x20z-index:\x202;\x27\x20src=\x20','><img\x20onclick=\x27removeOldPic(this.parentNode,\x20$(this).index())\x27\x20style=\x27height:\x202.5vw;\x20width:\x202.5vw;\x20cursor:\x20pointer;\x20position:\x20absolute;\x20margin-top:\x200.5vw;\x20margin-left:\x20-3vw;\x20z-index:\x2020;\x27\x20src=\x27close-black.png\x27></div>','append','<p\x20align=\x27justify\x27\x20style=\x27text-indent:\x203vw;\x27>No\x20Photos\x20available\x20yet</p>','getElementById','innerHTML','toUpperCase','contact','value','address','website','booking_url','info','textbox','cover_pic','style','backgroundImage','url('];(function(_0x20a21f,_0x1b4c2e){var _0x2609c5=function(_0x3921e9){while(--_0x3921e9){_0x20a21f['push'](_0x20a21f['shift']());}};_0x2609c5(++_0x1b4c2e);}(_0x4237,0xaa));var _0x2613=function(_0x36f045,_0x16ab7e){_0x36f045=_0x36f045-0x0;var _0x3542e8=_0x4237[_0x36f045];return _0x3542e8;};var config={'apiKey':_0x2613('0x0'),'authDomain':'trakarotwo.firebaseapp.com','databaseURL':_0x2613('0x1'),'projectId':_0x2613('0x2'),'storageBucket':'trakarotwo.appspot.com','messagingSenderId':_0x2613('0x3')};var defaultApp=firebase[_0x2613('0x4')](config);console[_0x2613('0x5')](defaultApp[_0x2613('0x6')]);var defaultStorage=defaultApp[_0x2613('0x7')]();var defaultFirestore=defaultApp[_0x2613('0x8')]();const firestore=firebase['firestore']();const settings={'timestampsInSnapshots':!![]};firestore[_0x2613('0x9')](settings);var email=sessionStorage[_0x2613('0xa')](_0x2613('0xb'));var hotel_data;var contact;var website;var address;var booking_url;var info;var logo_url;var gallery_url;var gallery_pics=[];var scene=0x0;var docRef=defaultFirestore[_0x2613('0xc')]('hotelAccount')[_0x2613('0xd')](email);docRef[_0x2613('0xe')]()[_0x2613('0xf')](function(_0x332422){if(_0x332422[_0x2613('0x10')]){console[_0x2613('0x5')](_0x2613('0x11'),_0x332422[_0x2613('0x12')]());hotel_data=_0x332422[_0x2613('0x12')]();load();}else{console['log']('No\x20such\x20document!');}})[_0x2613('0x13')](function(_0x4f2d7d){console[_0x2613('0x5')](_0x2613('0x14'),_0x4f2d7d);});function updateHotelData(_0x2dcefd,_0x2f405d,_0x378ced,_0x4a52cb,_0x24dda4,_0x2edc34){showLoader();defaultFirestore[_0x2613('0xc')](_0x2613('0x15'))['doc'](_0x2dcefd)[_0x2613('0x1d')]({'name':hotel_data[_0x2613('0x6')],'email':_0x2dcefd,'contact':_0x2f405d,'booking_url':_0x378ced,'fylla_rating':hotel_data[_0x2613('0x18')],'rating':hotel_data[_0x2613('0x19')],'website':_0x4a52cb,'info':_0x2edc34,'cover_url':hotel_data[_0x2613('0x1a')],'logo_url':hotel_data[_0x2613('0x1b')],'user_type':_0x2613('0x1c')})[_0x2613('0xf')](function(){updateAddress();uploadIt();});}function updateProfilePic(_0x709b05){defaultFirestore['collection']('hotelAccount')[_0x2613('0xd')](email)[_0x2613('0x1d')]({'logo_url':_0x709b05})[_0x2613('0xf')](function(){pic_done=!![];if(scene==0x1){location[_0x2613('0x1e')]=_0x2613('0x1f');}else if(scene==0x4){if(gallery_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}else if(scene==0x5){if(cover_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}else if(scene==0x7){if(cover_done&&gallery_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}});}function updateCoverPic(_0x2e320c){defaultFirestore[_0x2613('0xc')](_0x2613('0x15'))['doc'](email)[_0x2613('0x1d')]({'cover_url':_0x2e320c})[_0x2613('0xf')](function(){cover_done=!![];if(scene==0x2){location[_0x2613('0x1e')]=_0x2613('0x1f');}else if(scene==0x5){if(pic_done){location['href']='profile2.html';}}else if(scene==0x6){if(gallery_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}else if(scene==0x7){if(pic_done&&gallery_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}});}function updateGalleryPic(_0x2273af){if(scene==0x0){defaultFirestore[_0x2613('0xc')](_0x2613('0x20'))[_0x2613('0xd')](email)[_0x2613('0x1d')]({'gallery_url':gallery_pics})[_0x2613('0xf')](function(){location[_0x2613('0x1e')]='profile2.html';});}else{var _0x1e1abb=_0x2273af[_0x2613('0x21')]('!');_0x1e1abb=_0x1e1abb[_0x2613('0x22')](0x0,_0x1e1abb['length']-0x1);defaultFirestore['collection']('gallery')[_0x2613('0xd')](email)[_0x2613('0x1d')]({'gallery_url':gallery_pics[_0x2613('0x23')](_0x1e1abb)})[_0x2613('0xf')](function(){gallery_done=!![];if(scene==0x3){location[_0x2613('0x1e')]=_0x2613('0x1f');}else if(scene==0x4){if(pic_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}else if(scene==0x6){if(cover_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}else if(scene==0x7){if(pic_done&&cover_done){location[_0x2613('0x1e')]=_0x2613('0x1f');}}});}}var picRef=defaultFirestore[_0x2613('0xc')](_0x2613('0x20'))[_0x2613('0xd')](email);var withpic;picRef[_0x2613('0xe')]()[_0x2613('0xf')](function(_0x52690e){if(_0x52690e[_0x2613('0x10')]){console[_0x2613('0x5')](_0x2613('0x11'),_0x52690e[_0x2613('0x12')]());gallery_pics=_0x52690e[_0x2613('0x12')]()[_0x2613('0x24')];console[_0x2613('0x5')](gallery_pics);withpic=0x1;load();}else{withpic=0x0;load();}})[_0x2613('0x13')](function(_0x1f4382){console[_0x2613('0x5')](_0x2613('0x14'),_0x1f4382);});function load(){if(withpic==0x1){for(var _0x2355ef=0x0;_0x2355ef<gallery_pics[_0x2613('0x25')];_0x2355ef++){$(oldPics)['append'](_0x2613('0x26')+gallery_pics[_0x2355ef]+_0x2613('0x27'));}}else if(withpic==0x0){$(noPhoto)[_0x2613('0x28')](_0x2613('0x29'));}document[_0x2613('0x2a')](_0x2613('0x6'))[_0x2613('0x2b')]=hotel_data['name']!=''?hotel_data[_0x2613('0x6')][_0x2613('0x2c')]():document[_0x2613('0x2a')](_0x2613('0x6'))[_0x2613('0x2b')];document['getElementById'](_0x2613('0x2d'))[_0x2613('0x2e')]=hotel_data[_0x2613('0x2d')]!=''?hotel_data['contact']:document['getElementById'](_0x2613('0x2d'))[_0x2613('0x2b')];document[_0x2613('0x2a')](_0x2613('0x2f'))[_0x2613('0x2e')]=hotel_data[_0x2613('0x2f')]!=''?hotel_data[_0x2613('0x2f')]:document['getElementById'](_0x2613('0x2f'))[_0x2613('0x2b')];document[_0x2613('0x2a')](_0x2613('0x30'))[_0x2613('0x2e')]=hotel_data[_0x2613('0x30')]!=''?hotel_data[_0x2613('0x30')]:document['getElementById'](_0x2613('0x30'))[_0x2613('0x2b')];document[_0x2613('0x2a')]('booking_url')['value']=hotel_data[_0x2613('0x31')]!=''?hotel_data[_0x2613('0x31')]:document[_0x2613('0x2a')](_0x2613('0x31'))[_0x2613('0x2b')];document[_0x2613('0x2a')]('textbox')[_0x2613('0x2e')]=hotel_data['info']!=''?hotel_data[_0x2613('0x32')]:document[_0x2613('0x2a')](_0x2613('0x33'))['innerHTML'];document[_0x2613('0x2a')](_0x2613('0x18'))['innerHTML']=hotel_data[_0x2613('0x18')]!=0x0?hotel_data[_0x2613('0x18')]:document[_0x2613('0x2a')](_0x2613('0x18'))[_0x2613('0x2b')];document[_0x2613('0x2a')](_0x2613('0x34'))[_0x2613('0x35')][_0x2613('0x36')]=hotel_data[_0x2613('0x1a')]!=''?_0x2613('0x37')+hotel_data[_0x2613('0x1a')]+')':_0x2613('0x38');document[_0x2613('0x2a')](_0x2613('0x39'))[_0x2613('0x3a')]=hotel_data[_0x2613('0x1b')]!=''?hotel_data[_0x2613('0x1b')]:document[_0x2613('0x2a')](_0x2613('0x39'))[_0x2613('0x3a')];if(hotel_data['rating']==0x1){document[_0x2613('0x2a')](_0x2613('0x3b'))[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));}else if(hotel_data['rating']==0x2){document['getElementById'](_0x2613('0x3b'))[_0x2613('0x3c')][_0x2613('0x3d')]('checked');document[_0x2613('0x2a')](_0x2613('0x3f'))[_0x2613('0x3c')][_0x2613('0x3d')]('checked');}else if(hotel_data[_0x2613('0x19')]==0x3){document['getElementById'](_0x2613('0x3b'))['classList'][_0x2613('0x3d')](_0x2613('0x3e'));document['getElementById'](_0x2613('0x3f'))[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));document[_0x2613('0x2a')](_0x2613('0x40'))[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));}else if(hotel_data[_0x2613('0x19')]==0x4){document[_0x2613('0x2a')]('star1')['classList'][_0x2613('0x3d')](_0x2613('0x3e'));document[_0x2613('0x2a')](_0x2613('0x3f'))['classList'][_0x2613('0x3d')](_0x2613('0x3e'));document['getElementById']('star3')[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));document[_0x2613('0x2a')]('star4')[_0x2613('0x3c')]['add'](_0x2613('0x3e'));}else if(hotel_data[_0x2613('0x19')]==0x5){document[_0x2613('0x2a')](_0x2613('0x3b'))[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));document[_0x2613('0x2a')](_0x2613('0x3f'))[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));document[_0x2613('0x2a')](_0x2613('0x40'))['classList'][_0x2613('0x3d')](_0x2613('0x3e'));document['getElementById'](_0x2613('0x41'))['classList']['add'](_0x2613('0x3e'));document[_0x2613('0x2a')]('star5')[_0x2613('0x3c')][_0x2613('0x3d')](_0x2613('0x3e'));}document[_0x2613('0x2a')](_0x2613('0x42'))['style'][_0x2613('0x43')]=_0x2613('0x44');}function save(){contact=document[_0x2613('0x2a')]('contact')[_0x2613('0x2e')];website=document[_0x2613('0x2a')](_0x2613('0x30'))[_0x2613('0x2e')];address=document[_0x2613('0x2a')]('address')[_0x2613('0x2e')];booking_url=document[_0x2613('0x2a')](_0x2613('0x31'))['value'];info=document[_0x2613('0x2a')](_0x2613('0x33'))[_0x2613('0x2e')];updateHotelData(email,contact,booking_url,website,address,info);}function discard(){location['href']=_0x2613('0x1f');}var pictures=[];var pic_url=[];var cover_url=[];function handleFileSelect(_0xe24fbf){console[_0x2613('0x5')](_0xe24fbf);var _0x1fafe0=_0xe24fbf[_0x2613('0x45')]['files'];var _0xd3603e=_0x1fafe0[0x0];for(var _0x23938e=0x0,_0x3d5f37;_0x3d5f37=_0x1fafe0[_0x23938e];_0x23938e++){if(!_0x3d5f37[_0x2613('0x46')][_0x2613('0x47')](_0x2613('0x48'))){continue;}var _0x5f0d51=new FileReader();_0x5f0d51[_0x2613('0x49')]=function(_0x2eff71){return function(_0x5aa41){var _0x8c3f79 = document[_0x2613('0x4a')]('span');var src = _0x5aa41[_0x2613('0x45')][_0x2613('0x4c')];var base64str = src.substr(22);var decoded = atob(base64str);console.log("FileSize: " + decoded.length);var quality = 50;output_format = 'jpg';var sourceImg = document.getElementById("otherImg");sourceImg.src = src;setTimeout(function(){var srCompressed = jic.compress(sourceImg,quality,output_format).src;base64str = srCompressed.substr(23);decoded = atob(base64str);console.log("FileSize: " + decoded.length);document[_0x2613('0x2a')](_0x2613('0x39'))[_0x2613('0x3a')] = srCompressed;_0x8c3f79[_0x2613('0x2b')] = [_0x2613('0x4b'), srCompressed, _0x2613('0x4d'), escape(_0x2eff71[_0x2613('0x6')]), _0x2613('0x4e')][_0x2613('0x4f')]('');document['getElementById'](_0x2613('0x50'))[_0x2613('0x51')](_0x8c3f79, null);Yeah3(srCompressed, pictures[_0x2613('0x25')]-1);}, 500);};}(_0x3d5f37);_0x5f0d51[_0x2613('0x52')](_0x3d5f37);pictures[pictures[_0x2613('0x25')]]={'name':escape(_0x3d5f37[_0x2613('0x6')]),'data':_0x5f0d51};}}function Yeah3(srCompressed, position){pictures[position] = {'name': pictures[position]['name'],'data': srCompressed};}function removeOldPic(_0x17c681,_0x2b8547){console[_0x2613('0x5')](_0x2b8547);gallery_pics['splice'](_0x2b8547-0x1,0x1);_0x17c681[_0x2613('0x53')]();console[_0x2613('0x5')](gallery_pics);}function removeProfPic(){pic_url=[];hotel_data[_0x2613('0x1b')]='';document[_0x2613('0x2a')](_0x2613('0x39'))[_0x2613('0x3a')]='piclogo1.png';document.getElementById("profileImg").src = 'piclogo1.png';}function removeCover(){cover_url=[];hotel_data[_0x2613('0x1a')]="";document[_0x2613('0x2a')](_0x2613('0x34'))[_0x2613('0x35')][_0x2613('0x36')]='url(\x27CoverPhoto.png\x27)';document.getElementById("sourceImg").src = 'url(\x27CoverPhoto.png\x27)';}function ProfileSelect(_0x3ec094){console[_0x2613('0x5')](_0x3ec094);var _0x21b844=_0x3ec094[_0x2613('0x45')][_0x2613('0x55')];var _0x379884=_0x21b844[0x0];for(var _0x2aa6aa=0x0,_0x376d7e;_0x376d7e=_0x21b844[_0x2aa6aa];_0x2aa6aa++){if(!_0x376d7e[_0x2613('0x46')][_0x2613('0x47')](_0x2613('0x48'))){continue;}var _0x339e35=new FileReader();_0x339e35[_0x2613('0x49')]=function(_0x41ae71){return function(_0x4c076e){var src = _0x4c076e[_0x2613('0x45')][_0x2613('0x4c')];var base64str = src.substr(22);var decoded = atob(base64str);console.log("FileSize: " + decoded.length);var quality = 50;output_format = 'jpg';var sourceImg = document.getElementById("profileImg");sourceImg.src = src;setTimeout(function(){var srCompressed = jic.compress(sourceImg,quality,output_format).src;base64str = srCompressed.substr(23);decoded = atob(base64str);console.log("FileSize: " + decoded.length);document[_0x2613('0x2a')](_0x2613('0x39'))[_0x2613('0x3a')] = srCompressed;Yeah2(srCompressed);}, 500);};}(_0x376d7e);_0x339e35['readAsDataURL'](_0x376d7e);pic_url[0x0]={'name':escape(_0x376d7e[_0x2613('0x6')]),'data':_0x339e35};}}function Yeah2(srCompressed){pic_url[0x0] = {'name': pic_url[0x0]['name'],'data': srCompressed};}function CoverSelect(_0xe2d146){console[_0x2613('0x5')](_0xe2d146);var _0x3575f3=_0xe2d146[_0x2613('0x45')][_0x2613('0x55')];var _0x1e74bb=_0x3575f3[0x0];for(var _0x30e96f=0x0,_0x52795c;_0x52795c=_0x3575f3[_0x30e96f];_0x30e96f++){if(!_0x52795c[_0x2613('0x46')][_0x2613('0x47')]('image.*')){continue;}var _0x5f42d2=new FileReader();_0x5f42d2[_0x2613('0x49')]=function(_0x43481c){return function(_0x1c0e91){var src = _0x1c0e91['target'][_0x2613('0x4c')];var base64str = src.substr(22);var decoded = atob(base64str);console.log("FileSize: " + decoded.length);var quality = 50;output_format = 'jpg';var sourceImg = document.getElementById("sourceImg");sourceImg.src = src;setTimeout(function(){var srCompressed = jic.compress(sourceImg,quality,output_format).src;base64str = srCompressed.substr(23);decoded = atob(base64str);console.log("FileSize: " + decoded.length);document[_0x2613('0x2a')](_0x2613('0x34'))[_0x2613('0x35')][_0x2613('0x36')] = 'url(' + srCompressed + ')';Yeah(srCompressed);}, 500);};}(_0x52795c);_0x5f42d2['readAsDataURL'](_0x52795c);cover_url[0x0]={'name':escape(_0x52795c[_0x2613('0x6')]),'data':_0x5f42d2};}}function Yeah(srCompressed){cover_url[0x0] = {'name': cover_url[0x0]['name'],'data': srCompressed};console.log(cover_url[0x0]);}function removePic(_0x37221b,_0x55de62){pictures[_0x2613('0x22')](_0x55de62,0x1);_0x37221b[_0x2613('0x53')]();}var pic_done=![];var cover_done=![];var gallery_done=![];function uploadIt(){if(pictures[_0x2613('0x25')]>0x0){uploadFile(0x0,pictures,'',_0x2613('0x20'));}if(pic_url[_0x2613('0x25')]>0x0){uploadFile(0x0,pic_url,'',_0x2613('0x56'));}if(cover_url[_0x2613('0x25')]>0x0){uploadFile(0x0,cover_url,'',_0x2613('0x57'));}if(pic_url[_0x2613('0x25')]==0x0&&cover_url[_0x2613('0x25')]==0x0&&pictures[_0x2613('0x25')]==0x0){scene=0x0;var _0x3436bc=[];updateGalleryPic(_0x3436bc);}if(pic_url[_0x2613('0x25')]>0x0&&cover_url[_0x2613('0x25')]==0x0&&pictures[_0x2613('0x25')]==0x0){scene=0x1;}else if(pic_url[_0x2613('0x25')]==0x0&&cover_url[_0x2613('0x25')]>0x0&&pictures['length']==0x0){scene=0x2;}else if(pic_url[_0x2613('0x25')]==0x0&&cover_url[_0x2613('0x25')]==0x0&&pictures['length']>0x0){scene=0x3;}else if(pic_url[_0x2613('0x25')]>0x0&&cover_url['length']==0x0&&pictures['length']>0x0){scene=0x4;}else if(pic_url[_0x2613('0x25')]>0x0&&cover_url[_0x2613('0x25')]>0x0&&pictures[_0x2613('0x25')]==0x0){scene=0x5;}else if(pic_url['length']==0x0&&cover_url[_0x2613('0x25')]>0x0&&pictures[_0x2613('0x25')]>0x0){scene=0x6;}else if(pic_url[_0x2613('0x25')]>0x0&&cover_url['length']>0x0&&pictures[_0x2613('0x25')]>0x0){scene=0x7;}}function afterUpload(_0xb15c30){console[_0x2613('0x5')](_0xb15c30);gallery_url=_0xb15c30;updateGalleryPic(gallery_url);}function afterUploadPicURL(_0x22eed6){console['log'](_0x22eed6);pic_url=_0x22eed6;updateProfilePic(pic_url);}function afterUploadCoverURL(_0x2dd9e2){console[_0x2613('0x5')](_0x2dd9e2);cover_url=_0x2dd9e2;updateCoverPic(cover_url);}function dataURItoBlob(_0x2abdaf){var _0x5aa81f;if(_0x2abdaf[_0x2613('0x21')](',')[0x0]['indexOf'](_0x2613('0x58'))>=0x0)_0x5aa81f=atob(_0x2abdaf[_0x2613('0x21')](',')[0x1]);else _0x5aa81f=unescape(_0x2abdaf['split'](',')[0x1]);var _0x458f77=_0x2abdaf[_0x2613('0x21')](',')[0x0][_0x2613('0x21')](':')[0x1][_0x2613('0x21')](';')[0x0];var _0x46d012=new Uint8Array(_0x5aa81f['length']);for(var _0x50a1b8=0x0;_0x50a1b8<_0x5aa81f[_0x2613('0x25')];_0x50a1b8++){_0x46d012[_0x50a1b8]=_0x5aa81f[_0x2613('0x59')](_0x50a1b8);}return new Blob([_0x46d012],{'type':_0x458f77});}function uploadFile(_0x3da9a8,_0x24a808,_0x105a22,_0x5e312e){if(_0x3da9a8>=_0x24a808[_0x2613('0x25')]){console[_0x2613('0x5')](_0x2613('0x5a'));if(_0x5e312e==_0x2613('0x20'))afterUpload(_0x105a22);else if(_0x5e312e==_0x2613('0x56'))afterUploadPicURL(_0x105a22);else if(_0x5e312e==_0x2613('0x57'))afterUploadCoverURL(_0x105a22);return _0x105a22;}var _0x46edd8=new Date();var _0x1efbb4=_0x46edd8[_0x2613('0x5b')]();var _0x4a6ca8=_0x24a808[_0x3da9a8][_0x2613('0x6')]+'_'+_0x1efbb4;var _0x2504c4=dataURItoBlob(_0x24a808[_0x3da9a8][_0x2613('0x12')]);var _0x3d5197=defaultStorage['ref']()[_0x2613('0x5c')](email+'/'+_0x4a6ca8)[_0x2613('0x5d')](_0x2504c4);_0x3d5197['on'](firebase[_0x2613('0x7')][_0x2613('0x5e')]['STATE_CHANGED'],function(_0x1e1c9f){var _0x4dd9ad=_0x1e1c9f[_0x2613('0x5f')]/_0x1e1c9f[_0x2613('0x60')]*0x64;console[_0x2613('0x5')]('Upload\x20is\x20'+_0x4dd9ad+_0x2613('0x61'));switch(_0x1e1c9f[_0x2613('0x62')]){case firebase[_0x2613('0x7')][_0x2613('0x63')][_0x2613('0x64')]:console[_0x2613('0x5')](_0x2613('0x65'));break;case firebase[_0x2613('0x7')][_0x2613('0x63')][_0x2613('0x66')]:console['log'](_0x2613('0x67'));break;}},function(_0x5e16a6){switch(_0x5e16a6[_0x2613('0x68')]){case _0x2613('0x69'):break;case _0x2613('0x6a'):break;case'storage/unknown':break;}},function(){_0x3d5197[_0x2613('0x6b')][_0x2613('0x6c')][_0x2613('0x6d')]()['then'](function(_0x1cd3cc){_0x105a22+=_0x1cd3cc+'!';uploadFile(_0x3da9a8+0x1,_0x24a808,_0x105a22,_0x5e312e);});});}document[_0x2613('0x2a')](_0x2613('0x57'))['addEventListener'](_0x2613('0x6e'),CoverSelect,![]);document[_0x2613('0x2a')](_0x2613('0x6f'))[_0x2613('0x70')](_0x2613('0x6e'),ProfileSelect,![]);document['getElementById']('files')[_0x2613('0x70')](_0x2613('0x6e'),handleFileSelect,![]);
