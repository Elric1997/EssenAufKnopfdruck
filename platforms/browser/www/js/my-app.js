var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'EssenAufKnopfdruck',
    // App id
    id: 'de.apps.eakd',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ],
    version: "0.1.12.18"
  });
  
  var mainView = app.views.create('.view-main');