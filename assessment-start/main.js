const customName = document.getElementById('customname'); //名前変数
const randomize = document.querySelector('.randomize'); //ストーリー作成ボタン
const story = document.querySelector('.story'); //storyへの参照の保持

function randomValueFromArray(array){ //引数でとった配列からランダムに1つ項目を戻り値として返す関数
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温華氏40度で外は寒かった。:insertx:は散歩に出かけた。:inserty:に着いた。:insertz:体重300ポンドの:insertx:は驚いたが、ボブは驚かなかった。:inserty:ではよくあることだった。' //不変部分のストーリー
const insertX=['山田','田中','豚'] //名前(自分以外)
const insertY=['アメリカ','大学','精肉工場'] //目的地
const insertZ=['訳の分からない言語が聞こえた','授業に参加した','鉄分の匂いがした'] //目的地の状況(文章)

randomize.addEventListener('click', result);

function result() {
  
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  
  //Xが2回、Yが2回、Zが1回
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }
  
//華氏○○度から摂氏に直す。ポンドからkgに直す
  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)}kg`;
    const temperature =  `${Math.round(((40*9)/5)+32)}`; // (9/5)+32
    newStory = newStory.replace('華氏40', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
