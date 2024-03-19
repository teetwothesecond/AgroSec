console.log("Checks");
document.getElementById("secIssue").addEventListener('click', ()=>{
    const secForm = document.createElement('form');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    const severity = document.createElement('label');
    const severityInput = document.createElement('input');
    const timestamp = document.createElement('label');
    const timestampInput = document.createElement('input')
    const select = document.createElement('select');
    const textArea = document.createElement('textarea')
    
    const security = ['Accident','Theft', 'Car Jacking','Human Trafficking']
     
    container = document.getElementById('Sec-Agri-form-container');
    label.innerText = 'Incident Title';
    label.setAttribute('for', 'firstname');
    input.setAttribute('type','text');
    input.setAttribute('class','form-control')
    secForm.appendChild(label);
    secForm.appendChild(input);
    security.forEach((item)=>{
        console.log(item);
        const option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        select.appendChild(option);
    });
    select.style = 'display: block; margin: 5px 0;'
    severity.innerText = "What is the Severity Level";
    severityInput.setAttribute('type','number');
    severityInput.setAttribute('class','form-control')
    secForm.appendChild(select);
    secForm.appendChild(textArea);

    container.appendChild(secForm);
})

// Function to trigger the PDF download
function downloadPDF() {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    const pdfURL = './Environmental-Studies.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfURL;
    
    // Set the download attribute to specify the filename
    link.download = 'Environmental-Studies.pdf'; // You can set the filename here
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger the click event of the link
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
}

// Attach the downloadPDF function to the click event of the button
document.getElementById('downloadButton').addEventListener('click', downloadPDF);
