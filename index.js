h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");
if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
       
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

 var codeStatus = false;

 //function ở đây còn gà lắm nếu cần anh dạy cho cả làm html cho jb ko cần vá :)))
 


 function aim180() {
        h5gg.clearResults();
        h5gg.searchNumber('1057048494','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1054951342','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1053273620','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
    }


function aimscope() {
        h5gg.clearResults();
        h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');
        h5gg.editAll('180', 'F32'); 
        h5gg.clearResults();
    }

function lockscope() {
        h5gg.clearResults();
        h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		h5gg.searchNearby('3', 'I32', '0x100');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
    	h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		
	}
	

	
	
function buffdame() {
        h5gg.clearResults();
        h5gg.searchNumber('5.5','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();
        h5gg.searchNumber('0.75','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();
    }

	function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;
            if (searchValue === nhayngam) nhayngam = replaceValue;
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}

function cao() {
    modifyValue1(-0.05, Number(prompt("Nhập Độ Cao -0.05 -> ...  :", "")), 'F00', null,);
}
function xa() {
    modifyValue1(2.5, Number(prompt("Nhập Tầm xa 2.5 -> ... :", "")), 'F04', null,);
	}
	
function Norecoil() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')}

function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物範圍'
    });
}

function AimFor() {
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')}


function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
    });


	}
	

function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
vant.showNotify({
        type: 'success',
        message: 'AWM自瞄'
    });
}


function HeadshotCu() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(2018908708, 96688289, 'I32')}



function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


	}
	
function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: '快切'
    });


	}

function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: '遊戲靈敏'
    });

	}

function so01() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function so02() {
    h5gg.editAll('4397530849749489418', 'I64');

    vant.showNotify({
        type: 'success',
        message: '10x'
    });

}

function so03() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: '還原'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
    vant.showNotify({
        type: 'success',
        message: '50x'
    });

}

function so06() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: '2x'
    });

	}


function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: '肩膀天線'
    });


}



function so91() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: '超細手線'
    });


}

function so92() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: '微粗手線'
    });


	}

	function goc1() {
    h5gg.clearResults();
    h5gg.searchNumber('909000005', 'I64', '0x100000000', '0x200000000');
    alert('Mod By Duy Anh(' + h5gg.getResultsCount() + '🇻🇳)');
}
function goc2() {
    h5gg.clearResults();
    h5gg.searchNumber('909000003', 'I64', '0x100000000', '0x200000000');
    alert('Mod By Duy Anh(' + h5gg.getResultsCount() + '🇻🇳)');
}
function goc3() {
    h5gg.clearResults();
    h5gg.searchNumber('909000004', 'I64', '0x100000000', '0x200000000');
    alert('Mod By Duy Anh(' + h5gg.getResultsCount() + '🇻🇳)');
}
function goc4() {
    h5gg.clearResults();
    h5gg.searchNumber('914000001', 'I64', '0x100000000', '0x200000000');
    alert('Mod By Duy Anh(' + h5gg.getResultsCount() + '🇻🇳)');
}


function xm8() {
    h5gg.editAll('909000085', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function ak() {
    h5gg.editAll('909000063', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function scar() {
    h5gg.editAll('909000068', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function mp1() {
    h5gg.editAll('909000075', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function m1014a() {
    h5gg.editAll('909000081', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function famas() {
    h5gg.editAll('909000090', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function ump() {
    h5gg.editAll('909000098', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function ump() {
    h5gg.editAll('909000098', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function mp2() {
    h5gg.editAll('909040010', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function mp2() {
    h5gg.editAll('909040010', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function mp5() {
    h5gg.editAll('909033002', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function m1887() {
    h5gg.editAll('909035007', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function m4a1() {
    h5gg.editAll('909033001', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function an94() {
    h5gg.editAll('909035012', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function namdam() {
    h5gg.editAll('909037011', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function luc() {
    h5gg.editAll('909038012', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function thomson() {
    h5gg.editAll('909038010', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function m1014b() {
    h5gg.editAll('909039011', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function m1014b() {
    h5gg.editAll('909039011', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function muakiem() {
    h5gg.editAll('909044015', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function groda() {
    h5gg.editAll('909041005', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function chimgokien() {
    h5gg.editAll('909042008', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function lv100() {
    h5gg.editAll('909042007', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function hopthe() {
    h5gg.editAll('909044005', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function ngoisanh() {
    h5gg.editAll('909043002', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function cuoiech() {
    h5gg.editAll('909045005', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function cuoiboncau() {
    h5gg.editAll('909043003', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function caothust() {
    h5gg.editAll('909041012', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function caothutc() {
    h5gg.editAll('909041013', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function raicingboi() {
    h5gg.editAll('909043009', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function parafal() {
    h5gg.editAll('909045001', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function camco() {
    h5gg.editAll('909000034', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function tp1() {
    h5gg.editAll('914000002', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function tp2() {
    h5gg.editAll('914000003', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

}
function tp3() {
    h5gg.editAll('914038001', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Đã Bật Mod'
    });

		}

function ZomCamxa() {
    modifyValue7(
        60, // Giá trị tìm kiếm ban đầu là 60
        Number(prompt("Nhập Tầm xa -> ... :", "")), // Giá trị thay thế do người dùng nhập vào
        '68', // Phần cuối của địa chỉ bộ nhớ cần khớp
        null, // Không cần địa chỉ kết thúc thứ hai
        "Giá trị đã được thay đổi và khóa." // Thông báo khi thay đổi thành công và khóa giá trị
    );
}

function modifyValue7(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    // Tạo một danh sách để lưu trữ các địa chỉ cần khóa
    const lockAddresses = [];

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
            lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);

        // Khóa giá trị sau khi thay đổi
        const locker = setInterval(function() {
            console.log("Kiểm tra và khóa giá trị...");
            lockAddresses.forEach(address => {
                const currentValue = h5gg.getValue(address, 'F32');
                if (currentValue !== replaceValue) { // Chỉ cập nhật nếu giá trị đã thay đổi
                    h5gg.setValue(address, replaceValue.toString(), 'F32');
                }
            });
        }, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

        // Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
	}



</script>
