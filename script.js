const form = document.getElementById('textForm');
    const promptInput = document.getElementById('prompt');
    const generatedText = document.getElementById('generatedText');

    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent form from refreshing the page

      const prompt = promptInput.value;
      if (!prompt) {
        alert('Please enter a prompt!');
        return;
      }

      try {
        const apiKey = 'your-gemini-api-key'; // Replace with your actual Gemini API key
        const response = await fetch('https://gemini-api-url', { // Replace with the actual Gemini API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Bearer $ {apiKey}
          },
          body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch response from Gemini API');
        }

        const data = await response.json();
        generatedText.value = data.text; // Adjust this based on the API's response structure
      } catch (error) {
        console.error('Error:', error);
        generatedText.value = 'An error occurred. Please try again later.';
      }
    });