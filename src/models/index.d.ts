import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFormSubmission = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FormSubmission, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly financialPriority: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFormSubmission = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FormSubmission, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly financialPriority: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FormSubmission = LazyLoading extends LazyLoadingDisabled ? EagerFormSubmission : LazyFormSubmission

export declare const FormSubmission: (new (init: ModelInit<FormSubmission>) => FormSubmission) & {
  copyOf(source: FormSubmission, mutator: (draft: MutableModel<FormSubmission>) => MutableModel<FormSubmission> | void): FormSubmission;
}