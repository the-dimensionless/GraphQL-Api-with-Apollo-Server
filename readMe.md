### GraphQL 
* Apollo-Playground

#### Introspection: Ability to query which resources are available
in the current API schema. Given APIm we can introspect and see
the queries, types, fields and directives it supports.

#### Resolver Maps, Executing queries, schema directives, implementing datasource

* Resolver : A function that is responsible for populating the data for a single field
in your schema.
* ResolverMap: An object that holds Type -> Field -> Resolver functions


### Field level directives
* @include (if: Boolean!) -> includes a field in list if it's a boolean with true value
* @skip (if: Boolean!) -> skips a field in list if it's boolean with true value
* @deprecated (reason: String) -> marks a field deprecated
* @specifiedBy (String!) -> Exposes a URL that specifies the behaviour of this scalar.

### Custom level directives (todo)
