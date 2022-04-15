const protoSortButton = () => {
    webix.protoUI({
    name: "sortButton",
    $init: function(config) {
        const styles = ["sort-button--sort_off", "sort-button--sort_asc", "sort-button--sort_desc"];
        let { state = 0, states } = config;

        webix.html.addCss(this.getNode(), styles[state]);

        if( !states ) return;

        this.attachEvent("onItemClick", () => {
            webix.html.removeCss(this.getNode(), styles[state]);
            state = (state === 2) ? 0 : state + 1;
            webix.html.addCss(this.getNode(), styles[state]);
            this.define({
                state,
                label: states[state],
            });
            this.refresh();
            this.callEvent("onStateChange", [state]);
        })
    },
    $cssName: "sort-button",
    }, webix.ui.button );
};
export default protoSortButton;