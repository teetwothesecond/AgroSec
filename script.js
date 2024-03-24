console.log("Checks");
document.getElementById("secIssue").addEventListener('click', ()=>{
    const secForm = document.createElement('form');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    const severity = document.createElement('label');
    const severityInput = document.createElement('input');
    const timestamp = document.createElement('label');
    const timestampInput = document.createElement('input')
    const selectLabel = document.createElement('label');
    const select = document.createElement('select');
    const textArea = document.createElement('textarea')
    
    const security = ['Accident','Theft', 'Car Jacking','Human Trafficking']
     
    container = document.getElementById('Sec-Agri-form-container');
    label.innerText = 'Security Incident Title';
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
    severity.innerText = 'What is the Severity Level';
    severityInput.setAttribute('type','number');
    severityInput.setAttribute('class','form-control');
    secForm.appendChild(severity);
    secForm.apppendChild(severityInput);
    secForm.appendChild(selectLabel);
    secForm.appendChild(select);
    secForm.appendChild(textArea);

    container.appendChild(secForm);
    document.getElementById('Agri-Form-container').innerHTML = "";
})
lodgeComplaint
document.getElementById("Agric-Issues").addEventListener('click', ()=>{
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
     
    container = document.getElementById('Agri-Form-container');
    label.innerText = 'Agriculture Incident Title';
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
    severityInput.setAttribute('class','form-control');
    secForm.appendChild(select);
    secForm.appendChild(textArea);

    container.appendChild(secForm);
    document.getElementById('Sec-Agri-form-container').innerHTML ="";
})

document.getElementById('lodgeComplaint').addEventListener('click',()=>{
    document.getElementById('complainData').style = 'display: inline';
    document.getElementById('container').style =  'display: none';

})

document.getElementById('backtodashboard').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('complainData').style = 'display: none';
    document.getElementById('container').style = 'display: inline'
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

//Handle the short Read Sections
document.getElementById('reads').addEventListener('click', (e)=>{
    e.preventDefault();
    let carretContainer = document.getElementById('carretID');
    let CarretChild = document.getElementById('carret-child');
    CarretChild.style = 'display: none;';
    // carretContainer.innerHTML = '';
    let Reads = document.createElement('div');
    let a = document.createElement('a');
    let h3 = document.createElement('h3');
    let hr = document.createElement('hr')
    let div = document.createElement('div');
    let p = document.createElement('p');
    a.innerHTML = `<i class='bi bi-arrow-left'></i>`
    a.setAttribute('href','#')
    a.setAttribute('id','backCarriet');
    Reads.appendChild(a);
    Reads.setAttribute('id','ReadsId')
    h3.innerText = 'Agriculture is the way forward in our time and era';
    Reads.appendChild(h3);
    Reads.appendChild(hr);
    div.setAttribute('class','row');
    p.innerText = 'Pioneering the Path Forward In a world brimming with technological marvels and rapid advancements, it\'s easy to overlook the humble roots that nourish our existence—agriculture. Yet, as we stand on the precipice of a new era, it becomes increasingly clear that agriculture isn\'t just a relic of the past; it\'s the beacon guiding us towards a sustainable and prosperous future. Amidst the complexities of modernity, agriculture remains the cornerstone of human civilization. It\'s the foundation upon which societies have flourished, economies have thrived, and cultures have evolved. From the dawn of time, our ancestors tilled the land, sowed the seeds of progress, and reaped the fruits of their labor. Today, as we navigate the challenges of an ever-changing world, agriculture emerges as the linchpin of resilience and innovation. In an age marked by environmental upheaval and resource scarcity, agriculture offers a glimmer of hope—a blueprint for regenerating our planet and nourishing its inhabitants. Through sustainable farming practices, agroecology, and precision agriculture, we have the power to mitigate the impacts of climate change, conserve natural resources, and safeguard biodiversity. From rooftop gardens to vertical farms, from hydroponics to aquaponics, the possibilities are as boundless as the fields we cultivate. But agriculture isn\'t just about cultivating crops; it\'s about cultivating communities. It\'s about empowering farmers, revitalizing rural economies, and bridging the gap between producers and consumers. By embracing local food systems, supporting smallholder farmers, and championing food sovereignty, we can foster resilience, equity, and social cohesion within our communities. After all, the roots of agriculture run deep—not only in the soil but also in the fabric of society.Moreover, agriculture holds the key to addressing some of the most pressing challenges of our time—hunger, malnutrition, and food insecurity. In a world where millions still go to bed hungry, where disparities in access to nutritious food persist, agriculture offers a pathway to nourishing every soul on this planet. Through innovation in crop breeding, agronomy, and distribution channels, we can ensure that no one is left behind—that every mouth is fed, every stomach filled, and every life enriched by the bounty of the land.'
    // 'Title: Embracing Agriculture:' Indeed, the potential of agriculture knows no bounds. It transcends borders, cultures, and ideologies, uniting us in a common pursuit—the pursuit of sustenance, prosperity, and harmony with nature. As we chart a course into the unknown terrain of the future, let us heed the wisdom of the past—let us honor the legacy of agriculture and embrace it as the way forward in our time and era.
    // For in the fertile fields of possibility, amidst the seeds of innovation and the harvest of hope, lies the promise of a brighter tomorrow—a tomorrow nourished by the timeless wisdom of agriculture, where abundance flourishes, and all life thrives in harmony with the earth.So let us sow the seeds of change, tend to the garden of possibility, and reap the rewards of a future where agriculture reigns supreme—a future where, indeed, agriculture is the way forward.'
    div.appendChild(p);    
    Reads.appendChild(div);
    carretContainer.appendChild(Reads);
    document.getElementById('backCarriet').addEventListener('click', (e)=>{
        e.preventDefault();
        // let CarretChild = document.getElementById('carret-child');
        // let Reads = document.getElementById('ReadsId');
        CarretChild.style = 'display: inline-block;';
        Reads.style = 'display: none;'
    })
    
})
