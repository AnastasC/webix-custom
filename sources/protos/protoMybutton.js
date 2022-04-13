const protoMybutton = () => {
    webix.protoUI({
    name: "mybutton",
    $init: function(config) {
        const styles = ["sort_off", "sort_asc", "sort_desc"];
        let { state, states } = config;

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
    $cssName: "mybutton",
    }, webix.ui.button );
};
export default protoMybutton;