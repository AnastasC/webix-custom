const protoFormControl = () => {
    webix.protoUI({
        name: "formControl",
        defaults: {
            onCancel: function() {
                webix.confirm({
                    title: "Clear fields?",
                    text: "Do you still want to clear all fields?",
                  }).then(
                      function() {
                        $$(this.id).clear();
                      },
                  );
            },
            onSave: function() {
                const formControl = $$(this.id);
                const values = formControl.getValues();
                const message = Object.entries(values).map( el => `${el[0]} is ${el[1]}`).join('; ');
               
                webix.message(formControl.isDirty() ? message : 'Form is empty...');
                formControl.clear();
            },
        },
        $init: function(config) {
            const { fields } = config;

            if( !fields ) return;

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
            this.config.elements = formElements;
        },
    }, webix.ui.form );
};

export default protoFormControl;
