$(".select__tabs").click(function() {
    var is_open = $(this).hasClass("open");
    if (is_open) {
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
  });
  
  $(".select__tabs li").click(function() {
  
    var selected_value = $(this).html();
    var first_li = $(".select__tabs li:first-child").html();
  
    $(".select__tabs li:first-child").html(selected_value);
    $(this).html(first_li);
  
  });
  
  $(document).mouseup(function(event) {
  
    var target = event.target;
    var select = $(".select__tabs");
  
    if (!select.is(target) && select.has(target).length === 0) {
      select.removeClass("open");
    }
  
  });

//news
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('activeone');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('activeone');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();