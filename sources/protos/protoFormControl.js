const protoFormControl = () => {
    webix.protoUI({
        name: "formControl",
        defaults: {
            onCancel: () => console.log('cancel'),
            onSave: function() {
                console.log($$(this.id).getValues());
            },
        },
        getValues: function() {
            const values = webix.ui.form.prototype.getValues.apply(this); 

            return values;
        },
        $init: function(config) {
            const { fields } = config;
            const formFields = fields.map( el => (
                {
                    view: "text",
                    label: el,
                    name: el,
                }
            ));

            const formElements = [
                ...formFields,
                {
                    cols: [
                        {
                            view: "button",
                            value: "Cancel",
                            on: {
                                onItemClick:  () => {
                                    this.config.onCancel();
                                },
                            },
                        },
                        { },
                        {
                            view: "button",
                            value: "Save",
                            css: "webix_primary",
                            on: {
                                onItemClick: () => {
                                    this.config.onSave();
                                },
                            },
                        },
                    ]
                },
            ];
            this.define("elements", formElements);
        },
    }, webix.ui.form );
};

export default protoFormControl;