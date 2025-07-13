//immediately invoked function expression

(function() {
  console.log("DB connected");  
})();

( (name) => {
  console.log(`DB connected 2 ${name}`);
})('hari');
