import delve from "dlv";
import React, {useState} from "react";
import {Form} from "@/components/form";

export function widgetOrder(
    {
        data
    }) {

    const titleForm = delve(data, "form.titleForm");
    return (
        <section className="book">
            <div className="container">
                <div className="book__wrap bt">
                    <h2 className="book__title title">{titleForm ?? ''}</h2>
                    <Form
                        inputs={data.input ?? []}
                        button={data.button ?? {}}
                        action={'/'}
                    />
                </div>
            </div>
        </section>
    )
}

