const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('loadMore');

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=9'; // Fetch 9 images at a time

// Function to fetch and display memes
async function fetchMemes() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();

		data.forEach((item) => {
			const memeDiv = document.createElement('div');
			memeDiv.className = 'meme';
			memeDiv.innerHTML = `
                <img src="${item.url}" alt="Funny Cat Meme" />
                <p>Cat Meme</p>
            `;
			gallery.appendChild(memeDiv);
		});
	} catch (error) {
		console.error('Error fetching cat memes:', error);
	}
}

// Load initial memes
fetchMemes();

// Load more memes on button click
loadMoreButton.addEventListener('click', fetchMemes);
