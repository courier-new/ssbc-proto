function handleMoreSelect(event) {
  switch (event.value) {
    case "burndown":
      return (location.href =
        "/courier-new/batch-changes/my-open-batch-change/burndown");
    case "executions":
      return (location.href =
        "/courier-new/batch-changes/my-open-batch-change/executions");
    case "bulk-actions":
      return (location.href =
        "/courier-new/batch-changes/my-open-batch-change/bulk-actions");
    default:
      break;
  }
}
