const basicTask = Symbol("basicTask");

class TestWork {
  constructor(rules = {}, task, number) {
    this.rules = {
      fizzbuzz: rules.fizzbuzz,
    };
    this.task = task;
    this.number = number;
  }

  [basicTask]() {
    let array = [];
    switch (this.rules.fizzbuzz) {
      case "all":
        for (let i = 1; i <= this.number; i++) {
          let word;
          if (i % 5 === 0 && i % 3 === 0) {
            word = "FizzBuzz";
          } else if (i % 3 === 0) {
            word = "Fizz";
          } else if (i % 5 == 0) {
            word = "Buzz";
          } else {
            word = i.toString();
          }
          array.push(word);
        }
        return array;
      case "fizzbuzz":
        for (let i = 1; i <= this.number; i++) {
          let word;
          if (i % 5 === 0 && i % 3 === 0) {
            word = "FizzBuzz";
          } else {
            word = i.toString();
          }
          array.push(word);
        }
        return array;
      default:
        console.log("Default");
        break;
    }
  }

  app() {
    if (this.task === "basic") {
      const result = this[basicTask]();
      console.log(result);
      return;
    }
  }
}

const app = new TestWork({ fizzbuzz: "fizzbuzz" }, "basic", 15);
app.app();
