var _0x5b54=['Successfully\x20Logged-Out','href','hotel-index.html','AIzaSyDdjSnZXerTyTOi7g3910IalzfxARpJXu0','https://trakarotwo.firebaseio.com','trakarotwo','trakarotwo.appspot.com','1004981268613','initializeApp','log','name','storage','firestore','settings','email','collection','doc','get','then','data','No\x20such\x20document!','catch','exists','gallery_url','Error\x20getting\x20document:','length','append','<img\x20style=\x27margin-left:\x200.5vw;\x20height:\x2015vw;\x20width:\x2022vw;\x27\x20onclick=\x27openModal();currentSlide(',')\x27\x20class=\x27hover-shadow\x20cursor\x27\x20src=\x20','<div\x20class=\x27mySlides\x27><img\x20src=','\x20style=\x27width:\x20100%\x27></div>','<div\x20class=\x27column\x27><img\x20class=\x27demo\x20cursor\x27\x20src=','\x20style=\x27width:100%\x27\x20onclick=\x27currentSlide(',')\x27></div>','getElementById','innerHTML','toUpperCase','contact','address','website','booking_url','info','fylla_rating','cover_photo','src','cover_url','hotel_photo','logo_url','rating','star1','add','checked','classList','star2','star3','star4','star5','foodsource','type','toLowerCase','-container','getElementsByTagName','button','No\x20Food\x20Source\x20Network\x20Available\x20yet','parentNode','removeChild','<button\x20style=\x22margin-top:\x201vw;\x20margin-right:\x201vw;\x20height:\x202.5vw;\x20width:\x2031vw;\x22\x20type=\x22button\x22\x20class=\x22btn\x22><p\x20style=\x22font-size:\x201vw;\x22\x20align=\x22left\x22>','loader','display','none','country','manpower-container','<div\x20style=\x22margin-left:\x201vw;\x20position:\x20relative;\x22>','<img\x20style=\x22height:\x206vw;\x20width:\x206vw;\x22\x20src=\x22Picture1.png\x22>','<button\x20style=\x22margin-left:\x200.5vw;\x20margin-top:\x200.75vw;\x20height:\x202.5vw;\x20width:\x206vw;\x20border-top-left-radius:\x2050vw;\x20border-bottom-left-radius:\x2050vw;\x22\x20type=\x22button\x22\x20class=\x22btn\x22><p>','#manpower-container','<br><br><hr></div>','auth','signOut','removeItem'];(function(_0x3b3f23,_0x52bc66){var _0x2ec156=function(_0xe1e7f8){while(--_0xe1e7f8){_0x3b3f23['push'](_0x3b3f23['shift']());}};_0x2ec156(++_0x52bc66);}(_0x5b54,0x1e3));var _0x4e1f=function(_0x49fee9,_0x931c3d){_0x49fee9=_0x49fee9-0x0;var _0x4bd622=_0x5b54[_0x49fee9];return _0x4bd622;};var config={'apiKey':_0x4e1f('0x0'),'authDomain':'trakarotwo.firebaseapp.com','databaseURL':_0x4e1f('0x1'),'projectId':_0x4e1f('0x2'),'storageBucket':_0x4e1f('0x3'),'messagingSenderId':_0x4e1f('0x4')};var defaultApp=firebase[_0x4e1f('0x5')](config);console[_0x4e1f('0x6')](defaultApp[_0x4e1f('0x7')]);var defaultStorage=defaultApp[_0x4e1f('0x8')]();var defaultFirestore=defaultApp[_0x4e1f('0x9')]();const firestore=firebase[_0x4e1f('0x9')]();const settings={'timestampsInSnapshots':!![]};firestore[_0x4e1f('0xa')](settings);var email=sessionStorage['getItem'](_0x4e1f('0xb'));var hotel_data;var gallery_pics;var docRef=defaultFirestore[_0x4e1f('0xc')]('hotelAccount')[_0x4e1f('0xd')](email);docRef[_0x4e1f('0xe')]()[_0x4e1f('0xf')](function(_0x330476){if(_0x330476['exists']){hotel_data=_0x330476[_0x4e1f('0x10')]();}else{console['log'](_0x4e1f('0x11'));}})[_0x4e1f('0x12')](function(_0x5ad8c0){console[_0x4e1f('0x6')]('Error\x20getting\x20document:',_0x5ad8c0);});var picRef=defaultFirestore[_0x4e1f('0xc')]('gallery')['doc'](email);var withpic;picRef[_0x4e1f('0xe')]()[_0x4e1f('0xf')](function(_0x579950){if(_0x579950[_0x4e1f('0x13')]){gallery_pics=_0x579950[_0x4e1f('0x10')]()[_0x4e1f('0x14')];withpic=0x1;load(withpic);}else{console[_0x4e1f('0x6')](_0x4e1f('0x11'));withpic=0x0;load(withpic);}})[_0x4e1f('0x12')](function(_0x2025dd){console[_0x4e1f('0x6')](_0x4e1f('0x15'),_0x2025dd);});function load(_0x1eddd3){if(_0x1eddd3==0x1){for(var _0x61ac73=0x0;_0x61ac73<gallery_pics[_0x4e1f('0x16')];_0x61ac73++){$(gallery)[_0x4e1f('0x17')](_0x4e1f('0x18')+(_0x61ac73+0x1)+_0x4e1f('0x19')+gallery_pics[_0x61ac73]+'>');$(galleryContent)['append'](_0x4e1f('0x1a')+gallery_pics[_0x61ac73]+_0x4e1f('0x1b'));$(galleryColumn)['append'](_0x4e1f('0x1c')+gallery_pics[_0x61ac73]+_0x4e1f('0x1d')+(_0x61ac73+0x1)+_0x4e1f('0x1e'));}}else if(_0x1eddd3==0x0){$(noPhoto)[_0x4e1f('0x17')]('<p\x20align=\x27justify\x27\x20style=\x27text-indent:\x203vw;\x27>No\x20Photos\x20available\x20yet</p>');}document[_0x4e1f('0x1f')](_0x4e1f('0x7'))[_0x4e1f('0x20')]=hotel_data[_0x4e1f('0x7')]!=''?hotel_data['name'][_0x4e1f('0x21')]():document[_0x4e1f('0x1f')]('name')[_0x4e1f('0x20')];document['getElementById'](_0x4e1f('0x22'))[_0x4e1f('0x20')]=hotel_data[_0x4e1f('0x22')]!=''?hotel_data[_0x4e1f('0x22')]:document[_0x4e1f('0x1f')](_0x4e1f('0x22'))[_0x4e1f('0x20')];document['getElementById'](_0x4e1f('0xb'))[_0x4e1f('0x20')]=hotel_data['email']!=''?hotel_data[_0x4e1f('0xb')]:document[_0x4e1f('0x1f')]('email')[_0x4e1f('0x20')];document[_0x4e1f('0x1f')](_0x4e1f('0x23'))[_0x4e1f('0x20')]=hotel_data['address']!=''?hotel_data[_0x4e1f('0x23')]:document[_0x4e1f('0x1f')](_0x4e1f('0x23'))['innerHTML'];document[_0x4e1f('0x1f')](_0x4e1f('0x24'))['innerHTML']=hotel_data[_0x4e1f('0x24')]!=''?hotel_data['website']:document['getElementById'](_0x4e1f('0x24'))[_0x4e1f('0x20')];document[_0x4e1f('0x1f')](_0x4e1f('0x25'))['innerHTML']=hotel_data[_0x4e1f('0x25')]!=''?hotel_data[_0x4e1f('0x25')]:document[_0x4e1f('0x1f')](_0x4e1f('0x25'))['innerHTML'];document[_0x4e1f('0x1f')](_0x4e1f('0x26'))['innerHTML']=hotel_data[_0x4e1f('0x26')]!=''?hotel_data['info']:document[_0x4e1f('0x1f')](_0x4e1f('0x26'))[_0x4e1f('0x20')];document[_0x4e1f('0x1f')](_0x4e1f('0x27'))[_0x4e1f('0x20')]=hotel_data[_0x4e1f('0x27')]!=0x0?hotel_data['fylla_rating']:document['getElementById'](_0x4e1f('0x27'))['innerHTML'];document[_0x4e1f('0x1f')](_0x4e1f('0x28'))[_0x4e1f('0x29')]=hotel_data[_0x4e1f('0x2a')]!=''?hotel_data[_0x4e1f('0x2a')]:document[_0x4e1f('0x1f')](_0x4e1f('0x28'))[_0x4e1f('0x29')];document[_0x4e1f('0x1f')](_0x4e1f('0x2b'))['src']=hotel_data[_0x4e1f('0x2c')]!=''?hotel_data[_0x4e1f('0x2c')]:document[_0x4e1f('0x1f')](_0x4e1f('0x2b'))[_0x4e1f('0x29')];if(hotel_data[_0x4e1f('0x2d')]==0x1){document['getElementById'](_0x4e1f('0x2e'))['classList'][_0x4e1f('0x2f')](_0x4e1f('0x30'));}else if(hotel_data[_0x4e1f('0x2d')]==0x2){document['getElementById']('star1')[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')]('star2')[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));}else if(hotel_data['rating']==0x3){document[_0x4e1f('0x1f')]('star1')['classList'][_0x4e1f('0x2f')](_0x4e1f('0x30'));document['getElementById'](_0x4e1f('0x32'))[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x33'))[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));}else if(hotel_data['rating']==0x4){document[_0x4e1f('0x1f')](_0x4e1f('0x2e'))[_0x4e1f('0x31')]['add'](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x32'))[_0x4e1f('0x31')]['add'](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x33'))[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x34'))[_0x4e1f('0x31')]['add']('checked');}else if(hotel_data[_0x4e1f('0x2d')]==0x5){document[_0x4e1f('0x1f')]('star1')[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x32'))[_0x4e1f('0x31')][_0x4e1f('0x2f')]('checked');document[_0x4e1f('0x1f')](_0x4e1f('0x33'))[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')]('star4')[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));document[_0x4e1f('0x1f')](_0x4e1f('0x35'))[_0x4e1f('0x31')][_0x4e1f('0x2f')](_0x4e1f('0x30'));}var _0x57e39f=defaultFirestore[_0x4e1f('0xc')](_0x4e1f('0x36'))[_0x4e1f('0xd')](email);_0x57e39f[_0x4e1f('0xe')]()[_0x4e1f('0xf')](function(_0x3e5e29){if(_0x3e5e29[_0x4e1f('0x13')]){var _0x540ebe=_0x3e5e29[_0x4e1f('0x10')]()['foods'];for(var _0x61ac73=0x0;_0x61ac73<_0x540ebe[_0x4e1f('0x16')];_0x61ac73++){if(document[_0x4e1f('0x1f')](_0x540ebe[_0x61ac73][_0x4e1f('0x37')][_0x4e1f('0x38')]()+_0x4e1f('0x39'))[_0x4e1f('0x3a')](_0x4e1f('0x3b'))[0x0][_0x4e1f('0x3a')]('p')[0x0]['innerText']==_0x4e1f('0x3c')){var _0x599f23=document[_0x4e1f('0x1f')](_0x540ebe[_0x61ac73][_0x4e1f('0x37')][_0x4e1f('0x38')]()+_0x4e1f('0x39'))[_0x4e1f('0x3a')]('button')[0x0];_0x599f23[_0x4e1f('0x3d')][_0x4e1f('0x3e')](_0x599f23);}$('#'+_0x540ebe[_0x61ac73][_0x4e1f('0x37')][_0x4e1f('0x38')]()+_0x4e1f('0x39'))['append'](_0x4e1f('0x3f')+_0x540ebe[_0x61ac73][_0x4e1f('0x7')]+'\x20-\x20'+_0x540ebe[_0x61ac73][_0x4e1f('0x23')]+'</p></button>');}}else{console[_0x4e1f('0x6')](_0x4e1f('0x11'));}var _0x12f926=defaultFirestore[_0x4e1f('0xc')]('manpower')[_0x4e1f('0xd')](email);_0x12f926[_0x4e1f('0xe')]()['then'](function(_0x189b22){document[_0x4e1f('0x1f')](_0x4e1f('0x40'))['style'][_0x4e1f('0x41')]=_0x4e1f('0x42');if(_0x189b22['exists']){var _0x302263=_0x189b22[_0x4e1f('0x10')]()[_0x4e1f('0x43')];var _0x169531=0x0;for(var _0x216498 in _0x302263){if(_0x169531==0x0){document[_0x4e1f('0x1f')](_0x4e1f('0x44'))['innerHTML']='';_0x169531=0x1;}var _0x3c1076='';_0x3c1076+=_0x4e1f('0x45')+_0x4e1f('0x46')+'<p\x20style=\x22margin-left:7vw;\x20margin-top:\x20-4vw;\x20margin-bottom:\x202.5vw;\x22\x20class=\x22card-text\x22><b>'+_0x216498+'</b></p>';for(var _0x61ac73=0x0;_0x61ac73<_0x302263[_0x216498][_0x4e1f('0x10')][_0x4e1f('0x16')];_0x61ac73++){_0x3c1076+=_0x4e1f('0x47')+_0x302263[_0x216498][_0x4e1f('0x10')][_0x61ac73]['residents']+'</p></button>\x20<button\x20style=\x22margin-left:\x200.5vw;\x20margin-top:\x200.75vw;\x20height:\x202.5vw;\x20width:\x2025vw;\x20border-top-right-radius:\x2050vw;\x20border-bottom-right-radius:\x2050vw;\x22\x20type=\x22button\x22\x20class=\x22btn\x22><p\x20align=\x22left\x22>'+_0x302263[_0x216498][_0x4e1f('0x10')][_0x61ac73]['province']+'</p></button>';}$(_0x4e1f('0x48'))[_0x4e1f('0x17')](_0x3c1076+_0x4e1f('0x49'));}}else{console[_0x4e1f('0x6')](_0x4e1f('0x11'));}})[_0x4e1f('0x12')](function(_0x4c759e){console['log'](_0x4e1f('0x15'),_0x4c759e);});})[_0x4e1f('0x12')](function(_0x56e424){console[_0x4e1f('0x6')]('Error\x20getting\x20document:',_0x56e424);});}function signOut(){firebase[_0x4e1f('0x4a')]()[_0x4e1f('0x4b')]()['then'](function(){sessionStorage[_0x4e1f('0x4c')](_0x4e1f('0xb'));alert(_0x4e1f('0x4d'));location[_0x4e1f('0x4e')]=_0x4e1f('0x4f');})[_0x4e1f('0x12')](function(_0x3dc13a){});}