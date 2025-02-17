---
sidebar_label: add
---

# `templates add`

The `templates add` command adds a search template.

## Usage

```bash
templates add <template_name> <search_syntax>
```

### Parameters

| Parameter       | Description                                       | Required? | Default Value |
| --------------- | ------------------------------------------------- | --------- | ------------- |
| `template_name` | Template name                                     | ✔️        | N/A           |
| `search_syntax` | Search syntax template with value placeholders \* | ✔️        | N/A           |

\* Placeholders are defined using double curly braces (`{{placeholder}}`). Placeholders are replaced with provided values during `render_console` time. The name of the placeholder can be any valid alphanumeric string. For example, the template `is({{kind}})` with expand parameters `kind=volume` becomes `is(volume)` during expand time.

## Examples

```bash title="Add a simple template to the search template library"
> templates add filter_kind is({{kind}})
// highlight-start
Template filter_kind added to the query library.
is({{kind}})
// highlight-end
```
