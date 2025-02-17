---
sidebar_label: add
---

# `jobs add`

The `jobs add` command adds a job to the task handler.

## Usage

```bash
jobs add [--id <id>] [--schedule <cron_expression>] [--wait-for-event <event_name>] <command>
```

### Options

| Option                          | Description                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `--id <id>`                     | Job identifier (if no ID is provided, a random identifier will be automatically generated)                                                      |
| `--schedule <cron_expression>`  | The schedule as a `cron` expression                                                                                                             |
| `--wait-for-event <event_name>` | Waits for the specified event to occur (if this option is defined in conjunction with the `--schedule` option, the schedule must trigger first) |
| `--timeout`                     | Number of seconds for which the job is allowed to run before being automatically terminated (default 3600)                                      |

### Parameters

| Parameter | Description                                                    | Required? | Default Value |
| --------- | -------------------------------------------------------------- | --------- | ------------- |
| `command` | CLI command that will be executed when the job is triggered \* | ✔️        | N/A           |

\* It is recommended to either surround the `command` with single quotes (`'`) or escape special characters such as pipes (`|`) or semicolons (`;`). Multiple commands can be delimited using semicolons.

## Examples

```bash title="Print 'hello world' to the console every minute"
> jobs add --id say-hello --schedule "* * * * *" echo hello world
// highlight-next-line
Job say-hello added.
```

```bash title="At 4am each morning, wait for message of type collect_done and print a message"
> jobs add --id early_hi --schedule "0 4 * * *" --wait-for-event collect_done 'match is("volume") | format id'
// highlight-next-line
Job early_hi added.
```

```bash title="Wait for message of type collect_done and print a message"
> jobs add --id wait_for_collect_done collect_done: echo hello world
// highlight-next-line
Job wait_for_collect_done added.
```
