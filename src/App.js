function App() {
  const cook3 = '4C95A5D33CDD1DCCD94DE06E1A03ED82~Zj5Z+mUzRKTI/BrY2AeS8DZIaF+oOLizzefOcZ3w2ck/SfdfWwwnHzsN1TYHC+Jup0alzCRk2CXm61JGw8kf6Gc79UJOQjo1mM8/jHnwdCGQUleGk5hhYuAQle/UXXE+X8ENnODG2nYkfwPkpg1gDfTeptKg8PEKHl5xREdEJr4=';
  // const cook2 = 'EB74E6B192C6AD34BD468C697C13492C~Zj5Z+mUzRKTI/BrY2AeS8PL2LyFdMZKf/CRgD7byDX06kH6UvTyrN0yR0Tb4D1J0GoQfNz6/hidss+KU9xLEdPPuL0Ncx5ccQdj21BMXvJPyAgmq1aH5ml/xtSY+jFkrcNG/xwxi82ygRKjMK9HNUSMD3YkDahvfkJKHUZisfbA=';
  const headers = {
    method : "GET",
      mode: 'no-cors',
      
      headers: {
        'sec-fetch-site': 'cross-site',
          "method": "GET",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
          'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        "cookie": cook3,
      }}
      // "proxy":"https://www.nseindia.com",
    // const url3 = "https://api.sensibull.com/v1/events?";
    // const url2 = 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY';
    // "proxy":"https://api.sensibull.com",
    const url3 = "/v1/events?";
    // const url4 = '/api/marketStatus';
    // const url2 = '/api/option-chain-indices?symbol=NIFTY';
    const getData = async () =>{
      const fetchData = await fetch(url3, headers);
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
