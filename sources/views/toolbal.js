const toolbar = {
    view: "toolbar",
    height: 50,
    cols: [
        {
            view:"label", 
            label:"Sort list:",
            width: 100,
        },
        {
            view: "mybutton",
            id: "mybutton",
            states: { 
                0: "Off",
                1: "Sort Asc",
                2: "Sort Desc",
            }, 
            state: 0,
            width: 150,
            label: "Off",
            on: {
                onStateChange: (state) => {
                    const list = $$("films_list");

                    if( state === 0 ) list.sort("id", "asc");
                    if( state === 1 ) list.sort("title", "asc");
                    if( state === 2 ) list.sort("title", "desc");
                },
            },
        },
        { },
    ],
};

export default toolbar;