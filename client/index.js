document.addEventListener('DOMContentLoaded', () => {
    loadHTMLTable([]); // 함수의 인자에 빈배열을 넣을 수 있다는 것을 지금 처음 알았음
});

function loadHTMLTable(data) {
    const table = document.querySelector('#table tbody'); // ('table tbody') 작성자는 이렇게 함

    if(data.length === 0) {
        table.innerHTML = "<tr><td class = 'no-data' colspan = '5'>No Data</td></tr>" // 지금까지는 innerHTML 안에 '' 이것만 해서 몰랐지만 이런식으로도 활용가능
    }   
}