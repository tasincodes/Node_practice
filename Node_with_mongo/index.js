var MongoClient=require('mongodb').MongoClient;
// var URL="mongodb+srv://ZahedMongo:0D8putbAgHJfJtr1@cluster0.agrwzim.mongodb.net/?retryWrites=true&w=majority";
var URL="mongodb+srv://shahriartasin2000:zahed75@cluster0.fumnhb4.mongodb.net/";
// var config={useUndifiedTopology:true};



MongoClient.connect(URL,function(error,MyMongoClient){
    if(error){
        console.log("Connection Fail!");
    }
    else{
        console.log("Connection Success!");
        //InserData(MyMongoClient);
        //DeleteOneItem(MyMongoClient)
        // DeleteOneItem(MyMongoClient);
         //DeleteAllItem(MyMongoClient);
        //FindOneDataWithoutConditions(MyMongoClient);
        // FindWithOneConditions(MyMongoClient);
        //FindOneDataWithConditions(MyMongoClient)
        //FindAllData(MyMongoClient);

        //FindAllDataByProjection(MyMongoClient);
        //FindAllDataByQuery(MyMongoClient);
         //FindAllDataByLimit(MyMongoClient);
        //FindAllDataBySort(MyMongoClient);
        //UpdateMyData(MyMongoClient);
        //CreateMyCollection(MyMongoClient);
         DeleteMyCollection(MyMongoClient);


    }
});


// Data Insert Functions

function InserData(MyMongoClient){
      var Mydatabase=  MyMongoClient.db("cse");
     var MyCollections= Mydatabase.collection('students')

    var Mydata={name:"Hasan",Roll:"011",department:"math",institute:"Brac",

}
    MyCollections.insertOne(Mydata,function(error){
            if(error){
                console.log("Data Insert Fail");
            }
            else{
             console.log("Data Insert Success!");
            }

    })}
function DeleteOneItem(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var deleteQuerry = {Roll:"44"}
    MyCollections.deleteOne(deleteQuerry,function(error){
        if(error){
            console.log("Data delete Fail");
        }
        else{
         console.log("Data delete Success!");
        }
    })
}
function DeleteAllItem(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    MyCollections.deleteMany(function(error,resultobj){
        if(error){
            console.log("delete fail")
        }
        else{
            console.log(resultobj)
        }

    })
}


function FindOneDataWithoutConditions(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var findObj = {}
    MyCollections.findOne(findObj,function(error,result){
        console.log(result)
    })

}
function FindOneDataWithConditions(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var findObj = {Roll : '011'}
    MyCollections.findOne(findObj,function(error,result){
        console.log(result)
    })

}
function FindAllData(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    MyCollections.find().toArray(function(error,result){
        console.log(result)
    })
}


function FindAllDataByProjection(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var itemObj = {}
    // var itemProjection = {projection:{roll : ''}}
    var itemProjection = {projection:{roll:'1',department:1}}

    MyCollections.find(itemObj,itemProjection).toArray(function(error,result){
        console.log(result)
    })
}
// function FindAllDataByProjection(MyMongoClient) {
//     var Mydatabase = MyMongoClient.db('cse');
//     var MyCollections = Mydatabase.collection('students');
//     var itemObj = {};

//     MyCollections.find(itemObj).toArray(function(error, result) {
//         if (error) {
//             console.error("Error occurred:", error);
//             return;
//         }
//         // Extract Roll values from each document
//         var rolls = result.map(doc => doc.Roll);
//         console.log(rolls);
//     });
// }
function FindAllDataByQuery(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var Query = {institute:'aiub'}

    MyCollections.find(Query).toArray(function(error,result){
        console.log(result)
    })
}

function FindAllDataByLimit(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    

    MyCollections.find().limit(3).toArray(function(error,result){
        console.log(result)
    })
}

function FindAllDataBySort(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var SortPattern={Roll:-1}//decscending order
    //Roll : 1 //ascending order

    MyCollections.find().sort(SortPattern).toArray(function(error,result){
        console.log(result)
    })
}
function UpdateMyData(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    var MyCollections = Mydatabase.collection('students')
    var MyQuery={Roll : '01'}
    var MyNewValues = {$set:{name:"rabbil hossain",department:"eee"}}
    MyCollections.updateOne(MyQuery,MyNewValues,function(error,result){
        console.log(result)

    })
}
function CreateMyCollection(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    Mydatabase.createCollection("teachers",function(error,result){
console.log(result)
    })
}

function DeleteMyCollection(MyMongoClient){
    var Mydatabase = MyMongoClient.db('cse')
    Mydatabase.dropCollection("teachers",function(error,result){
        console.log(result)
    })
}