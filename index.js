import list from "./sources/views/list.js";
import toolbar from "./sources/views/toolbal.js";
import protoMybutton from "./sources/protos/protoMybutton.js";
import formControl from "./sources/views/formControl.js";
import protoFormControl from "./sources/protos/protoFormControl.js";

protoMybutton();
protoFormControl();

webix.ui({
    view: "layout",
    cols: [ 
        {
            rows: [ 
                toolbar,
                list,
            ]
        },
        { 
            rows: [ 
                formControl,
                { },
            ],
        },
    ],
});
