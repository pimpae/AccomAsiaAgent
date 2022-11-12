document.addEventListener("DOMContentLoaded", function (event) {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var btnShare = document.querySelectorAll(".share-content");
    var InputShare = document.querySelectorAll(".input-copylink");

    if (btnShare && btnShare.length > 0) {
        for (let i = 0; i < btnShare.length; i++) {
            btnShare[i].addEventListener("click", function () {
                copyLink(btnShare[i], InputShare[i], i);
            });
        }
    }

    var btnRent = document.getElementById("group-rent");
    if (btnRent) {
        var groupRent = document.querySelectorAll(".btn-rent")
        for (let i = 0; i < groupRent.length; i++) {

            groupRent[i].addEventListener("click", function () {
                var rent = groupRent[i].classList.contains("rented");
                var duration = document.getElementById("rent-duration");
                if (rent) {
                    duration.style.display = "block";
                }
                else {
                    duration.style.display = "none";
                }
            });

        }
        selectedGroupRent(btnRent)
    }

    var btnSale = document.getElementById("group-sale");
    if (btnSale) {
        selectedGroupSale(btnSale)
    }

    var tabPreviewList = document.querySelectorAll(".item-preview");
    if (tabPreviewList && tabPreviewList.length > 0) {
        for (let i = 0; i < tabPreviewList.length; i++) {
            tabPreviewList[i].addEventListener("click", swapTabPreview);
        }
    }

    var tabListGrid = document.querySelectorAll(".btn-list-grid");
    if (tabListGrid && tabListGrid.length > 0) {
        for (let i = 0; i < tabListGrid.length; i++) {
            tabListGrid[i].addEventListener("click", function () {
                swapTabListGird(tabListGrid[i])
            });
        }
    }

    var iconArrowList = document.querySelectorAll(".icon-rotate");
    if(iconArrowList && iconArrowList.length > 0) {
        for (let i = 0; i < iconArrowList.length; i++) {
            iconArrowList[i].addEventListener("click", function(){
                rotateArrow(iconArrowList[i])
            });
        }
    }
    var btnHighRowList = document.querySelectorAll(".btn-hide-row");
    if(btnHighRowList && btnHighRowList.length > 0) {
        for (let i = 0; i < btnHighRowList.length; i++) {
            btnHighRowList[i].addEventListener("click", function(){
                rotateArrow(iconArrowList[i])
            });
        }
    }

    var characterList = document.querySelectorAll(".characters");
    var characterOtherList = document.querySelectorAll(".charater-other");
    if(characterList && characterList.length > 0) {
        for (let i = 0; i < characterList.length; i++) {
            characterList[i].addEventListener("mouseover", function(){               
                if(characterList[i].offsetHeight >= 200) {
                    characterList[i].classList.add("more-charater");
                    var offset = characterList[i].getBoundingClientRect();
                    characterOtherList[i].style.top =  offset.top + "px"
                }
                else {
                    var isMore = characterList[i].classList.contains("more-charater");
                    if(isMore) characterList[i].classList.remove("more-charater");
                }
            
            });
        }
    }

    $("#startDate").datepicker();
    $("#endDate").datepicker();

});

$(window).scroll(function () {
    setTimeout(function () {
        AncorControlMatches();
    });
        AncorControlMatches();
});

$(document).ready(function () {
    setTimeout(function () {
        AncorControlMatches();
        $(window).trigger('resize');
    });
});

function AncorControlMatches() {
    topPos = Math.max(0, $("#the-table").offset().top - $(this).scrollTop());
    if (topPos == 0) {
        $("#the-table thead").css("top", (topPos+140) + "px");
        $("#the-table thead").css("position", "fixed");
        $("#the-table thead").css("z-index", "50");
        $("#the-table thead").css("background", "#CED4DA");
        $("#the-table thead tr").css("color", "#0E2338");
        // $("#the-table thead tr th").css("border-bottom-color", "#0E2338");
    } else {
        $("#the-table thead").removeAttr("style");
        $("#the-table thead tr").removeAttr("style");
        // $("#the-table thead tr th").removeAttr("style");
    }
}

function rotateArrow (icon) {
    var isRotate = icon.style.transform;
    if(isRotate == "rotate(-180deg)"){
        icon.style.transform = "rotate(0deg)";
    }
    else {
        icon.style.transform = "rotate(-180deg)";
    }
}

function selectedGroupRent(group) {
    var childrens = group.children
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].addEventListener("click", function () {
            switch (i + 1) {
                case 1:
                    childrens[0].classList.add("btn-DDE");
                    childrens[1].classList.remove("btn-00B");
                    childrens[2].classList.remove("btn-A4A");
                    break;
                case 2:
                    childrens[0].classList.remove("btn-DDE");
                    childrens[1].classList.add("btn-00B");
                    childrens[2].classList.remove("btn-A4A");
                    break;
                case 3:
                    childrens[0].classList.remove("btn-DDE");
                    childrens[1].classList.remove("btn-00B");
                    childrens[2].classList.add("btn-A4A");
                    break;
            }
        });
    }
}

function selectedGroupSale(group) {
    var childrens = group.children
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].addEventListener("click", function () {
            switch (i + 1) {
                case 1:
                    childrens[0].classList.add("btn-E0");
                    childrens[1].classList.remove("btn-F1A");
                    childrens[2].classList.remove("btn-A4A");
                    break;
                case 2:
                    childrens[0].classList.remove("btn-E0");
                    childrens[1].classList.add("btn-F1A");
                    childrens[2].classList.remove("btn-A4A");
                    break;
                case 3:
                    childrens[0].classList.remove("btn-E0");
                    childrens[1].classList.remove("btn-F1A");
                    childrens[2].classList.add("btn-A4A");
                    break;
            }
        });
    }
}

function copyLink(btn, input) {
    var copyText = input;
    navigator.clipboard.writeText(copyText.value);

    tooltip = new bootstrap.Tooltip(btn);
    tooltip.show();
    setTimeout(function () {
        tooltip.dispose();
        var tips = document.querySelectorAll(".tooltip");
        for (let r = 0; r < tips.length; r++) {
            tips[r].remove();
        }
    }, 2000);

}

function swapTabPreview(e) {
    var tab = e.target
    var isActive = document.getElementsByClassName(" active-preview")[0];
    if (isActive) {
        isActive.className = isActive.className.replace(" active-preview", "")
    }
    tab.classList.add("active-preview");
}

function swapTabListGird(tab) {
    var isActive = document.getElementsByClassName(" active-list-grid")[0];
    if (isActive) {
        isActive.className = isActive.className.replace(" active-list-grid", "")
    }
    tab.classList.add("active-list-grid");
}