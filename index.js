import list from "./sources/views/filmsList.js";
import toolbar from "./sources/views/filmsToolbar.js";
import protoSortButton from "./sources/protos/protoSortButton.js";
import formControl from "./sources/views/formControl.js";
import protoFormControl from "./sources/protos/protoFormControl.js";

protoSortButton();
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
