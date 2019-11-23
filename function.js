var dog = {
       name: "旺财",
        type: "中华田园犬",
        age: 2,
        color: "yellow",
        bar: function () {
             console.log(this.name + "汪汪汪");
         },
         eat: function () {
    
             console.log(this.name + "啃骨头");
         }
     }
     console.log(dog.name);
     console.log(dog.type);
     dog.bar();
     dog.eat();
    
