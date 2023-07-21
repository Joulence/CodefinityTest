# TestWork Class - FizzBuzz

The TestWork class is a flexible and extensible JavaScript class that can perform various tasks related to the FizzBuzz sequence and more. It allows you to generate FizzBuzz sequences, make server calls, generate Fibonacci sequences, and even write FizzBuzz sequences to a file.

## Installation

To use the TestWork class in your JavaScript project, follow these steps:

1. Install Node.js on your system. You can download Node.js from the official website: [Node.js](https://nodejs.org/)

2. Create a new JavaScript file or open an existing one where you want to use the TestWork class.

3. Copy the code of the TestWork class into your JavaScript file.

4. Save the file and you are ready to use the TestWork class.

5. To start the program - type `node app.js` in console.

## Usage

The TestWork class supports several tasks that you can perform based on the rules provided. Below are the available tasks and how to use them:

### Basic FizzBuzz Task

```javascript
const app = new TestWork({ fizzbuzz: "all" }, basicTask, 15);
app.app();
```

This will generate and print the FizzBuzz sequence for numbers from 1 to 15.

### Server Call Task

```javascript
const app = new TestWork({ fizzbuzz: "all" }, serverCall, 15);
app.app();
```

This will make server calls to a specified URL for numbers from 1 to 15 and print the result. Ensure to set the `URL` variable to the appropriate server URL.

### Multiply Server Call Task

```javascript
const app = new TestWork({ fizzbuzz: "all" }, multiplyServerCall, 15);
app.app();
```

This will make multiple server calls for each number from 1 to 15 and print the result. Ensure to set the `URL` variable to the appropriate server URL.

### Fibonacci Task

```javascript
const app = new TestWork({ fizzbuzz: "all" }, fibonacci, 15);
app.app();
```

This will generate and print the Fibonacci sequence for numbers from 1 to 15.

### Write to File Task

```javascript
const app = new TestWork({ fizzbuzz: "all" }, write, 15);
app.app();
```

This will generate the FizzBuzz sequence for numbers from 1 to 15 and write it to a file named `fizzbuzz.txt` in the current directory.

## Customization

The TestWork class allows customization of the FizzBuzz rules and other tasks by providing appropriate parameters. You can modify the `rules`, `task`, and `number` when creating an instance of the TestWork class to suit your requirements.

## Rules
You are allowed to use 2 different rules for outputing the content:
- `all` - is for getting all possible outputs e.g. "FizzBuzz", "Fizz", "Buzz"
- `fizzbuzz` - to get only "FizzBuzz" answer


## Extensions

The TestWork class is designed to be extensible and flexible. You can easily add more tasks or extend the existing ones to perform other operations or tasks based on your specific needs.