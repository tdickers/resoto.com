# `dump`

The `dump` command outputs all properties of elements.

If no output format is given, the output is transformed to fit on one line per element using the [`list`](./list.md) command. Dump retains all properties of the elements.

## Usage

```bash
dump
```

## Examples

```bash
> search is(volume) limit 1 | dump
// highlight-start
id: 0QcwZ5DHsS58A1tHEk5JRQ
reported:
  kind: gcp_disk
  id: '7027640035137'
  tags:
    owner: 'dev-rel'
  name: gke-cluster-1
  ctime: '2021-08-04T08:31:42Z'
  volume_size: 50
  volume_type: pd-standard
  volume_status: available
  snapshot_before_delete: false
  link: https://www.googleapis.com/compute/v1/projects/eng-ksphere-platform/zones/us-central1-c/disks/gke-cluster-1
  label_fingerprint: nT7_dAxskBs=
  last_attach_timestamp: '2021-08-04T08:31:42Z'
  last_detach_timestamp: '2021-08-04T08:31:42Z'
  age: 5mo25d
metadata:
  protected: false
ancestors:
  cloud:
    reported:
      name: gcp
      id: gcp
  account:
    reported:
      name: eng-ksphere-platform
      id: eng-ksphere-platform
  region:
    reported:
      name: us-central1
      id: '1000'
  zone:
    reported:
      name: us-central1-c
      id: '2002'
// highlight-end
```

## See Also

- [`format`](./format.md)
- [`list`](./list.md)
- [`jq`](./jq.md)
