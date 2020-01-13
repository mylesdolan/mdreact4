import {HttpLink, InMemoryCache, ApolloClient, ApolloLink} from "apollo-boost";
//import {siteConfig} from "../site-config";
//import {auth} from "../../shared/Auth";

// See https://medium.com/risan/set-authorization-header-with-apollo-client-e934e6517ccf
// for more information
const httpLink = new HttpLink({uri: "http://localhost:4001/graphql"});
const authLink = new ApolloLink ((operation: any, forward: any) => {



    operation.setContext ({

    });

    return forward(operation);
});


const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link: authLink.concat(httpLink),

    // addTypename must be true for Fragments to work in Apollo

    cache: new InMemoryCache({addTypename: true})
});

export default {
    client,
}
