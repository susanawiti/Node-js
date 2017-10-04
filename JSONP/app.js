
var endpoint = 'http://backend.ihub.co.ke/api/v2/blogs';


const xhr = new XMLHttpRequest();
   xhr.addEventListener('load', (e) =>{
    	let content =  JSON.parse(xhr.responseText);

        const container = document.querySelector('.posts');

        content.data.forEach((blogPost) => {
        	const img = document.createElement('img');
        	img.src = blogPost.image_link;

        	container.appendChild(img);

           
          const h3 = document.createElement('heading');
          h3.textContent = blogPost.heading;
          container.appendChild(h3);
          console.log(content);

        });
    	// renderItems(response.results);

    });




    xhr.open('GET', endpoint, true);
    xhr.send();





