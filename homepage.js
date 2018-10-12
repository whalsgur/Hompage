/*var map = loadRealcode('realcode.openapi.tmap');*/
/*if(navigator.userAgent.indexOf('Mobile') != -1) {
    location.herf = 
}*/

var bgBox = box().append().size('100%').disableSelection().border(0);
var topBox = box().appendTo(bgBox).size('100%', 80).border(0);
var mainBox = box().appendTo(bgBox).size('95%', 280).border(0);
var botBox = box().appendTo(bgBox).size('95%', 150).border(0);
var texts = ['MY INFO', '운 테스트', '클릭하기', '로그인'];
var iddd = ['1-1', '2-2', '3-3', '4-4'];
var arr = []; //아이디 목록
var arr2 = []; // 비번 목록
var rf; // 로그인 아이디
var scores = [];
var scores2  = [];

var nnn = 0;
var checksideBox = true; //sideBox가 나와있는지 검사 (안 나오면 true)
//박스 선택을 랜덤
var colors = ['Pink','LightPink','HotPink','DeepPink','PaleVioletRed','MediumVioletRed','Lavender','Thistle','Plum','Orchid','Violet','Fuchsia','Magenta','MediumOrchid','DarkOrchid','DarkViolet','BlueViolet','DarkMagenta','Purple','MediumPurple','MediumSlateBlue','SlateBlue','DarkSlateBlue','RebeccaPurple','Indigo','LightSalmon','Salmon','DarkSalmon','LightCoral','IndianRed','Crimson','Red','FireBrick','DarkRed','Orange','DarkOrange','Coral','Tomato','OrangeRed','Gold','Yellow','PaleGoldenRod','Khaki','DarkKhaki','GreenYellow','Chartreuse','LawnGreen','Lime','LimeGreen','PaleGreen','LightGreen','MediumSpringGreen','SpringGreen','MediumSeaGreen','SeaGreen','ForestGreen','Green','DarkGreen','YellowGreen','OliveDrab','DarkOliveGreen','MediumAquaMarine','DarkSeaGreen','LightSeaGreen','DarkCyan','Teal','Aqua','Cyan','LightCyan','PaleTurquoise','Aquamarine','Turquoise','MediumTurquoise','DarkTurquoise','CadetBlue','SteelBlue','LightSteelBlue','LightBlue','PowderBlue','LightSkyBlue','SkyBlue','CornflowerBlue','DeepSkyBlue','DodgerBlue','RoyalBlue','Blue','MediumBlue','DarkBlue','Navy','MidnightBlue','Cornsilk','BlanchedAlmond','Bisque','NavajoWhite','Wheat','BurlyWood','Tan','RosyBrown','SandyBrown','GoldenRod','DarkGoldenRod','Peru','Chocolate','Olive','SaddleBrown','Sienna','Brown','Maroon','Gainsboro','LightGray','Silver','DarkGray','DimGray','Gray','LightSlateGray','SlateGray','DarkSlateGray','Black'];
//색깔 랜덤


var logoBox = box().appendTo(topBox).marginTop(18).marginLeft(20).text('MENU', 25).size('auto').float('left').border(2)
              .borderRadius(7).borderStyle('dashed').padding(2).font('Nanum Pen Script').click(sideClick);//로고박스
var add = [ 
    {
     text: '선택',
     value: '선택'
    },
    { 
      text: '집', 
      value: '대전광역시 서구 만년동 1'
    },
    { 
      text: '학교',
      value: '대전광역시 서구 만년동 246'
    }
];

var abox = box().appendTo(mainBox).size('100%', '85%').hide().text('준비중 입니다!', 50);//지도
/*var addBox =  box().appendTo(abox).size('30%', '20%').overflow('auto').select(add, onSelect).marginTop(20);*/
var bbox = box().appendTo(mainBox).size('100%').hide().overflow('auto');
var cbox = box().appendTo(mainBox).size('100%').overflow('auto').hide();//게임 담고 있는 박스
var numbox = box().appendTo(cbox).size('auto').text(nnn, 20).padding(10, 10).block().margin('auto');//게임 스코어
var savescoreBox = box().appendTo(numbox).size('auto').text('저장', 15).button().padding(2).float('right').moveUp(10).click(gamescore).border(2).borderRadius(7);//게임스코어 저장하기
var scoreBoxxx = box().appendTo(botBox).size('90%', '100%').block().margin('auto').border(1).moveLeft(10).overflow('auto').hide();//게임스코어 나오는 박스
box().appendTo(scoreBoxxx).size('100%','15%').text('순위', 15).border(0).borderBottom(1).borderColor('blue');//필요없는 거
var scoreBox = box().appendTo(scoreBoxxx).size('100%', '80%').block().margin('auto').border(0).overflow('auto');

