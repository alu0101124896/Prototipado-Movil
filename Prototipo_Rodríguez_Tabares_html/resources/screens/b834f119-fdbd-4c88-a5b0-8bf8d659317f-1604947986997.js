jQuery("#simulation")
  .on("click", ".s-b834f119-fdbd-4c88-a5b0-8bf8d659317f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2d6f27f3-b43d-4dfa-b51c-586da6b4528c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ff5eed5c-22fc-478d-a3dd-21d418aa251e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/723843ee-852e-4f59-852a-f6b537549281"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Image_5 svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b834f119-fdbd-4c88-a5b0-8bf8d659317f #s-Image_5 svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/800d8ece-c91f-42f3-bd98-ef9f3403963f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-b834f119-fdbd-4c88-a5b0-8bf8d659317f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "Bienvenido ",{
                        "action": "jimFirstUpper",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Nombre de usuario"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });