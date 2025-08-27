$(function () {

  /* メニュー*/

  $(".toggle_btn").click(function () {
    $("header").toggleClass("open");
  });

  $("#mask").click(function () {
    $("header").removeClass("open");
  });

  $('a[href^="#"] , .header_line').click(function () {
    $("header").removeClass("open");
  });

  /* menu btn */

  $(".back").on('click', function () {
    if ($("#btn_name").text() === "Menu") {
      $("#btn_name").text("Close");
    } else if ($("#btn_name").text() === "Close") {
      $("#btn_name").text("Menu");
    }

  });



  /* Top video 文字の表示 */


  // 対象の要素を取得
const paragraph = document.querySelector(".catchphrase");
if (paragraph) {
  const textContent = paragraph.textContent;
  paragraph.innerHTML = [...textContent]
    .map(char => char === "\n" ? "<br>" : `<span>${char}</span>`)
    .join("");

  gsap.from(".catchphrase span", { 
        autoAlpha: 0,
        repeat: -1,
        repeatDelay: 1.2,
        stagger: { each: 0.2, from: "random" }
  });
}



  /* フェードイン */

  /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("show");
      }
    });
  });

  /* スクロール パララックス  */

	// ①scrollクラスのついた要素を定数「image」に格納
	const images = document.querySelectorAll(".scroll");
	// ②simpleParallaxを宣言
  if (images.length > 0){
    new simpleParallax(images, {
      scale: 1.5,
      delay: 0.5,         // アニメーション遅延
      transition: 'cubic-bezier(0,0,0,1)' // アニメーションのイージング
    });

  }



});