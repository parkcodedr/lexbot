require("dotenv").config();
const twit = require("./twit");
const {writeToFile} = require('./writeExcel');

const getTweets = async()=>{
    let params = {
        q: "anticapitalism",
        count: 100,
        user:{
            fields:"username,verified,public_metrics"
        },
        tweet:{
            fields:"author_id"
        },
      };

      const result = await twit.get("search/tweets", params);
      const {statuses} = result.data;
      const userData = statuses.map(item=>{
        const {id,user} = item;
        const {name,screen_name,location,url,
            followers_count,verified,
            statuses_count} = user;
            return {name,screen_name,location,url,
                followers_count,verified,
                statuses_count}
      })
      return userData;
      
}

getTweets().then(result=>{
    writeToFile(result);

});