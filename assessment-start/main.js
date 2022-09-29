const customName = document.getElementById('customname'); //名前変数
const randomize = document.querySelector('.randomize'); //ストーリー作成ボタン
const story = document.querySelector('.story'); //storyへの参照の保持

function randomValueFromArray(array){ //引数でとった配列からランダムに1つ項目を戻り値として返す関数
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温華氏40度で外は寒かった。:insertx:は散歩に出かけた。:inserty:に着いた。:insertz:体重50kgの:insertx:は驚いたが、ボブは驚かなかった。:inserty:ではよくあることだった。' //不変部分のストーリー
const insertx=['山田','田中','豚'] //名前(自分以外)
const inserty=['アメリカ','大学','精肉工場'] //目的地
const insertz=['訳の分からない言語が聞こえた','授業に参加した','鉄分の匂いがした'] //目的地の状況(文章)


