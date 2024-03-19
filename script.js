console.log("Checks");
document.getElementById("secIssue").addEventListener('click', ()=>{
    const secForm = document.createElement('form');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    const lastname = document.createElement('label');
    const lastnameInput = document.createElement('input');
    const 
    // 
    container = document.getElementById('Sec-Agri-form-container');
    label.innerText = 'First Name'
    label.setAttribute('for', 'firstname');
    input.setAttribute('type','text');
    secForm.appendChild(label);
    secForm.appendChild(input);
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
