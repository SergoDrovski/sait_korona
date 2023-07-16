export function SerializeForm(form) {
    const formData = new FormData(form)
    let object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    return object;
}

export function validForm(formData) {
    let errors = validation.validForm(formData);
    let status = errors.length === 0
    return {
        data: SerializeForm(formData),
        status,
        errors
    }
}

//{name: '', phone: ''}

const validation =  {
    wrapper: null,

    //Метод контрольной валидации перед отправкой
    validForm(formData) {
        let res = []
        this.wrapper = formData.querySelectorAll('.form-item');
        this.wrapper.forEach(el => {
            let input = el.querySelector('input') || el.querySelector('textarea');
            if(input.required) {
                let method = 'Valid' + input.name[0].toUpperCase() + input.name.slice(1)
                if (method in this) {
                    let item = this[method](input);
                    item !== null ?  res.push(item) : false;
                }
            }
        })
        return res
    },

    //МЕТОДЫ ПРОВЕРКИ (СОДЕРЖАТ ПРАВИЛА ПРОВЕРКИ)
    ValidName(input) {

        if (input.value.replace(/\s/g, '') === "") {
            return {
                field: input.name,
                textError: `Поле не должно быть пустым`
            }
        }
        return null
    },

    ValidText(input) {
        if (input.value.replace(/\s/g, '') === "") {
            console.log('ok')
            return {
                field: input.name,
                textError: `Поле не должно быть пустым`
            }
        }
        if (input.value.length > 800) {
            return {
                field: input.name,
                textError: `Слишком длинный текст`
            }
        }
        return null
    },

    ValidPhone(input) {
        // проверка на пустоту
        if (input.value.replace(/\s/g, '') === "") {
            return {
                field: input.name,
                textError: `Поле не должно быть пустым`
            }
        }
        // ввод только цифр
        const regex = /([0-9]|[()|-]|\s){1,}/g;
        let match = input.value.match(regex)
        if (!match) {
            return {
                field: input.name,
                textError: `Поле может содержать только цифры`
            }
        }
        // Проверка длинны телефона в соответсвии плейсхолдера
        if (input.value.replace(/([()|-]|\s)/g, '').length > 12) {
            return {
                field: input.name,
                textError: `Номер телефона cлишком длинный`
            }
        }
        if (input.value.replace(/([()|-]|\s)/g, '').length < 7) {
            return {
                field: input.name,
                textError: `Номер телефона cлишком короткий`
            }
        }
        return null
    }
}
