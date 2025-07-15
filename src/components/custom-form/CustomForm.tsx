import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { ReactNode } from "react";
import { DefaultValues, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import type { ZodSchema } from "zod";

interface Props<T extends FieldValues>{
    children: ReactNode,
    method: SubmitHandler<T>,
    schema: ZodSchema<T>,
    btnTitle: string,
    defaultValues: DefaultValues<T>,
    loading?: boolean,
    cancelBtn?: boolean,
    cancelBtnAction?: () => void
}

export const CustomForm = <T extends FieldValues>({ children, method, schema, btnTitle, defaultValues, loading, cancelBtn, cancelBtnAction }: Props<T>) => {

    const { control, handleSubmit, formState: { errors } } = useForm<T>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
        defaultValues: defaultValues,
    })

    const enhancedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const name = (child.props as { name: keyof T }).name;
            return React.cloneElement(child, {
                control,
                error: errors[name]
            } as Partial<typeof child.props>);
        }
        return child;
    });
    

return (
    <form onSubmit={handleSubmit(method)} className="d-flex flex-column gap-2">
        <div className="row mt-1">
            {enhancedChildren && React.Children.map(enhancedChildren, (child, index) => (
                <div className="col-12 mb-3" key={index}>
                    {child}
                </div>
            ))}
        </div>
        <div className="row mt-3 g-2">
            {cancelBtn && (
                <div className="col-4">
                    <Button
                        type="button"
                        className="w-100"
                        onClick={cancelBtnAction}
                    >
                        Cancelar
                    </Button>
                </div>
            )}
            <div className={cancelBtn ? "col-8" : "col-12"}>
                <Button
                    type="submit"
                    className="w-100"
                    disabled={loading}
                    variant="contained"
                >
                    {btnTitle}
                </Button>
            </div>
        </div>
    </form>
);

};
