import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import type { GetToken } from "@clerk/types";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_NEST_API_URL}/graphql`,
});

const createAuthLink = (getToken: GetToken) =>
  setContext(async (_, { headers }) => {
    try {
      const token = await getToken({ template: "regular-jwt" });
      return {
        headers: {
          ...headers,
          ...(token && { authorization: `Bearer ${token}` }),
        },
      };
    } catch (error) {
      throw error;
    }
  });

export const getApolloClient = (getToken: GetToken) => {
  const authLink = createAuthLink(getToken);

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
};
