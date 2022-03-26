# https://editor.p5js.org/mp/sketches/wMUDfhVXq 
//michele- mamudu- eduardo
//worked together
//checked other repos for guidance - Daiana - Peter - Tiffany


//https://www.youtube.com/watch?v=-KLnurhX-Pg

//perceptron - a single unit of logic in an artificial neural network;  an algorith that determines if something is true or false (binary conclusion)

//perceptron mimics a neuron in human brain

//expose 2 different perceptrons to same data may not come to same conclusion/output

//can control thinking patterns of perceptron with weights and thresholds
//need to apply the weights on the inputs

//eg:  to evaluate if threshold is reached use activation functions- most simple is the step function; if  threshold is 0.5 and sum is gt 0.5 then function returns true

//we choose threshold 

//accuracy of perceptron depends on adjusting weights to input data

class Perceptron {
  
  // parameter is number of inputs
  constructor(n){
  // initialize an array of weights here
    this.weights = []
    // should have same amount of weights as inputs
    // weights should be random values between -1 and 1
    for(let i = 0; i < n; i++) {
      this.weights.push(random(-1, 1))
    }
    // don't worry about this until writing training function
     this.learningRate = 0.01; 
  }
  
  // determine if sum of calculated weights and inputs is higher or lower than zero
  // return 1 if greater than zero
  // return -1 if less than zero
  activate(sum){
    if(sum > 0){
      return 1;
    } else {
      return -1
    }
  }
  
  //feedForward algorithm
  // 1. multiply each input by its corresponding weight
  // 2. sum all the weighted inputs
  // 3. pass sum through activation function
  
  feedForward(inputs){
  let sum = 0
  for(let i = 0; i < inputs.length; i++) {
    sum += this.weights[i]*inputs[i]
  }
    return this.activate(sum);
    //
  }
  
  // finish training function for homework
  train(inputs, desired){
    // store result of feed forward here
    //The guess of the perceptron is the returned result of the feedForward function.

  // let guess = 
    let guess = this.feedForward(inputs);
    
    
    // error is difference between desired result and guess
  // let error = 
    let error = desired - guess;
    
    
    // adjust all weights by adding learning rate times error times inputs
    // weight1 + learningRate*error*input1 
    // -> do same for all weights
    
    
    for (let i = 0; i < inputs.length; i++) {
      this.weights[i] = this.weights[i] + this.learningRate * error * inputs[i];
    
  }
  
}
}  
