# `set_desired`

The `set_desired` command sets one or more properties as desired for incoming database objects.

The desired state of each node in the database is merged with this new desired state, so that existing desired state not defined in this command is not touched.

This command assumes that all incoming elements are either objects coming from a query or are object ids. All objects coming from a query will have a property `id`. This command will return the updated state.

## Usage

```bash
set_desired <desired_properties>
```

### Parameters

| Parameter            | Description                                                                          | Required? | Default Value |
| -------------------- | ------------------------------------------------------------------------------------ | --------- | ------------- |
| `desired_properties` | Space-delimited list of property-value pairs, formatted as `<property_name>=<value>` | ✔️        | N/A           |

## Examples

```bash
> query is(instance) limit 1 | set_desired a=b b="c" num=2 | list /id, /desired
// highlight-next-line
id=123, a=b, b=c, num=2
```

```bash
> json ["id1", "id2"] | set_desired a=b | list /id /desired
// highlight-start
id=id1, a=b
id=id2, a=b
// highlight-end
```
