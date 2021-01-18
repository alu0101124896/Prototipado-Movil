jQuery("#simulation")
  .on("click", ".s-723843ee-852e-4f59-852a-f6b537549281 .click", function(event, data) {
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
                    "#s-723843ee-852e-4f59-852a-f6b537549281 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-723843ee-852e-4f59-852a-f6b537549281 #s-Paragraph_1 span": {
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
                    "#s-723843ee-852e-4f59-852a-f6b537549281 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-723843ee-852e-4f59-852a-f6b537549281 #s-Paragraph_1 span": {
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
  });