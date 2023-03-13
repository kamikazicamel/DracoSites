import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub?: string | null;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly suffix?: string | null;
  readonly nickName?: string | null;
  readonly birthDay?: string | null;
  readonly bsaId?: string | null;
  readonly active?: boolean | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zipCode?: string | null;
  readonly homePhone?: string | null;
  readonly workPhone?: string | null;
  readonly cellPhone?: string | null;
  readonly emailAddress?: string | null;
  readonly mailingList?: boolean | null;
  readonly newsletter?: boolean | null;
  readonly medFormDate?: string | null;
  readonly emergencyContact1?: string | null;
  readonly emergencyContact1Phone?: string | null;
  readonly emergencyContact2?: string | null;
  readonly emergencyContact2Phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub?: string | null;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly suffix?: string | null;
  readonly nickName?: string | null;
  readonly birthDay?: string | null;
  readonly bsaId?: string | null;
  readonly active?: boolean | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zipCode?: string | null;
  readonly homePhone?: string | null;
  readonly workPhone?: string | null;
  readonly cellPhone?: string | null;
  readonly emailAddress?: string | null;
  readonly mailingList?: boolean | null;
  readonly newsletter?: boolean | null;
  readonly medFormDate?: string | null;
  readonly emergencyContact1?: string | null;
  readonly emergencyContact1Phone?: string | null;
  readonly emergencyContact2?: string | null;
  readonly emergencyContact2Phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member>) => Member) & {
  copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}