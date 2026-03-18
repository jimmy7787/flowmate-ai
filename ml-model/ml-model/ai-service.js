function processTask(input) {
  return {
    original: input,
    priority: input.includes("tomorrow") ? "high" : "medium",
    suggestion: "Schedule in the morning",
    aiGenerated: true
  };
}

module.exports = { processTask };
