---
sidebar_label: delete
---

# `tag delete`

The `tag delete` command deletes a tag.

## Usage

```bash
tag delete [--nowait] <tag_name>
```

### Options

| Option     | Description                              |
| ---------- | ---------------------------------------- |
| `--nowait` | Execute asynchronously in the background |

### Parameters

| Parameter  | Description           | Required? | Default Value |
| ---------- | --------------------- | --------- | ------------- |
| `tag_name` | Name of tag to delete | ✔️        | N/A           |

## Examples

```bash title="Make sure there is no resource that is tagged with 'foo'"
> query is(resource) and tags.foo!=null | tag delete foo
// highlight-next-line
kind=aws_ec2_keypair, id=key-0, name=default, age=1yr8mo, cloud=aws, account=eng-sre, region=us-west-2
```

```bash title="Manually select the resources to tag by ID"
> json["key-0"] | tag delete foo
// highlight-next-line
kind=aws_ec2_keypair, id=key-0, name=default, age=1yr8mo, cloud=aws, account=eng-sre, region=us-west-2
```
