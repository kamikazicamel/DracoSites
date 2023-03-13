/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      sub
      firstName
      middleName
      lastName
      suffix
      nickName
      birthDay
      bsaId
      active
      streetAddress
      city
      state
      zipCode
      homePhone
      workPhone
      cellPhone
      emailAddress
      mailingList
      newsletter
      medFormDate
      emergencyContact1
      emergencyContact1Phone
      emergencyContact2
      emergencyContact2Phone
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        firstName
        middleName
        lastName
        suffix
        nickName
        birthDay
        bsaId
        active
        streetAddress
        city
        state
        zipCode
        homePhone
        workPhone
        cellPhone
        emailAddress
        mailingList
        newsletter
        medFormDate
        emergencyContact1
        emergencyContact1Phone
        emergencyContact2
        emergencyContact2Phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
