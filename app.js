function number() {
  let i = 0;

  // 50回までカウントする処理
  while (i <= 50) {
      console.log(i);

      // 10の倍数かどうかをチェックする処理
      if (i % 10 === 0 && i !== 0) {
          alert('今 ' + i + ' 回ループしました');
      }

      // 4で割れる数の場合は「4で割れる数です。[カウント]」とコンソールに出力する処理
      if (i % 4 === 0 && i !== 0) {
          console.log("4で割れる数です。" + i);
      }

      i++;
  }
// カウントが50になったらアラートで「50回カウントが終わりました。」と出力する処理
  if (i = 50) {
    alert( i + "回カウントが終わりました。");
  }

}

number();