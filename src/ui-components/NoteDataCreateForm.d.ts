/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteDataCreateFormInputValues = {
    title?: string;
    bodytext?: string;
};
export declare type NoteDataCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    bodytext?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteDataCreateFormOverridesProps = {
    NoteDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    bodytext?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteDataCreateFormProps = React.PropsWithChildren<{
    overrides?: NoteDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoteDataCreateFormInputValues) => NoteDataCreateFormInputValues;
    onSuccess?: (fields: NoteDataCreateFormInputValues) => void;
    onError?: (fields: NoteDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteDataCreateFormInputValues) => NoteDataCreateFormInputValues;
    onValidate?: NoteDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function NoteDataCreateForm(props: NoteDataCreateFormProps): React.ReactElement;
