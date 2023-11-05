# typing-game
JavaScriptの学習で作成した簡単なタイピングゲーム ランダムに表示される文字列を入力し正解するか時間制限を過ぎればリセットされる。 リストの中から表示されるものと全くランダムな3文字以上の文字列が生成されるものと2パターン作成した。

学習したコードは ・Math.random.toString(36)でランダム文字列の作成 ・list[Math.floor(Math.random() * list.length)でリストからランダムで一つ抜く方法 ・setIntervalで繰り返しのsetTimeoutのような処理、clearIntervalで終了 ・addEventlister('keypress')をe.keycode===13でEnterに設定する

正解ごとにスコア加算の機能を追加してもいいかもしれない
