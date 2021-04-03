var SHEET_ID = "1M95MoJNxYh25NQepr7IYb5XWDWIdZ2lS2T7uU-yYDC0";

// 公開用URLにアクセスがあると以下の関数が実行される
function doGet(){
  // 以下の処理で「index.html」を読み込んで解析＆表示されるよう出力されていく
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  // 以下は、スマホ対応の画面スケーリング処理
  htmlOutput
    .setTitle('食品ロスを削減するアプリ「Fooss」')
    //.setFaviconUrl('')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}

// HTML側で認識したクラス名をシートに書き込むために呼び出される関数
function addSheetRow(time, className){
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheets()[0];    // １つ目のシートを対象とする
  sheet.appendRow([time, className]);   // 最下行に追加 

}
