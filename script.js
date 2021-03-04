FI.state.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};


var data = { type: "FROM_PAGE", g_clientManager: JSON.parse(FI.state.safeStringify(FI.g_clientManager)) };
window.postMessage(data, "*");