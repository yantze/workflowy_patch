chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('document_view.html', {
     // 'id' serves two purposes: first, it prevents you from opening
     // more than one instance of the app (which doesn't work right
     // now); second it will cause the position/dimensions of the
     // window to be restored when it's reopened.
    'id': 'main',
    'bounds': {
	'width': 740,
	'height': 800
    },
    'minWidth': 620, // This is the min-width of the top bar
    'minHeight': 475
  });
});
