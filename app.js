const basicTask = Symbol("basicTask");
const serverCall = Symbol("serverCall");

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
    for (let i = 1; i <= this.number; i++) {
      let word;
      if (i % 5 === 0 && i % 3 === 0) {
        word = "FizzBuzz";
      } else if (i % 3 === 0) {
        word = "Fizz";
      } else if (i % 5 === 0) {
        word = "Buzz";
      } else {
        word = i.toString();
      }
      array.push(word);
    }
    return array;
  }

  async [serverCall]() {
    let array = [];
    for (let i = 1; i <= this.number; i++) {
      try {
        const response = await fetch(`/fizz-buz-server/run?num=${i}`);
        const data = await response.json();
        array.push(data.solution);
      } catch (error) {
        console.error(error);
        array.push(i.toString());
      }
    }
    return array;
  }

  app() {
    switch (this.task) {
      case basicTask:
        const basicResult = this[basicTask]();
        console.log(basicResult);
        break;
      case serverCall:
        this[serverCall]()
          .then((serverResult) => {
            console.log(serverResult);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      default:
        console.log("Invalid task!");
    }
  }
}

const app = new TestWork({ fizzbuzz: "all" }, serverCall, 15);
app.app();
