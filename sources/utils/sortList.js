const sortList = (state) => {
    const list = $$("films_list");

    if( state === 0 ) list.sort("id", "asc");
    if( state === 1 ) list.sort("title", "asc");
    if( state === 2 ) list.sort("title", "desc");
};

export default sortList;