(function(window, undefined) {
  var dictionary = {
    "723843ee-852e-4f59-852a-f6b537549281": "Reservas",
    "b834f119-fdbd-4c88-a5b0-8bf8d659317f": "Espacio Personal",
    "800d8ece-c91f-42f3-bd98-ef9f3403963f": "Perfil de usuario",
    "ff5eed5c-22fc-478d-a3dd-21d418aa251e": "Mi Rutina",
    "4abcf49f-6541-44eb-9065-adfc7901e513": "Despedida",
    "1612b173-bb45-4f4e-b089-56e466a34710": "Crear Usuario",
    "2def46cc-c8ab-451e-8af7-4037698ff242": "Iniciar Sesión",
    "2d6f27f3-b43d-4dfa-b51c-586da6b4528c": "Dietas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Bienvenida",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);