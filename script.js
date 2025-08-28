document.getElementById('searchBtn').addEventListener('click', function () {
  const query = document.querySelector('.search-bar input').value;
  alert(`検索: ${query}`);
});
