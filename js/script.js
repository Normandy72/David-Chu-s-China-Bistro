// hide burger menu on blur
$(function(){
    $("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

// dinamic loading of main content
(function(global){
    var dc = {};            //dc = David Chu's
    var homeHtml = "snippets/home-snippet.html";
    
    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html; 
    };

    // Show loading icon inside element identified by 'selector'
    var showLoading = function(selector){
        var html = "<div class='text-center'>";
        html += "<img scr='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function(event){
        // On first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            },
            false);         // false - because we don't want JSON format
    });
    
    global.$dc = dc;  
})(window);