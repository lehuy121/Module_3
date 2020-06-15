interface Repo {
    name: string
    html_url: string
    // created_at: string
}

let url_api: string = 'https://api.github.com/search/repositories?q=';
document.querySelector("#searchBtn").addEventListener('click', main);

function getInfoFromAPI(search: string): Promise<Array<Repo>> {
    return fetch(url_api + search)
        .then((data) => data.json())
        .then((data) => {
            return data.items as Array<Repo>;
        });
}

function main() {
    const searchInput: string = (document.getElementById("searchInput") as HTMLInputElement).value;
    console.log(searchInput);
    if (searchInput == "") {
        alert("Do not input empty");
    } else {
        getInfoFromAPI(searchInput).then(data => {
            let repo_data = '';
            data.forEach((value: Repo) => {
                repo_data += '<tr>';
                repo_data += '<td>' + value.name + '</td>';
                repo_data += '<td><a href="' + value.html_url + '">' + value.html_url + '</a></td>';
                repo_data += '</tr>';
            });
            document.querySelector("#listData").innerHTML = repo_data;
        });
    }

}


