/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAuthor: OnCreateAuthorSubscription;
  onUpdateAuthor: OnUpdateAuthorSubscription;
  onDeleteAuthor: OnDeleteAuthorSubscription;
  onCreateBook: OnCreateBookSubscription;
  onUpdateBook: OnUpdateBookSubscription;
  onDeleteBook: OnDeleteBookSubscription;
};

export type CreateAuthorInput = {
  id?: string | null;
  name: string;
};

export type ModelAuthorConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAuthorConditionInput | null> | null;
  or?: Array<ModelAuthorConditionInput | null> | null;
  not?: ModelAuthorConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Author = {
  __typename: "Author";
  id: string;
  name: string;
  books?: ModelBookConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection";
  items: Array<Book | null>;
  nextToken?: string | null;
};

export type Book = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: Author | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type UpdateAuthorInput = {
  id: string;
  name?: string | null;
};

export type DeleteAuthorInput = {
  id: string;
};

export type CreateBookInput = {
  id?: string | null;
  title: string;
  genre: string;
  authorBooksId?: string | null;
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null;
  genre?: ModelStringInput | null;
  and?: Array<ModelBookConditionInput | null> | null;
  or?: Array<ModelBookConditionInput | null> | null;
  not?: ModelBookConditionInput | null;
  authorBooksId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBookInput = {
  id: string;
  title?: string | null;
  genre?: string | null;
  authorBooksId?: string | null;
};

export type DeleteBookInput = {
  id: string;
};

export type SearchableAuthorFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableAuthorFilterInput | null> | null;
  or?: Array<SearchableAuthorFilterInput | null> | null;
  not?: SearchableAuthorFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableAuthorSortInput = {
  field?: SearchableAuthorSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableAuthorSortableFields {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableAuthorAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableAuthorAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableAuthorAggregateField {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableAuthorConnection = {
  __typename: "SearchableAuthorConnection";
  items: Array<Author | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type SearchableBookFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  genre?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  authorBooksId?: SearchableIDFilterInput | null;
  and?: Array<SearchableBookFilterInput | null> | null;
  or?: Array<SearchableBookFilterInput | null> | null;
  not?: SearchableBookFilterInput | null;
};

export type SearchableBookSortInput = {
  field?: SearchableBookSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableBookSortableFields {
  id = "id",
  title = "title",
  genre = "genre",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  authorBooksId = "authorBooksId"
}

export type SearchableBookAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableBookAggregateField;
};

export enum SearchableBookAggregateField {
  id = "id",
  title = "title",
  genre = "genre",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  authorBooksId = "authorBooksId"
}

export type SearchableBookConnection = {
  __typename: "SearchableBookConnection";
  items: Array<Book | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAuthorFilterInput | null> | null;
  or?: Array<ModelAuthorFilterInput | null> | null;
  not?: ModelAuthorFilterInput | null;
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection";
  items: Array<Author | null>;
  nextToken?: string | null;
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  genre?: ModelStringInput | null;
  and?: Array<ModelBookFilterInput | null> | null;
  or?: Array<ModelBookFilterInput | null> | null;
  not?: ModelBookFilterInput | null;
  authorBooksId?: ModelIDInput | null;
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAuthorFilterInput | null> | null;
  or?: Array<ModelSubscriptionAuthorFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  genre?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBookFilterInput | null> | null;
  or?: Array<ModelSubscriptionBookFilterInput | null> | null;
};

export type CreateAuthorMutation = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAuthorMutation = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAuthorMutation = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookMutation = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type UpdateBookMutation = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type DeleteBookMutation = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type SearchAuthorsQuery = {
  __typename: "SearchableAuthorConnection";
  items: Array<{
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      items: Array<{
        __typename: "Book"
        id: string
        title: string
        genre: string
      } | null>
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
    | (
      | {
        __typename: "SearchableAggregateScalarResult";
        value: number;
      }
      | {
        __typename: "SearchableAggregateBucketResult";
        buckets?: Array<{
          __typename: string;
          key: string;
          doc_count: number;
        } | null> | null;
      }
    )
    | null;
  } | null>;
};

export type SearchBooksQuery = {
  __typename: "SearchableBookConnection";
  items: Array<{
    __typename: "Book";
    id: string;
    title: string;
    genre: string;
    author?: {
      __typename: "Author";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    authorBooksId?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
    | (
      | {
        __typename: "SearchableAggregateScalarResult";
        value: number;
      }
      | {
        __typename: "SearchableAggregateBucketResult";
        buckets?: Array<{
          __typename: string;
          key: string;
          doc_count: number;
        } | null> | null;
      }
    )
    | null;
  } | null>;
};

export type GetAuthorQuery = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAuthorsQuery = {
  __typename: "ModelAuthorConnection";
  items: Array<{
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetBookQuery = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type ListBooksQuery = {
  __typename: "ModelBookConnection";
  items: Array<{
    __typename: "Book";
    id: string;
    title: string;
    genre: string;
    author?: {
      __typename: "Author";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    authorBooksId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateAuthorSubscription = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAuthorSubscription = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAuthorSubscription = {
  __typename: "Author";
  id: string;
  name: string;
  books?: {
    __typename: "ModelBookConnection";
    items: Array<{
      __typename: "Book";
      id: string;
      title: string;
      genre: string;
      createdAt: string;
      updatedAt: string;
      authorBooksId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBookSubscription = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type OnUpdateBookSubscription = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

export type OnDeleteBookSubscription = {
  __typename: "Book";
  id: string;
  title: string;
  genre: string;
  author?: {
    __typename: "Author";
    id: string;
    name: string;
    books?: {
      __typename: "ModelBookConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  authorBooksId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAuthor(
    input: CreateAuthorInput,
    condition?: ModelAuthorConditionInput
  ): Promise<CreateAuthorMutation> {
    const statement = `mutation CreateAuthor($input: CreateAuthorInput!, $condition: ModelAuthorConditionInput) {
        createAuthor(input: $input, condition: $condition) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAuthorMutation>response.data.createAuthor;
  }
  async UpdateAuthor(
    input: UpdateAuthorInput,
    condition?: ModelAuthorConditionInput
  ): Promise<UpdateAuthorMutation> {
    const statement = `mutation UpdateAuthor($input: UpdateAuthorInput!, $condition: ModelAuthorConditionInput) {
        updateAuthor(input: $input, condition: $condition) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAuthorMutation>response.data.updateAuthor;
  }
  async DeleteAuthor(
    input: DeleteAuthorInput,
    condition?: ModelAuthorConditionInput
  ): Promise<DeleteAuthorMutation> {
    const statement = `mutation DeleteAuthor($input: DeleteAuthorInput!, $condition: ModelAuthorConditionInput) {
        deleteAuthor(input: $input, condition: $condition) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAuthorMutation>response.data.deleteAuthor;
  }
  async CreateBook(
    input: CreateBookInput,
    condition?: ModelBookConditionInput
  ): Promise<CreateBookMutation> {
    const statement = `mutation CreateBook($input: CreateBookInput!, $condition: ModelBookConditionInput) {
        createBook(input: $input, condition: $condition) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookMutation>response.data.createBook;
  }
  async UpdateBook(
    input: UpdateBookInput,
    condition?: ModelBookConditionInput
  ): Promise<UpdateBookMutation> {
    const statement = `mutation UpdateBook($input: UpdateBookInput!, $condition: ModelBookConditionInput) {
        updateBook(input: $input, condition: $condition) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookMutation>response.data.updateBook;
  }
  async DeleteBook(
    input: DeleteBookInput,
    condition?: ModelBookConditionInput
  ): Promise<DeleteBookMutation> {
    const statement = `mutation DeleteBook($input: DeleteBookInput!, $condition: ModelBookConditionInput) {
        deleteBook(input: $input, condition: $condition) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookMutation>response.data.deleteBook;
  }
  async SearchAuthors(
    filter?: SearchableAuthorFilterInput,
    sort?: Array<SearchableAuthorSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableAuthorAggregationInput | null>
  ): Promise<SearchAuthorsQuery> {
    const statement = `query SearchAuthors($filter: SearchableAuthorFilterInput, $sort: [SearchableAuthorSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableAuthorAggregationInput]) {
        searchAuthors(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            name
            books {
              items{
                id
                title
                genre
              }
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchAuthorsQuery>response.data.searchAuthors;
  }
  async SearchBooks(
    filter?: SearchableBookFilterInput,
    sort?: Array<SearchableBookSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableBookAggregationInput | null>
  ): Promise<SearchBooksQuery> {
    const statement = `query SearchBooks($filter: SearchableBookFilterInput, $sort: [SearchableBookSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableBookAggregationInput]) {
        searchBooks(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            title
            genre
            author {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            authorBooksId
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchBooksQuery>response.data.searchBooks;
  }
  async GetAuthor(id: string): Promise<GetAuthorQuery> {
    const statement = `query GetAuthor($id: ID!) {
        getAuthor(id: $id) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAuthorQuery>response.data.getAuthor;
  }
  async ListAuthors(
    filter?: ModelAuthorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAuthorsQuery> {
    const statement = `query ListAuthors($filter: ModelAuthorFilterInput, $limit: Int, $nextToken: String) {
        listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            books {
              items{
                id
                title
                genre
              }
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAuthorsQuery>response.data.listAuthors;
  }
  async GetBook(id: string): Promise<GetBookQuery> {
    const statement = `query GetBook($id: ID!) {
        getBook(id: $id) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookQuery>response.data.getBook;
  }
  async ListBooks(
    filter?: ModelBookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBooksQuery> {
    const statement = `query ListBooks($filter: ModelBookFilterInput, $limit: Int, $nextToken: String) {
        listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            genre
            author {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            authorBooksId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBooksQuery>response.data.listBooks;
  }
  OnCreateAuthorListener(
    filter?: ModelSubscriptionAuthorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAuthor">>
  > {
    const statement = `subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
        onCreateAuthor(filter: $filter) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAuthor">>
    >;
  }

  OnUpdateAuthorListener(
    filter?: ModelSubscriptionAuthorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAuthor">>
  > {
    const statement = `subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
        onUpdateAuthor(filter: $filter) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAuthor">>
    >;
  }

  OnDeleteAuthorListener(
    filter?: ModelSubscriptionAuthorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAuthor">>
  > {
    const statement = `subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
        onDeleteAuthor(filter: $filter) {
          __typename
          id
          name
          books {
            __typename
            items {
              __typename
              id
              title
              genre
              createdAt
              updatedAt
              authorBooksId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAuthor">>
    >;
  }

  OnCreateBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBook">>
  > {
    const statement = `subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
        onCreateBook(filter: $filter) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBook">>
    >;
  }

  OnUpdateBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBook">>
  > {
    const statement = `subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
        onUpdateBook(filter: $filter) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBook">>
    >;
  }

  OnDeleteBookListener(
    filter?: ModelSubscriptionBookFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBook">>
  > {
    const statement = `subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
        onDeleteBook(filter: $filter) {
          __typename
          id
          title
          genre
          author {
            __typename
            id
            name
            books {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          authorBooksId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBook">>
    >;
  }
}
