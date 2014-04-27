Ext.define('RedditCatStat.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Info Page',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Info Page'
                },

                html: [
		    "Welcome to Iversity <b>Web Development II</b> Final Project application <br \>",
		    "This simple application, written in Sencha Touch, display amount of UP-votes and DOWN-votes for top 3 posts in Reddit subpage for Cats. Cos we all like cats, and sadly are addicted to Reddit.<br />",
		    "To achieve this goal - AJAX get request is sent to reddit API which responds with JSON file containing all data. Application upon recival of JSON file parse it and visualise selected data.<br /><br />" ,
		    "Here is the link to the subpage <a target='_blank' href=\"http://www.reddit.com/r/cats\">Reddit r/Cats</a>",
                    
                ].join("")
            },
            {
                title: 'r/Cats stats',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Top 3 in r/Cats'
                    },
		    {
                            xtype: 'button',
                            text: 'Reload',
                            ui: 'confirm',
                            handler: function() {
//

Ext.Ajax.request({
        url: 'http://www.reddit.com/r/cats.json?limit=3',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 30000,
        //params: Ext.Object.toQueryString(jsonRequestObject),

        success: function(response, opts) {
            if (response && response.responseText) {
                var jsonObject = Ext.JSON.decode(response.responseText);
                // handle search result
            } else {
                // handle error response
            }
        }, failure: function(response, opts) {
            // handle error response
        }
    });

//

                                
                            }
                    }


                    
                ]
            }
        ]
    }
});
