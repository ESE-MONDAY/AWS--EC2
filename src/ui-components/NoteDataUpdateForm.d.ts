/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NoteData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteDataUpdateFormInputValues = {
    title?: string;
    bodytext?: string;
};
export declare type NoteDataUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    bodytext?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteDataUpdateFormOverridesProps = {
    NoteDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    bodytext?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: NoteDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    noteData?: NoteData;
    onSubmit?: (fields: NoteDataUpdateFormInputValues) => NoteDataUpdateFormInputValues;
    onSuccess?: (fields: NoteDataUpdateFormInputValues) => void;
    onError?: (fields: NoteDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteDataUpdateFormInputValues) => NoteDataUpdateFormInputValues;
    onValidate?: NoteDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoteDataUpdateForm(props: NoteDataUpdateFormProps): React.ReactElement;
