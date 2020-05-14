/* set up consts for inputs */
      const inputs = document.querySelectorAll('.controls input'); /* node list of all input in .controls */

/* function to update css variables */
      function updateVars() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      }

/*add event listeners for each input using forEach method */
      inputs.forEach(input => input.addEventListener('change', updateVars));
      inputs.forEach(input => input.addEventListener('mousemove', updateVars));