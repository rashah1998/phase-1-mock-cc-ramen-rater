// write your code here

const baseUrl = 'http://localhost:3000';

let myData;

fetch(baseUrl + '/ramens').then(res => res.json()).then(data => {
    myData = data;
    appendImages(data);
});



function appendImages(data) {
    
    const menuDiv = document.querySelector('#ramen-menu');
    
    showInfo(data[0]);

    data.forEach((data) => {

        const ramenImg = document.createElement('img');
        ramenImg.src = data.image;
        ramenImg.addEventListener('click', () => showInfo(data))        
        menuDiv.appendChild(ramenImg);

    });
}
        
    

function showInfo(ramen) {
    //take in the image, add the image to the #ramen-detail div, and then show the rating and
    //comment info in the h3
    const detailDivImg = document.querySelector('#ramen-detail .detail-image');
    const detailDivName = document.querySelector('#ramen-detail .name');
    const detailDivRestaurant = document.querySelector('#ramen-detail .restaurant');

    detailDivImg.src = ramen.image;
    detailDivName.textContent = ramen.name;
    detailDivRestaurant.textContent = ramen.restaurant;

    const ramenRating = document.querySelector('#rating-display');
    const ramenComment = document.querySelector('#comment-display');
    
    ramenRating.textContent = ramen.rating;
    ramenComment.textContent = ramen.comment;
}

const ramenForm = document.querySelector('#new-ramen');

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = myData.length + 1;
    const name = e.target.querySelector('#new-name').value;
    const restaurant = e.target.querySelector('#new-restaurant').value;
    const image = e.target.querySelector('#new-image').value;
    const rating = e.target.querySelector('#new-rating').value;
    const comment = e.target.querySelector('#new-comment').value;

    const newRamen = {id, name, restaurant, image, rating, comment};
    
    myData.push(newRamen);
    appendImages([newRamen]);
})