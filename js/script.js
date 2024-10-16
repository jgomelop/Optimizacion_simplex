document.getElementById('submitBtn').addEventListener('click', function() {
    const operation = document.getElementById('operation').value;
    const totalVariables = document.getElementById('totalVariables').value;
    const totalRestricciones = document.getElementById('totalRestricciones').value;
    
    // Validate inputs
    if (!totalVariables || isNaN(totalVariables) || totalVariables <= 0) {
        alert("Por favor, ingrese un número válido para Total de variables.");
        return;
    }
    
    if (!totalRestricciones || isNaN(totalRestricciones) || totalRestricciones <= 0) {
        alert("Por favor, ingrese un número válido para Total de restricciones.");
        return;
    }

    // Create a new section for entering the linear function coefficients
    const newForm = document.createElement('form');
    newForm.className = 'linear-function-form';
    newForm.innerHTML = `<h2>Ingrese los coeficientes de la función lineal</h2>`;

    // Dynamically add input fields and labels to represent the linear function
    const equationContainer = document.createElement('div');
    equationContainer.className = 'equation-container';

    for (let i = 1; i <= totalVariables; i++) {
        // Create input for coefficient
        const coefficientInput = document.createElement('input');
        coefficientInput.type = 'number';
        coefficientInput.name = `coefficient${i}`;
        // coefficientInput.placeholder = `Coeficiente ${i}`;
        coefficientInput.required = true;
        coefficientInput.style.width = '60px';
        coefficientInput.style.marginRight = '5px';
        coefficientInput.style.display = 'inline-block';

        // Create a label for the variable (X1, X2, etc.)
        const variableLabel = document.createElement('span');
        variableLabel.textContent = `X${i}`;
        variableLabel.style.marginRight = '10px';

        // Append input and label to the equation container
        equationContainer.appendChild(coefficientInput);
        equationContainer.appendChild(variableLabel);

        // Add a plus sign between terms, except after the last term
        if (i < totalVariables) {
            const plusSign = document.createElement('span');
            plusSign.textContent = '+';
            plusSign.style.marginRight = '10px';
            equationContainer.appendChild(plusSign);
        }
    }

    newForm.appendChild(equationContainer);

    // Add a submit button to the new form
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar función';
    submitButton.style.marginTop = '20px';
    submitButton.style.padding = '10px 15px';
    submitButton.style.backgroundColor = '#007bff';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';

    newForm.appendChild(submitButton);

    // Add event listener for the new form's submit action
    newForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(newForm);
        let coefficients = [];
        for (let [key, value] of formData.entries()) {
            coefficients.push(value);
        }
        alert(`Coeficientes ingresados: ${coefficients.join(', ')}`);
    });

    // Append the new form to the container
    const container = document.getElementById('generatedContent');
    container.innerHTML = ''; // Clear previous content if any
    container.appendChild(newForm);
});