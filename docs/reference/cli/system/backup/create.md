---
sidebar_label: create
---

# `system backup create`

The `system backup create` command creates a backup of the database.

The backup includes the following:

- graph data
- model data
- job/task data
- subscribers data
- configuration data

## Usage

```bash
system backup create <name>
```

### Parameters

| Parameter | Description      | Required? | Default Value                                        |
| --------- | ---------------- | --------- | ---------------------------------------------------- |
| `name`    | Backup file name | ❌        | `backup_yyyyMMdd_hmm` (e.g., `backup_20211022_1028`) |

## Examples

```bash title="Create a backup without an explicit name"
> system backup create
// highlight-next-line
Received a file backup_20220202_1121, which is stored to ./backup_20220202_1121.
```

```bash title="Create a backup with a specific name"
> system backup create bck_1234
// highlight-next-line
Received a file bck_1234, which is stored to ./bck_1234.
```
