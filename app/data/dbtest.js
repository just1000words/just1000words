//Write to database
var assert = require("assert")
var client = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/testdb"

var docs = { name: "test", data: "some string", array: [1,2,3]}

//Connect to mongo
client.connect(url, function(err, con){
  assert.equal(null, err)

  var db = con.db("myTestDb")
  db.collection("testCollection").insert(docs, function(err, doc){
    assert.equal(null, err)

    console.log("insert success")
    console.log(doc)

    db.collection("testCollection").find().toArray(function(err, docs){
      assert.equal(null, err)

      console.log("\nFound the record")
      console.log(docs)

      //Close up connection
      con.close()
    })
  })
})