for (var i=0; i<287; i++) {
    box().appendTo(cbox).size(15).color('white').border(0).id(i).click(clickGame);//박스 많이 만들기
}

var ree = random(10);
var coll = random(colors.length);
cbox.findBox(ree).color(colors[coll]);


function clickGame (bx) { //이상한게임
    if (bx.color() == 'white') {
        numbox.text(0);
        nnn = 0;
        return;
    }
    
    else {
        nnn++;
        var number = random(300);
        var coll = random(colors.length);
        numbox.text(nnn);
        bx.color('white');
        cbox.findBox(number).color(colors[coll]);
    }
}

/*map.appendTo(abox);*/

var logBox = box().appendTo(mainBox).size(300, 230).color('Snow').marginTop(30).borderRadius(5).positionFixed().center().hide();//로그인박스 전체
box().appendTo(logBox).text('X', 15).size('95%', '7%').border(0).click(clickc).marginTop(2).align('right').moveLeft(5).marginTop(5);//로그인 상자 없애기
box().appendTo(logBox).text('로그인', 20).textColor('SaddleBrown').border(0).size('100%','auto');//필요없는 것
box().appendTo(logBox).size('auto' , '11%').text('아이디', 15).border(0).marginTop(25).marginRight(10);
var log1 = box().appendTo(logBox).size('75%', 'auto').marginTop(25).textSize(15).border(1).borderRadius(10).padding('1 0').moveRight(8).editable();//아이디 입력상자
box().appendTo(logBox).size('auto' , '11%').text('비밀번호', 15).border(0).marginTop(8).marginRight(10);
var log2 = box().appendTo(logBox).size('75%', 'auto').marginTop(8).textSize(15).border(1).borderRadius(10).padding('1 0').editable();//비번 입력 상자
box().appendTo(logBox).size('auto').marginTop(25).text('로그인', 15).padding('2 20').borderRadius(8).button().click(logClick);//로그인 버튼
box().appendTo(logBox).size('auto').marginTop(25).text('회원가입', 14).padding('3 15').borderRadius(8).button().click(logClick2);//회원가입 버튼

for (var i = 0; i<4; i++) {
    box().appendTo(topBox).size('auto').text(texts[i], 25).font('Nanum Pen Script').marginTop(20).marginLeft(10)
    .border(2).borderRadius(7).borderStyle('dashed').click(onClick).padding(2).id(iddd[i]);//위의 로고 4개 
}

function onClick (bx) {
    var checklogin = findBox('4-4').text();
    
    if(bx.id()!='4-4' && checklogin == '로그인') {
        alert('로그인이 필요합니다');
        logBox.show();
        return;
    }
        abox.hide();
        bbox.hide();
        cbox.hide();
        scoreBoxxx.hide();
        boxbox.hide();
        boxboxbox.hide();
        boxbox2.hide();
        logBox.hide();
        gamescoreBoxxx.hide();
    
    
    
    if (bx.id() == '4-4') {
         if(bx.text() == '로그아웃') {
             bx.text('로그인');
             cbox.hide();
             scoreBoxxx.hide();
             boxbox.show();
             boxboxbox.show();
             boxbox2.show();
             nnn = 0;
             alert('로그아웃 되었습니다');
         }
         else {
             logBox.show();
         }
    }
    
    
    
    else if (bx.id() == '1-1') {//my info
        abox.show();
        boxbox.show();
        boxbox2.show();
        boxboxbox.show();
        
    }
     else if (bx.id() == '2-2') {//board
        bbox.show();
        gamescoreBoxxx.show();
        
    }
    
    else if (bx.id() == '3-3') {//gallery
        if (checklogin == '로그아웃') {
            cbox.show();
            scoreBoxxx.show();
            return;
        }
       
       else {
           alert('로그인이 필요합니다');
           logBox.show();
           return;
       }
    }
    
    
}



