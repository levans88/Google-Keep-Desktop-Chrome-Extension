// Google Keep Desktop Extension

// No need to check if the document has loaded. 
// By default, Chrome injects content scripts after the DOM is complete.

// Fix container height so space between elements is recovered
//$(".gkA7Yd-sKfxWe.ma6Yeb-r8s4j-gkA7Yd div").first().css("height", "auto");

// Setup
//var os = new OnScreen();


// Initial hide operations

$( ".IZ65Hb-n0tgWb.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).hide();
$( ".IZ65Hb-n0tgWb.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-yePe5c" ).hide();
$( ".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).hide();

$( ".IZ65Hb-n0tgWb.di8rgd-r4nke.hSRGPd-KNkArd-YuD1xf.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).show();

//$( ".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).show();

$( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd" ).show();
//$( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd .notranslate.IZ65Hb-YPqjbf.h1U9Be-YPqjbf" ).hide()
//$( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd .notranslate.IZ65Hb-YPqjbf.h1U9Be-YPqjbf" ).find("a").show();

// Hide any remaining labels
$( ".IZ65Hb-x00ATb").hide();

// Standardize size of images and height of list items
$( ".hSRGPd-e1YmVc-HiaYvf" ).width(56);
$( ".hSRGPd-e1YmVc-HiaYvf" ).height(56);
$( ".hSRGPd-e1YmVc-fmcmS-JNdkSc" ).css("padding", 11);
$( ".hSRGPd-e1YmVc" ).height(56);
$( ".IZ65Hb-TBnied.HLvlvd-h1U9Be" ).height(56);
//$( ".IZ65Hb-s2gQvd" ).height(56);

/*$(window).trigger( "unload" );
$( ".RfDI4d-bN97Pc.ogm-kpc" ).focus();
$(window).trigger( "load" );
$( ".RfDI4d-bN97Pc.ogm-kpc" ).focus();*/



function fixArticleVerticalSpacing() {
  var articles = $(".RNfche");
  //$(articles).css({"border-color": "red", "border-width":"2px", "border-style":"solid"});

  for (var a = 1, len = articles.length; a < len; a++) {
    var previousArticleOffset = $(articles[a]).prev().offset().top;
    console.log("previousArticleOffset: " + previousArticleOffset);

    var currentArticleOffset = $(articles[a]).offset().top;
    console.log("currentArticleOffset: " + currentArticleOffset);

    var currentArticleNewOffset = previousArticleOffset + 100;
    console.log("currentArticleNewOffset: " + currentArticleNewOffset);
    console.log("");

    //var transY = currentArticleOffset - currentArticleNewOffset;
    //console.log("how much to move: " + transY + "\n");

    $(articles[a]).offset({ top: currentArticleNewOffset});

    //$(articles[a]).css('transform', 'translateY(-' + transY + 'px)');
  }
}

//fixArticleVerticalSpacing();

//$(".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").delay( 1000 ).focus();

//os.on('enter', '.Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe', (element) => {
    // makes's the element's text red
    //element.style.color = 'red';
    //console.log(element);
    //$(".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").delay( 1000 ).focus();
//});

// On scroll operations
$( document ).scroll(function() {

  //$(".gkA7Yd-sKfxWe.ma6Yeb-r8s4j-gkA7Yd div").first().css("height", "auto");

  $( ".IZ65Hb-n0tgWb.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).hide();
  $( ".IZ65Hb-n0tgWb.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-yePe5c" ).hide();
  $( ".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).hide();

  $( ".IZ65Hb-n0tgWb.di8rgd-r4nke.hSRGPd-KNkArd-YuD1xf.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).show();

  //$( ".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche .IZ65Hb-TBnied.HLvlvd-h1U9Be .IZ65Hb-s2gQvd" ).show();

  $( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd" ).show();
  //$( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd .notranslate.IZ65Hb-YPqjbf.h1U9Be-YPqjbf" ).hide()
  //$( ".IZ65Hb-hSRGPd-e1YmVc-FCjw3e:not(:has(*))" ).parent().find( ".IZ65Hb-s2gQvd .notranslate.IZ65Hb-YPqjbf.h1U9Be-YPqjbf" ).find("a").show();

  // Hide any remaining labels
  $( ".IZ65Hb-x00ATb").hide();

  // Standardize size of images and height of list items
  $( ".hSRGPd-e1YmVc-HiaYvf" ).width(56);
  $( ".hSRGPd-e1YmVc-HiaYvf" ).height(56);
  $( ".hSRGPd-e1YmVc-fmcmS-JNdkSc" ).css("padding", 11);
  $( ".hSRGPd-e1YmVc" ).height(56);
  $( ".IZ65Hb-TBnied.HLvlvd-h1U9Be" ).height(56);
  //$( ".IZ65Hb-s2gQvd" ).height(56);

/*  $(window).trigger( "unload" );
  $( ".RfDI4d-bN97Pc.ogm-kpc" ).focus();
  $(window).trigger( "load" );
  $( ".RfDI4d-bN97Pc.ogm-kpc" ).focus();*/

  //fixArticleVerticalSpacing();

  //function cornerFocus() {
    $(".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").focus();
  //}

  //var intervalID = setInterval(cornerFocus, 1000);
  //setTimeout(function () { clearInterval(intervalID); }, 3000 );

  
  //os.on('enter', '.Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe', (element) => {
    // makes's the element's text red
    //element.style.color = 'red';
    //console.log(element);
    
    //var topArticleCorner = $(".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").first();
    //previousArticleCorner = $(element).prev();
    //console.log(previousArticleCorner);
    //previousArticleCorner.mouseover();
    //previousArticleCorner.mousedown();

    /*$(element).focus()
    $(element).blur()
    $("body").focus();
    $(element).focus();
    $(element).css("background-color", "red");
    $(element).mouseover();
    $(element).click();*/

    //previousArticleCorner.click();
    //previousArticleCorner.blur();
    //$("body").focus();

    //$(".gkA7Yd-sKfxWe.ma6Yeb-r8s4j-gkA7Yd").addClass("i9yGGd-vrrIBb");
    //$(".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche").addClass("IZ65Hb-Y7yNV-wz35Ed");
    //$(".gkA7Yd-sKfxWe.ma6Yeb-r8s4j-gkA7Yd.i9yGGd-vrrIBb").removeClass("i9yGGd-vrrIBb");
    //$(".IZ65Hb-n0tgWb.di8rgd-r4nke.RNfche.IZ65Hb-Y7yNV-wz35Ed").removeClass("IZ65Hb-Y7yNV-wz35Ed");
  //});

});

/*$(document).on("scrollstop", function() {
  $(".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").blur();
  $("body").focus();
});*/

// - make remaining list items uniform size
// - where to show label? 
// - where to append number?
// - determine new padding/margins
//
// - detect screen width and provide multiple columns if applicable
//    - SHOW A NUMBER NEXT TO EACH LINK (so it's clear what direction their sorted)