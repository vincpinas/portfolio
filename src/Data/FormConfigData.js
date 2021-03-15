const FormConfig = {
    api: `${"../../api/contact/index.php"}`,
    title: 'Contact Me',
    description: 'Write me a message, I\'ll get back to you as soon as possible.',
    successMessage: 'Thank you for your message ❤️',
    errorMessage: 'Please fill in all fields..',
    fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
    },
    fieldsConfig:  [
    { id: "field1", label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , className:'first-name-field'},
    { id: "field2", label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , className:'last-name-field'},
    { id: "field3", label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , className:'email-field'},
    { id: "field4", label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , className:'message-field'}
    ]
}

export default FormConfig