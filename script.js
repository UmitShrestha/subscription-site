let defaultPlan = 0;

    document.querySelector('#toggle').onclick = () => {
      let regularPrice = document.querySelector("#price-regular");
      let plusPrice = document.querySelector("#price-plus");

      // Ternary operator to toggle prices
      defaultPlan === 0 ? (
        regularPrice.textContent = "$180",
        plusPrice.textContent = "$250",
        defaultPlan = 1
      ) : (
        regularPrice.textContent = "$19",
        plusPrice.textContent = "$29",
        defaultPlan = 0
      );
    }