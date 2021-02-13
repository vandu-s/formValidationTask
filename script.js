const form = document.getElementById('form');
const pipelineName = document.getElementById('pipelinename');
const projectName = document.getElementById('projectname');
const bucketName = document.getElementById('bucket-name');
const cloudeStorageFile = document.getElementById('cloude-storage-file');
const gscCredentials = document.getElementById('GCS-credentials');
const runeveryminute = document.getElementById('runeveryminute');
const errorText = document.getElementById('error-text');
console.log(errorText);
form.addEventListener('submit', (e) => {
    e.prebentDefault();
    validate();
});
pipelineName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z0-9]{0,5}$/
    let str = pipelineName.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('valid')
        errorText.style.display = 'none';

    } else {
        console.log('not valid');
        errorText.style.display = 'block';

    }
});
    projectName.addEventListener('blur', () => {
        //   let regex=/^([^+-_][a-zA-z]{0-5})$/
        let regex = /^[a-zA-Z0-9]{0,5}$/
        let str = projectName.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('valid');
            document.getElementById('error-text1').style.display = 'none';

        } else {
            console.log('not valid');
            document.getElementById('error-text1').style.display = 'block';
            // errorText.innerHTML = 'Projectname name should be 0-5 character long and should not contain special character';
    
        }
    }); 

    bucketName.addEventListener('blur', () => {
        //   let regex=/^([^+-_][a-zA-z]{0-5})$/
        let regex = /^[a-zA-Z0-9]{0,5}$/
        let str = bucketName.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('valid');
            document.getElementById('error-text2').style.display = 'none';

        } else {
            console.log('not valid');
            document.getElementById('error-text2').style.display = 'block';
            // errorText.innerHTML = 'Projectname name should be 0-5 character long and should not contain special character';
    
        }
    }); 

    cloudeStorageFile.addEventListener('blur', () => {
        //   let regex=/^([^+-_][a-zA-z]{0-5})$/
        let regex = /^[a-zA-Z0-9]{0,5}$/
        let str = cloudeStorageFile.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('valid');
            document.getElementById('error-text3').style.display = 'none';

        } else {
            console.log('not valid');
            document.getElementById('error-text3').style.display = 'block';
            // errorText.innerHTML = 'Projectname name should be 0-5 character long and should not contain special character';
    
        }
    }); 

    gscCredentials.addEventListener('blur', () => {
        //   let regex=/^([^+-_][a-zA-z]{0-5})$/
        let regex = /^[a-zA-Z0-9]{0,5}$/
        let str = gscCredentials.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('valid');
            document.getElementById('error-text4').style.display = 'none';

        } else {
            console.log('not valid');
            document.getElementById('error-text4').style.display = 'block';
            // errorText.innerHTML = 'Projectname name should be 0-5 character long and should not contain special character';
    
        }
    }); 

    runeveryminute.addEventListener('blur', () => {
        //   let regex=/^([^+-_][a-zA-z]{0-5})$/
        let regex = /^[0-9]{0,4}$/
        let str = runeveryminute.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('valid');
            document.getElementById('error-text5').style.display = 'none';

        } else {
            console.log('not valid');
            document.getElementById('error-text5').style.display = 'block';
            // errorText.innerHTML = 'Projectname name should be 0-5 character long and should not contain special character';
    
        }
    }); 









