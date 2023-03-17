document.getElementById('btn').addEventListener('click', function(){

    const emailInput = document.getElementById('email-input');
    const emailInputValue = emailInput.value;
    if(emailInputValue === ''){
        const container = document.getElementById('msg-container');
        emailInput.classList.remove('border-blue-700');
        emailInput.classList.add('border-red-700')
        container.innerHTML=`Don't left it empty`
        container.classList.add('text-red-700')
        container.classList.add('pl-2')
        container.classList.add('pt-2')

        container.classList.remove('hidden');

    }
    else if(!emailInputValue.includes('@') || !emailInputValue.includes('.com')){
        const container = document.getElementById('msg-container');
        emailInput.classList.remove('border-blue-700');
        container.classList.remove('hidden');
        emailInput.classList.add('border-red-700')
        container.innerHTML=`Enter an email address`
        container.classList.add('text-red-700')
        container.classList.add('pl-2')
        container.classList.add('pt-2')
       
    }
    else{
        
        const container = document.getElementById('msg-container');
        emailInput.classList.add('border-blue-700');
        emailInput.classList.remove('border-red-700')
        container.classList.add('hidden')
        alert(`"Notification sent to ${emailInputValue}"`)
        
    }

})