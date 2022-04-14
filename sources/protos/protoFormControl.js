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

                const generateMessage = (obj) => {
                    const message = [];
                    for(let key in obj) {
                        message.push(`${key} is ${obj[key]}`);
                    }
                    return message.join('; ');
                }

                webix.message(formControl.isDirty() ? generateMessage(values) : 'Form is empty...');
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
            this.define("elements", formElements);
        },
    }, webix.ui.form );
};

export default protoFormControl;