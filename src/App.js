function App() {

  const cook2 = 'EB74E6B192C6AD34BD468C697C13492C~Zj5Z+mUzRKTI/BrY2AeS8PL2LyFdMZKf/CRgD7byDX06kH6UvTyrN0yR0Tb4D1J0GoQfNz6/hidss+KU9xLEdPPuL0Ncx5ccQdj21BMXvJPyAgmq1aH5ml/xtSY+jFkrcNG/xwxi82ygRKjMK9HNUSMD3YkDahvfkJKHUZisfbA=';
  const headers = {
      headers: {
          "method": "GET",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
          'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        "cookie": cook2,
      }}
    // const url3 = "https://api.sensibull.com/v1/events?";
    // const url2 = 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY';

    const url3 = "/v1/events?";
    const url2 = '/api/option-chain-indices?symbol=NIFTY';
    const getData = async () =>{
      const fetchData = await fetch(url2, headers);
      const fetchjson = await fetchData.json();
      console.log(fetchjson);
    }
    getData();
    
    // console.log(fetchjson);
   







  return (
    <div className="App">
      
    </div>
  );
}

export default App;
