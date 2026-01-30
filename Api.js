import axios from 'axios';

 export const corporateList = async() => {
  const response=await axios({
  method: 'post',
  url: 'https://dev.floatr.in/serversuite/admin/corporates',
  headers:{
     'Content-Type':'application/json',
     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwidXNlcm5hbWUiOiJyYWtlc2g0MjEiLCJjb3Jwb3JhdGVfaWQiOjEyNiwiaWF0IjoxNzY5NjY3MDMzLCJleHAiOjE3Njk2NzA2MzN9.G9gu3vlUHPwi3Qr5goRpFmT7lED8_xLGJFAukZdkHyg'
  }
});
if(response?.data?.success) {
// console.log(response, 'resp....')
return response.data.data;
}
};
