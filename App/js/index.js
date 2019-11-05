// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setDirtyMark(false)
                .setLeft("9.166666666666666em")
                .setTop("6.666666666666667em")
                .setWidth("28.833333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Link")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("9.166666666666666em")
                .setTop("10em")
                .setWidth("27.166666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Alias")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("16.666666666666668em")
                .setWidth("47.166666666666664em")
                .setHeight("12.5em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setDirtyMark(false)
                .setLeft("17.5em")
                .setTop("12.5em")
                .setWidth("18.75em")
                .setHeight("2.8333333333333335em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_input7",
                        "args":[
                            "{page.xui_ui_input7.setUIValue()}",
                            undefined,
                            "hello"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});