var boxbox = box().appendTo(botBox).text('', 15).size('80%', 'auto').editable().border(3).marginTop(30);//댓글 적는 박스
var boxbox2 = box().appendTo(botBox).size('auto').text('전송', 8).click(onClick2).marginTop(27).button();//댓글 전송 박스
var boxboxbox = box().appendTo(botBox).size('94%', 'auto').block().margin('auto').border(1).moveLeft(0);//댓글 담는 박스


function onClick2 (bx) { //댓글 나타내기
    var www = findBox('4-4');
    
    if (www.text() == '로그아웃') {
        var te = boxbox.text();
        if (te != '' ) {
            var boxs = box().appendTo(boxboxbox).size('100%', '15%');
            box().appendTo(boxs).text(rf + ' :  ', 20).size('10%').border(0);  
            var boxss = box().appendTo(boxs).text(te).textSize(20).size('75%', 'auto').border(0);
            boxbox.text('');
            puttext(te);
        }
    }
    
    else {
        alert('로그인이 필요합니다');
        boxbox.text('');
        logBox.show()
        return;
    }
}

function puttext (te) { // 댓글 저장
    
    if (arr) {
        arr.push(te);
    }
    else {
        arr = [te];
    }
    
    
    if (arr2) {
        arr2.push(rf);
    }
    else {
        arr2 = [rf];
    }
    
    datastore().put('comments', arr);
    datastore().put('comments2', arr2);
    gettext();
}

function gettext () {//  댓글 소환
    boxboxbox.clear();
    
    if (datastore().get('comments')) {
         arr = datastore().get('comments');
    }
    
    if (datastore().get('comments2')) {
        arr2 = datastore().get('comments2');
    }
    if (arr) {
        for (var i = arr.length -1; i>=0; i--) {
                var boxs = box().appendTo(boxboxbox).size('100%', '10%');
                box().appendTo(boxs).text(arr2[i] + ' :  ', 15).size('10%').border(0).font('Georgia');  
                var boxss = box().appendTo(boxs).text(arr[i]).textSize(15).size('75%', 'auto').border(0).font('Noto Sans KR');
        }
    }
    else {
        return;
    }
}
gettext();

/*function onSelect () {
    var adds = addBox.selectValue();
    if (adds == '선택')
    {
        return;
    }
    map.addMarker(adds);
}*/


function clickc () { // 로그인 창 없애기
    logBox.hide();
}

function logClick () { //로그인 클릭시
    var ids = [];
    
    if (datastore().get('ids')) {
        ids = datastore().get('ids');
        var isUser = false;
        var pa = false;
        
        for (var i = 0; i<ids.length; i++) {
            if(log1.text() == ids[i]) {
                isUser = true;
                var pass = datastore().get('id:'+ log1.text());
                if(log2.text() == pass)
                pa = true;
                break;
            }//if(log1)
        }//for
        
        if (isUser) {
            if(pa) {
                 logBox.hide();
                 findBox('4-4').text('로그아웃');
                 rf = log1.text();
                 log1.text('');
                 log2.text('');
                 alert('로그인 되었습니다');
            }//if(pa)
          
            else {
              alert('비밀번호를 다시 입력해 주세요');
              return;
            }
        }//if(isuser)
        
        else if (isUser == false) {
            alert('아이디를 다시 입력해 주세요');
            log1.text('');
            log2.text('');
        }
    }//if(isuser)
}//func

function logClick2 () {
    var ids = [];
    if (datastore().get('ids')) {
        ids = datastore().get('ids');
        var isUser = false;
        for (var i = 0; i<ids.length; i++) {
        
        if(log1.text() == ids[i]) {
            isUser = true;
            break;
        }
      }
      if (isUser) {
         alert ('이미 로그인된 아이디입니다');
         return;
      }//if
    }//if
    
    ids.push(log1.text());
    datastore().put('ids', ids);
    datastore().put('id:'+ log1.text(), log2.text());
    
    log1.text('');
    log2.text('');
    alert('회원가입이 되었습니다');
}//func

var sideBox = box().append().size('35%', '100%').color('w').positionFixed().left(-352).float('left');// 로고 박스 클릭시 나오는 박스 여러 메뉴가 있음
var sideBox2 = box().appendTo(sideBox).size(20).text('X', 30).border(0).marginTop(15).left(sideBox.left() + 100).click(sideClick);//

function sideClick (bx) { // 로고클릭시 박스나오게 하는 것
    if (bx == sideBox) {
        bx.moveLeft(351, 500);//sideBox 클릭시 들어가게
        checksideBox = true;
        return;
    }
    
    if (checksideBox) {
        sideBox.moveRight(351, 800);//나오게
        checksideBox = false;
        return;
    }
    
    else {
        sideBox.moveLeft(351, 500);//들어가게
        checksideBox = true;
        return;
    }
}

