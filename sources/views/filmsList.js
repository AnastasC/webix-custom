import sortList from "../utils/sortList.js";

const list = {
    view: "list",
    id: "films_list",
    template: "<b>#id#. #title#</b><br>Year: #year# Rank: #rank#",
    type: {
        height: 70,
    },
    url: "./datas/dashboard.js",
    ready: () => {
        const state = $$("sort-button").config.state;

        sortList(state);
    },
};

export default list;