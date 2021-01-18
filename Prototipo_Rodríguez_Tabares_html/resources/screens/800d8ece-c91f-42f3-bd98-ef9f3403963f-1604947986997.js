jQuery("#simulation")
  .on("click", ".s-800d8ece-c91f-42f3-bd98-ef9f3403963f .click", function(event, data) {
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_1 span": {
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
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_1 span": {
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
                    "target": "screens/4abcf49f-6541-44eb-9065-adfc7901e513"
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
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2 span": {
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
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#FBFBFB"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },{
                      "datatype": "variable",
                      "element": "Apellidos"
                    } ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_3",
                      "property": "jimGetValue"
                    },{
                      "datatype": "variable",
                      "element": "Dirección de correo"
                    } ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },{
                    "datatype": "variable",
                    "element": "Fecha de nacimiento"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Apellidos" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Dirección de correo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_3",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Fecha de nacimiento" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ]
                  },
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_9 span": {
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
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-800d8ece-c91f-42f3-bd98-ef9f3403963f #s-Paragraph_9 span": {
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
                    "target": "screens/b834f119-fdbd-4c88-a5b0-8bf8d659317f"
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
  .on("pageload", ".s-800d8ece-c91f-42f3-bd98-ef9f3403963f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Fecha de nacimiento"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Contraseña"
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Dirección de correo"
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Apellidos"
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre de usuario"
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
    } else if(jFirer.is("#s-Paragraph_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
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