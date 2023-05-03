const client = hypi.postgres("localhost", 5432, "hypi", "hypi", "hypi")
//hypi is a global variable made available automatically, it has an args field which is an object containing the arguments passed into the function
//select returns a list of objects, each object is a row, the key is the column name after being upper cased
client.select('SELECT ?::text as message, 1 as x', hypi.args.message)
