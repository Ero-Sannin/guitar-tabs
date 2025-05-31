const searchInput = document.getElementById('searchInput');
    const songs = document.querySelectorAll('.song');

    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      songs.forEach(song => {
        const title = song.textContent.toLowerCase();
        song.style.display = title.includes(query) ? 'block' : 'none';
      });
    });