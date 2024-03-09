const form = document.getElementById('myForm');
        const jsonDataTextArea = document.getElementById('jsonData');
        const showPasswordButton = document.getElementById('showPassword');
        const passwordInput = document.getElementById('password');

        showPasswordButton.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? '🫣' : '🤗';
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                const formData = new FormData(form);
                const formObject = {};
                formData.forEach(function (value, key) {
                    formObject[key] = value;
                });
                const jsonData = JSON.stringify(formObject, null, 2);
                jsonDataTextArea.value = jsonData;
            }
        });

        function validateForm() {
            const name = document.getElementById('name').value;
            const cpf = document.getElementById('cpf').value;
            const age = document.getElementById('age').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            let isValid = true;

            if (!name || !cpf || !age || !phone || !dob || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                isValid = false;
            }

            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                isValid = false;
            }

            return isValid;
        }

        function resetForm() {
            form.reset();
            jsonDataTextArea.value = '';
        }