function gamescore () {//게임 전송 눌렀을 때
    var score = numbox.text();
    numbox.text('0');
    nnn=0;
    var scores1 = new Object();//점수
    scores1.id = rf;
    scores1.score = score;
    scores.push(scores1);
    datastore().put('scores', scores);
    
    
    savescore();
}

function savescore () {
    scoreBox.clear();
    
    if (datastore().get('scores')) {
        scores = datastore().get('scores');
    }
    
    if (scores) { 
        scores.sort(function(a,b) {
        return a.score <b.score ? -1 : a.score > b.score ? 1 :0;
        });
    }
    
    if(scores){
        
        for (var i = scores.length -1; i>=0; i--) {
            var a = scores[i];
            var score1 = box().appendTo(scoreBox).size('100%', 'auto').border(3);//아이디와 점수 담는 박스
            box().appendTo(score1).size('auto', '100%').text(a.id + ' :', 20).border(0);//아이디
            box().appendTo(score1).size('80%', '100%').text(a.score , 20).border(0);//점수
        }
    }
}

savescore();
// datastore().delete('comments');
// datastore().delete('comments2');
// datastore().delete('ids');
// datastore().delete('scores');
// datastore().delete('scores2');





var now = 1;
var scoreBox2 = box().appendTo(bbox).size('100%', '15%').text('0', 30);
var gameBox = box().appendTo(bbox).size('100%', '90%').border(0);
var now3 = random(now) + 1;
var now2 = random(now, now3);
var yyy = 0


function game2Click (bx) {//선택했을떄
    if(bx.id() == 'true') {
        yyy++;
        scoreBox2.text(yyy);
        makeGame();
    }
    else {
        yyy = 0;
        scoreBox2.text(yyy);
        now = 1;
        makeGame();
    }
}

function makeGame () {//게임이 정답일때
    gameBox.clear();
    now++;
    now3 = random(now) + 1;
    now2 = random(now, now3);
    
    for(var i=0; i<now; i++) {
    
        if (now2.has(i)) {
            box().appendTo(gameBox).size('auto').text(i+1, 35).padding(2).margin(5).click(game2Click).id('true');
        }   
        
        else {
            box().appendTo(gameBox).size('auto').text(i+1, 35).padding(2).margin(5).click(game2Click);
        }
    }
}

makeGame();

var gamescoreBox = box().appendTo(scoreBox2).size('auto').text('저장', 15).button().float('right').border(2).borderRadius(7).click(gamescore2);//게임스코어 저장하기
var  gamescoreBoxxx = box().appendTo(botBox).size('90%', '100%').block().margin('auto').border(1).moveLeft(10).overflow('auto').hide();//게임스코어 나오는 박스
box().appendTo(gamescoreBoxxx).size('100%','15%').text('순위', 15).border(0).borderBottom(1).borderColor('blue');//필요없는 거
var gamescoreBox2 = box().appendTo(gamescoreBoxxx).size('100%', '83%').block().margin('auto').border(0).overflow('auto');//순위들 있는거 

function gamescore2 () {//게임 전송 눌렀을 때
    var score = scoreBox2.text();
    scoreBox2.text('0');
    yyy=0;
    now = 1;
    var scores1 = new Object();
    
    scores1.id = rf;
    scores1.score = score;
    
    scores2.push(scores1);
    datastore().put('scores2', scores2);
    
    savescore2();
}

function savescore2 () {//게임 순위 나타나게
    
    gamescoreBox2.clear();
    
    if(datastore().get('scores2')){
     scores2 = datastore().get('scores2');
    }
    
    if (scores2) {
        scores2.sort(function(a,b) {
            return a.score < b.score ? -1 : a.score > b.score ? 1 :0;
        });
    }
        
    if(scores2){
            for (var i = scores2.length -1; i>=0; i--) {
                var a = scores2[i];
                var score1 = box().appendTo(gamescoreBox2).size('100%', 'auto').border(3);//아이디와 점수 담는 박스
                box().appendTo(score1).size('auto', '100%').text(a.id + ' :', 20).border(0);//아이디
                box().appendTo(score1).size('80%', '100%').text(a.score , 20).border(0);//점수
            }
    }
}

savescore2();

