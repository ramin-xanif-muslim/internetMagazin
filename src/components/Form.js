import React, { Component } from 'react';
// берем компонент поля (Field) и провайдер для формы (reduxForm)
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    render(){
        // по умолчанию handleSubmit принимает функцию обработчик
        // reset скидывает значения до значений, заданных во время инициализации
        // в данном случае до undefined, так как значение не задано
        const {handleSubmit, reset} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit(submit)}>
                {/* принимает имя поля, тип и остальные свойства, которые расмотрим позже*/}
                <Field name="title" component="input" type="text"/>
                <Field name="text" component="input" type="text"/>
                <div>
                    <button type="button" onClick={reset}>Очистить форму</button>
                    <button type="submit">Отправить форму</button>
                </div>
            </form>
        );
    }
}
Form = reduxForm({
    form: 'post', // имя формы в state (state.form.post)
})(Form);

export default Form;