
mySetTimeout(2000).then(() => {
    console.log('Delayed operation executed!');
    
  });

  function distributeToyShop(toyMakingTime, deliveryDelay, sellingTime) {
    console.log("Preparing to distribute Toy Shop...");
  
    // Step 1: Verify eligibility
    console.log("Verifying eligibility...");
    mySetTimeout(2000)
      .then(() => {
       
        const isEligible = Math.random() < 0.5; 
  
        if (isEligible) {
          console.log("Eligibility verified.");
          return mySetTimeout(2000); 
        } else {
          console.log("Not eligible for distribution.");
          throw new Error("Not eligible");
        }
      })
      .then(() => {
        // Step 2: Prepare distribution
        console.log("Preparing distribution...");
        return mySetTimeout(2000);
      })
      .then(() => {
        // Step 3: Distribute
        console.log("Distributing Toy Shop...");
        const toyCount = 10;
  
        const distributionTime = toyMakingTime * toyCount; 
  
        return mySetTimeout(distributionTime * 1000);
      })
      .then(() => {
        // Step 4: Deliver toys
        console.log("Delivering toys...");
        return mySetTimeout(deliveryDelay * 1000); 
      })
      .then(() => {
        // Step 5: Sell toys
        console.log("Selling toys...");
        const toyCount = 10; 
  
        const sellingTime = sellingTime * toyCount;
  
        return mySetTimeout(sellingTime * 1000); 
      })
      .then(() => {
        console.log("Toy Shop distributed and sold successfully!");
      })
      .catch((error) => {
        console.log("An error occurred:", error.message);
      });
  }
 
  distributeToyShop(3, 2, 1);

  