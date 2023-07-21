const fs = require("fs");

const basicTask = Symbol("basicTask");
const serverCall = Symbol("serverCall");
const multiplyServerCall = Symbol("multiplyServerCall");
const fibonacci = Symbol("fibonacci");
const write = Symbol("write");

const URL = "https://example.com";

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
        break;
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
        break;
    }
    return array;
  }

  async [serverCall]() {
    let array = [];

    switch (this.rules.fizzbuzz) {
      case "all":
        for (let i = 1; i <= this.number; i++) {
          try {
            const response = await fetch(`${URL}/fizz-buz-server/run?num=${i}`);
            const data = await response.json();
            let word;
            if (data.num % 5 === 0 && data.num % 3 === 0) {
              word = "FizzBuzz";
            } else if (data.num % 3 === 0) {
              word = "Fizz";
            } else if (data.num % 5 == 0) {
              word = "Buzz";
            } else {
              word = data.num.toString();
            }
            array.push(word);
          } catch (error) {
            console.error(error);
            array.push(i.toString());
          }
        }
        break;

      case "fizzbuzz":
        for (let i = 1; i <= this.number; i++) {
          try {
            const response = await fetch(`${URL}/fizz-buz-server/run?num=${i}`);
            const data = await response.json();
            let word;
            if (data.num % 5 === 0 && data.num % 3 === 0) {
              word = "FizzBuzz";
            } else {
              word = data.num.toString();
            }
            array.push(word);
          } catch (error) {
            console.error(error);
            array.push(i.toString());
          }
        }
        break;
    }

    return array;
  }

  async [multiplyServerCall]() {
    let array = [];

    switch (this.rules.fizzbuzz) {
      case "all":
        for (let i = 1; i <= this.number; i++) {
          try {
            const ruleResponse = await fetch(`${URL}/rule?num=${i}`);
            const ruleData = await ruleResponse.json();

            const resResponse = await fetch(
              `${URL}/res?rule=${ruleData.rule}&num=${i}`
            );
            const resData = await resResponse.json();

            let word;

            if (resData.num % 5 === 0 && resData.num % 3 === 0) {
              word = "FizzBuzz";
            } else if (resData.num % 3 === 0) {
              word = "Fizz";
            } else if (resData.num % 5 == 0) {
              word = "Buzz";
            } else {
              word = resData.num.toString();
            }
            array.push(word);
          } catch (error) {
            console.error(error);
            array.push(i.toString());
          }
        }
        break;

      case "fizzbuzz":
        for (let i = 1; i <= this.number; i++) {
          try {
            const ruleResponse = await fetch(`${URL}/rule?num=${i}`);
            const ruleData = await ruleResponse.json();

            const resResponse = await fetch(
              `${URL}/res?rule=${ruleData.rule}&num=${i}`
            );
            const resData = await resResponse.json();

            let word;
            if (resData.num % 5 === 0 && resData.num % 3 === 0) {
              word = "FizzBuzz";
            } else {
              word = resData.num.toString();
            }
            array.push(word);
          } catch (error) {
            console.error(error);
            array.push(i.toString());
          }
        }
        break;
    }

    return array;
  }

  [fibonacci]() {
    let array = [];

    let prev = 0;
    let curr = 1;
    switch (this.rules.fizzbuzz) {
      case "all":
        for (let i = 1; i <= this.number; i++) {
          if (curr % 3 === 0 && curr % 5 === 0) {
            array.push("FizzBuzz");
          } else if (curr % 3 === 0) {
            array.push("Fizz");
          } else if (curr % 5 === 0) {
            array.push("Buzz");
          } else {
            array.push(curr.toString());
          }

          let next = prev + curr;
          prev = curr;
          curr = next;
        }
        break;
      case "fizzbuzz":
        for (let i = 1; i <= this.number; i++) {
          if (curr % 3 === 0 && curr % 5 === 0) {
            array.push("FizzBuzz");
          } else {
            array.push(curr.toString());
          }

          let next = prev + curr;
          prev = curr;
          curr = next;
        }
        break;
    }
    return array;
  }

  [write]() {
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
        break;
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
        break;
    }

    fs.writeFileSync("fizzbuzz.txt", array.join("\n"));

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
      case multiplyServerCall:
        this[multiplyServerCall]()
          .then((serverResult) => {
            console.log(serverResult);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case fibonacci:
        const fibonacciResult = this[fibonacci]();
        console.log(fibonacciResult);
        break;
      case write:
        const writeResult = this[write]();
        console.log(writeResult);
        break;
      default:
        console.log("Invalid task!");
    }
  }
}

const app = new TestWork({ fizzbuzz: "all" }, write, 15);
app.app();
