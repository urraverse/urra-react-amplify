/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FormSubmission } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormSubmissionUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    financialPriority?: string;
};
export declare type FormSubmissionUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    financialPriority?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormSubmissionUpdateFormOverridesProps = {
    FormSubmissionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    financialPriority?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormSubmissionUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormSubmissionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    formSubmission?: FormSubmission;
    onSubmit?: (fields: FormSubmissionUpdateFormInputValues) => FormSubmissionUpdateFormInputValues;
    onSuccess?: (fields: FormSubmissionUpdateFormInputValues) => void;
    onError?: (fields: FormSubmissionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormSubmissionUpdateFormInputValues) => FormSubmissionUpdateFormInputValues;
    onValidate?: FormSubmissionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormSubmissionUpdateForm(props: FormSubmissionUpdateFormProps): React.ReactElement;
