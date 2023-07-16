import sendForm from "@/lib/api/api";
import delve from "dlv";
import {validForm} from "@/lib/validate";
import React, {useState} from "react";
import notifications from '@/styles/notific.module.css';



export function Form({inputs, button, handleSent, action}) {
    const [textNotific, setErrorNotific] = useState(null);

    function handlOnClick(e) {
        let formInput = e.target.closest(".form-input");
        if(!formInput) return
        const form
            = e.target.closest("form");
        let formInputs = form.querySelectorAll(".form-input");
        formInputs.forEach((element) => {
            element.classList.remove("click-input");
        });
        formInput.classList.add("click-input");
    }


    const renderedInputs = inputs.map((input, index) => {
        return (
            <Input dataInput={input}  hendleInput={handlOnClick}/>
        )
    })

    return (
        <form method="post" action={action} className="book__form form">
            <div className="form__container">
                {renderedInputs}
                <div className="form__approval">
                    <input
                        id="form__c1"
                        className="checkbox__input"
                        type="checkbox"
                        required
                        value="1"
                    />
                    <label htmlFor="form__c1" className="checkbox__label">
                    <span className="checkbox__text"
                    >Я согласен на обработку
                      <strong>персональных данных</strong></span
                    >
                    </label>
                </div>
                <div className="btn-wrap btn-outer-outline">
                    <button className="book__btn btn" type="submit" id={button.url ?? ''}>
                    <span className="book__btn-icon btn-icon"
                    ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 0C4.48603 0 0 4.48603 0 10C0 15.514 4.48603 20 10 20C15.514 20 20 15.514 20 10C20 4.48603 15.514 0 10 0ZM10 1.5C14.7033 1.5 18.5 5.2967 18.5 10C18.5 14.7033 14.7033 18.5 10 18.5C5.2967 18.5 1.5 14.7033 1.5 10C1.5 5.2967 5.2967 1.5 10 1.5ZM13.7353 6.99317C13.5406 6.99884 13.3556 7.0801 13.2197 7.21973L8.75 11.6895L6.78028 9.71973C6.59216 9.52381 6.31283 9.44488 6.05 9.5134C5.78718 9.58192 5.58192 9.78718 5.5134 10.05C5.44488 10.3128 5.5238 10.5922 5.71973 10.7803L8.21973 13.2803C8.51263 13.5731 8.98738 13.5731 9.28028 13.2803L14.2803 8.28028C14.5017 8.0646 14.5682 7.73516 14.4477 7.4505C14.3272 7.16584 14.0443 6.98427 13.7353 6.99317Z"
                            fill="#A7997B"
                        />
                      </svg>
                    </span>
                        <span>{button.label ?? ''}</span>
                    </button>
                    <div className="btn-top-line"></div>
                    <div className="btn-right-line"></div>
                    <div className="btn-bottom-line"></div>
                    <div className="btn-left-line"></div>
                </div>
            </div>
        </form>
    )
}

function Input({ dataInput, hendleInput }) {
    let nameInput = delve(dataInput, "nameInput");

    return (
        <div className={`input__${nameInput ?? 'name'} form-input `} onClick={hendleInput}>
            <input
                id={nameInput}
                className="input"
                name={nameInput}
                placeholder={dataInput.placeholder}
                type="text"
                maxLength="20"
                required={dataInput.required}
            />
            <label className="form-label">{dataInput.label ?? ''}</label>
        </div>
    )
}

function Notifications({text}) {
    return (
        <ul className={`${notifications.position} ${notifications.animation} ${notifications.after}`}>
            <li className={notifications.notifications_item}>
                <i className="material-icons">{text ?? '...'}</i>
            </li>
        </ul>
    )
}