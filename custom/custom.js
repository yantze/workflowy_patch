/**
 * author: yantze
 * date: 4/26/17
 */

/**
  * Base
  */
window.localStorage = chrome.storage.local


/**
 * from: https://gist.github.com/Fusion/2413cbb889a6ae9f5191
 * @constructor
 */
function expandImgTags() {
    var rootNode = document.querySelector('.mainTreeRoot');
    var txtWalker   = document.createTreeWalker (
        rootNode,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                if (node.nodeValue.trim() )
                    return NodeFilter.FILTER_ACCEPT;
                return NodeFilter.FILTER_SKIP;
            }
        },
        false
    );

    var deleteList = [];
    var txtNode = null;
    while (txtNode  = txtWalker.nextNode () ) {
        if(null != txtNode.nodeValue.match(/.+\.(jpg|png|gif|svg)/gi)) {
            var newImgNode = document.createElement('img');
            newImgNode.src = txtNode.nodeValue;
            newImgNode.style.width = '200px';
            txtNode.parentNode.insertBefore(newImgNode, txtNode);
            var newTxtNode = document.createElement('br');
            txtNode.parentNode.insertBefore(newTxtNode, txtNode);
            deleteList.push(txtNode);
        }
    }
}

function focusLastNode() {
    $(".name:last").children(".content").focus()
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function toggleMarkdown(isSet) {
    // if (isSet === undefined) {
    //     window.showMarkdown != window.showMarkdown;
    //     isSet = window.showMarkdown;
    // } else {
    //     window.showMarkdown = isSet;
    // }
    if (isSet) {
        $('.mainTreeRoot').addClass('markdown-style');
    } else {
        $('.mainTreeRoot').removeClass('markdown-style');
    }
}

function changeTheme() {
    window.themeIdx = !!window.themeIdx ? window.themeIdx : 0;
    var themeList = [
        'none',
        'porter'
    ];

    // create style dom
    var cssId = 'myCss';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '';
        link.media = 'all';
        head.appendChild(link);
    }

    ++window.themeIdx;
    window.themeIdx %= themeList.length;
    if (window.themeIdx === 0) {
        document.getElementById('myCss').href = "";
    } else {
        document.getElementById('myCss').href = "./custom/theme-"+ themeList[window.themeIdx]+".css";
    }
}


function copyToClipbard(value) {
    // for modern browser
    if (document.execCommand) {
        var copyFrom = $('<textarea/>');
        copyFrom.text(value);
        $('body').append(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        copyFrom.remove();
    }
    // for ie
    if (window.clipboardData) {
        window.clipboardData.setData('text', value);
    }
}

/**
 * Event
 */

$('body').delegate('.contentTag','click', function(event) {
    event.preventDefault();
    if ($(this).attr('title') === "Filter #md") {
      toggleMarkdown(true);
    } else if ($(this).attr('title') === "Filter #mdd") {
      toggleMarkdown(false);
    }
}).delegate('.selected>.notes .content', 'keyup', function(event) {
    event.preventDefault();
    var noteHasMd = $(this).find('.contentTag[title$="md"]').length > 0;
    toggleMarkdown(noteHasMd);
}).delegate('.selected>.name .content', 'keyup', function(event) {
    event.preventDefault();
    var titleHasMd = $(this).find('.contentTag[title$="md"]').length > 0;
    toggleMarkdown(titleHasMd);
});


document.addEventListener('keyup', function(event) {
    
    if (!event.ctrlKey) return false;
    switch(event.keyCode) {
        case 73: // ctrl + i
            event.preventDefault();
            expandImgTags();
            break;
        case 84: // ctrl + t
            event.preventDefault();
            changeTheme();
            break;
        case 77: // m
            // console.log('show markdown');
            event.preventDefault();
            toggleMarkdown(!$('.mainTreeRoot').hasClass('markdown-style'));
            break;
        case 80: // ctrl + shift + p
            // console.log('print page');
            if (event.shiftKey) {
                event.preventDefault();
                print();
            }
            break;
        case 67: // ctrl + c
            event.preventDefault();
            var noText = window.getSelection().isCollapsed;
            if (noText) {
                var wfId = document.activeElement.parentElement.parentElement.getAttribute('projectid').split('-')[4];
                var wfOrigin = 'https://workflowy.com/#/';
                copyToClipbard(wfOrigin + wfId);
            }
            break;
        case 69: // ctrl + e
            event.preventDefault();
            focusLastNode();
            break;
    }
});
