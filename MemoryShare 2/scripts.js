function uploadPhoto() {
    const input = document.getElementById('photo-upload');
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('gallery').appendChild(img);
        };
        
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
}
