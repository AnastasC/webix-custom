import sortList from "../utils/sortList.js";

const toolbar = {
    view: "toolbar",
    id: "films_toolbar",
    height: 50,
    cols: [
        {
            view:"label", 
            label:"Sort list:",
            width: 100,
        },
        {
            view: "sortButton",
            id: "sort-button",
            states: { 
                0: "Off",
                1: "Sort Asc",
                2: "Sort Desc",
            }, 
            state: 0,
            width: 150,
            label: "Off",
            on: {
                onStateChange: (state) => sortList(state),
            },
        },
        { },
    ],
};

export default toolbar;