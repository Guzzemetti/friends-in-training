$(document).ready(function() {
    prep_modal();
  });
  
  function prep_modal()
  {
    $(".modal").each(function() {
  
    var element = this;
      var pages = $(this).find('.modal-split');
  
    if (pages.length != 0)
    {
          pages.hide();
          pages.eq(0).show();
  
          var b_button = document.createElement("button");
                  b_button.setAttribute("type","button");
                        b_button.setAttribute("class","btn btn-primary");
                        b_button.setAttribute("style","display: none;");
                        b_button.innerHTML = "Back";
  
          var n_button = document.createElement("button");
                  n_button.setAttribute("type","button");
                        n_button.setAttribute("class","btn btn-primary");
                        n_button.innerHTML = "Next";
  
          $(this).find('.modal-footer').append(b_button).append(n_button);
  
  
          var page_track = 0;
  
          $(n_button).click(function() {
          
          this.blur();
  
              if(page_track == 0)
              {
                  $(b_button).show();
              }
  
              if(page_track == pages.length-2)
              {
                  $(n_button).text("Submit");
              }
  
          if(page_track == pages.length-1)
          {
            $(element).find("form").submit();
          }
  
              if(page_track < pages.length-1)
              {
                  page_track++;
  
                  pages.hide();
                  pages.eq(page_track).show();
              }
  
  
          });
  
          $(b_button).click(function() {
  
              if(page_track == 1)
              {
                  $(b_button).hide();
              }
  
              if(page_track == pages.length-1)
              {
                  $(n_button).text("Next");
              }
  
              if(page_track > 0)
              {
                  page_track--;
  
                  pages.hide();
                  pages.eq(page_track).show();
              }
  
  
          });
  
    }
  
    });
  }