console.log("Checks");
document.getElementById("secIssue").addEventListener('click', ()=>{
    const secForm = document.createElement('form');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    // 
    container = document.getElementById('Sec-Agri-form-container');
    label.innerText = 'First Name'
    label.setAttribute('for', 'firstname');
    input.setAttribute('type','text');
    secForm.appendChild(input);
    secForm.appendChild(label);
    container.appendChild(secForm);
})