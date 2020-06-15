var url_api = 'https://api.github.com/search/repositories?q=';
document.querySelector("#searchBtn").addEventListener('click', main);
function getInfoFromAPI(search) {
    return fetch(url_api + search)
        .then(function (data) { return data.json(); })
        .then(function (data) {
        return data.items;
    });
}
function main() {
    var searchInput = document.getElementById("searchInput").value;
    console.log(searchInput);
    if (searchInput == "") {
        alert("Do not input empty");
    }
    else {
        getInfoFromAPI(searchInput).then(function (data) {
            var repo_data = '';
            data.forEach(function (value) {
                repo_data += '<tr>';
                repo_data += '<td>' + value.name + '</td>';
                repo_data += '<td><a href="' + value.html_url + '">' + value.html_url + '</a></td>';
                repo_data += '</tr>';
            });
            document.querySelector("#listData").innerHTML = repo_data;
        });
    }
}
