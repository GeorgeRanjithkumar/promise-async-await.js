// How you can use Promise.all in map function with async and await? Provide a sample code.
//=> OPTION "1"

const userUrls = [
    'https://api.github.com/users/justinwhall',
    'https://api.github.com/users/codeprokid',
    'https://api.github.com/users/jasonbahl',
  ];

  const getUsers = async () => {
    return await Promise.all(
      userUrls.map(async user => {
        const userRes = await fetch(user);
        return await userRes.json();
      })
    );
  };
  
  getUsers().then(data => console.log(data));

//=> OPTION "2"

 const userX= [{a: 1}, {a:2}];
    const getX = async() => {
        return await Promise.all(
          m=userX.map(async x =>{
           const xRes = await fetch (x);
           return await xRes.json();
           (y)}),
           function x(m){}
          )
    };
  getX().then(data => console.log(data));