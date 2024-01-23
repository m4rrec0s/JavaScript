class Calculator {
    constructor () {
        this.display = document.querySelector('.screen h1');
        this.currentValue = '0';

        document.querySelectorAll('.btn, .action, .del_button').forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button.textContent));

        });
    }

    handleButtonClick(value) {
        if (value === 'DEL' || value === '⌫') {
            this.handleDelete();
        } else if (value === 'del_button') {
            this.handleDelete();
        } else if (value === 'AC') {
            this.handleClear();
        } else if (value === '=') {
            this.handleEqual();
        } else if (value === '%') {
            this.handlePercentage();
        } else {
            this.handleInput(value);
        }

        this.display.textContent = this.currentValue;
    }

    handleInput(value) {
        if (this.currentValue === '0' || this.currentValue === 'Error') {
          this.currentValue = value;
        } else {
          this.currentValue += value;
        }
    }

    handleClear() {
        this.currentValue = '0';
    }

    handleDelete() {
        if (this.currentValue.length > 1) {
          this.currentValue = this.currentValue.slice(0, -1);
        } else {
          this.currentValue = '0';
        }
    }

    handlePercentage() {
        try {
          this.currentValue = (eval(this.currentValue) / 100).toString();
        } catch (error) {
          this.currentValue = 'Error';
        }
    }

    handleEqual() {
        try {
          this.currentValue = eval(this.currentValue).toString();
        } catch (error) {
          this.currentValue = 'Error';
        }
      }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});