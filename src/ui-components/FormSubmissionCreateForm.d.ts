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
export declare type FormSubmissionCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    financialPriority?: string;
};
export declare type FormSubmissionCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    financialPriority?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormSubmissionCreateFormOverridesProps = {
    FormSubmissionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    financialPriority?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormSubmissionCreateFormProps = React.PropsWithChildren<{
    overrides?: FormSubmissionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormSubmissionCreateFormInputValues) => FormSubmissionCreateFormInputValues;
    onSuccess?: (fields: FormSubmissionCreateFormInputValues) => void;
    onError?: (fields: FormSubmissionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormSubmissionCreateFormInputValues) => FormSubmissionCreateFormInputValues;
    onValidate?: FormSubmissionCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormSubmissionCreateForm(props: FormSubmissionCreateFormProps): React.ReactElement;
