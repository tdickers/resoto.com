# `sleep`

The `sleep` command suspends execution for a defined interval of time.

## Usage

```bash
sleep <seconds>
```

### Parameters

| Parameter | Description       | Required? | Default Value |
| --------- | ----------------- | --------- | ------------- |
| `seconds` | Number of seconds | ✔️        | N/A           |

## Examples

```bash title="Print the string '6 seconds later...' after 6 seconds have elapsed"
> sleep 6; echo 6 seconds later...
// highlight-next-line
6 seconds later...
```
