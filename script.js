// console.log('JS GOOD');

// call url
var url = 'https://reqres.in/api/users';

// call data -> fecth GET
fetch(url + '/1')
.then((res) => res.json())
.then((data) => console.log(data.data))
.catch((err) => console.log('Error nya ini ' + err))
// * harus diubah ke bentuk JSON

// call data -> axios GET
axios.get(url, + '/1')
.then((data) => console.log(data.data))
.catch((err) => console.log('Error nya ini ' + err))
// * lebih simple

// POST -> fecth
fetch(url,{
  method: 'post',
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify({
    name:'akio',
    job: 'programmer'
  })
})
// * setting seperti di postman
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log('Error nya ini ' + err))

// POST -> axios
axios.post(url,{
  name:'meong',
  job: 'mengtidur'
})
.then((data) => console.log(data))

// exprerimen manggil data yg apinya salah -> fecth
fetch(url + '/x')
.then((res) => {console.log(res)})
.catch((err) => console.log('errornya ini' + err))
// * memberikan response salah walaupun salah

// exprerimen manggil data yg apinya salah -> axios
axios.get(url + '/x')
.then((res) => {console.log(res)})
.catch((err) => console.log('errornya ini' + err))
// * tidak memberikan response hanya pesan err aja


// *** test nya sendiri sendiri
