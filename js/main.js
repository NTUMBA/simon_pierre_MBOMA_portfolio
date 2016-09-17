var random_images_array = ["Screen_css.jpg", "screen_airbnb.jpg","git_port.jpg","html_port.jpg","screen_vim_port.jpg","racoourcis_port.jpg","emmet_port.jpg","boncoin_port.jpg"];
function getRandomImage(imgAr, path) {
    path = path || "img/rand/"; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
document.write(imgStr); document.close();
}
var random_pictures_array = ["rsz_screen_agence_immo.jpg", "rsz_html_skills.jpg","rsz_1tourcoing_botanic_garden1.jpg","rsz_a_plumb.jpg","rsz_coaching1.jpg","rsz_form_port.jpg","rsz_screenshot_boncoin_port.jpg","rsz_screenshot__yza1.jpg"];
function getRandomImagemobile(imgAr, path) {
    path = path || "img/"; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
document.write(imgStr); document.close();
}
