'use strict';
const tempInput = document.getElementById('tempinput');
const showMenuButton = document.getElementById('showmenu');
const resultDivision = document.getElementById('result-area');

showMenuButton.addEventListener(
  'click',
  () => {
    const temp = tempInput.value;
    if (temp.length === 0) {
      //気温が空の時は処理を終了する
      return
    }
    console.log(tempInput)
    
    //おすすめ表示エリアの作成
    resultDivision.innerText = '';

    //headerDivisionの作成
    // const headerDivision = document.createElement('div');
    //headerDivision.setAttribute('class', 'card-header text-bg-success');
    //headerDivision.innerText = '今日のおすすめ';

    //bodyDivisionの作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const answers = choosemenu(temp);
    paragraph.innerText = '今日のおすすめは「' + answers + '」です！';
    bodyDivision.appendChild(paragraph);

    //resultDivisionにBootstrapのスタイルを適用する
    resultDivision.setAttribute('class', 'card col-sm-9 col-lg-6 mt-4');

    //headerDivisionとbodyDivisionをresultDivisionに差し込む
    //resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);

  }
);

/**
 * 気温を渡すとおすすめメニューを返す関数
 * @param {number} temp 今日の気温
 * @return {string} おすすめ
*/

function choosemenu(temp) {
  const numTemp = Number(temp);
 
  let menuList = [];
  if (numTemp >= 25) {
    menuList = ['ひんやり冷やし中華','つるっとそうめん','さっぱりちらし寿司','がっつり焼肉','スパイシーカレーライス']
  } else if (numTemp <= 15) {
    menuList = ['旨辛キムチ鍋','ぽかぽかクリームシチュー','リッチにすき焼き','ほっこりロールキャベツ','あつあつグラタン']
  } else {
    menuList = ['ふっくらジューシーハンバーグ','ごはんが進む生姜焼き','ヘルシー焼き魚','パリッとジューシー焼き餃子','サクサクから揚げ']
  }

  const randomIndex = Math.floor(Math.random() * menuList.length);
  const result = menuList[randomIndex];
  
  return result;
}