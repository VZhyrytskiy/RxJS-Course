onmessage = function(e) {
  const workerResult = e.data * 100;
  postMessage(workerResult);
};