export const endpoints = {
    user:{
        login:"api/user/login",
        signup:"api/user/signup",
        me:"api/user/me",
        find:"api/user", // api/user/:name;
        userdetails:"api/user/all", // api/user/all?username=username;
        searchUser:"api/user", // api/user/:name
        follow:"api/user/addfollowing", // post request provid followingId
        unfollow:"api/unfollow"
    },
    blog:{
        suggestBlog:"api/post/suggest",
        postBlog:"api/post/postBlog",
        userPost:'api/post/',
        getPostById:'api/post/p'
    },
    chat:{
        getChatList:"api/chat",
        chatsMessage:"api/chat/c", // "api/chat/c/:id"
        sendMessage:"api/chat/message"
    },
    url:{
        URL:process.env.URL,
        LocalUrl:process.env.CURRENT
    }
}