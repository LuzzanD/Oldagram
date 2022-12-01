import posts from "./data.js"

function render(){
    const postsData = posts.map((post) =>{
             return ( `<section class="post-container">
                    
                            <div class="post-user-container">
                                <img src=${post.avatar} class="profile-img">
                                <div class="user-info">
                                    <h4 class="user-name">${post.name}</h4>
                                    <p class="user-location">${post.location}</p>
                                </div>
                            </div>
                            <img src=${post.image} class="post-img">
                        
                            <div class="icons-container">
                                <img src="/images/icon-heart.png" class="icon">
                                <img src="/images/icon-comment.png" class="icon">
                                <img src="/images/icon-dm.png" class="icon">
                            </div>
                            
                            <div class="comments-container">
                                <p class="likes">${post.likes} likes</p>
                                <p class="comments"><span class="comment-user">${post.username}</span>${post.comment}</p>
                            </div>
                            
                        </section>`
             )
    }).join('')
    document.getElementById('main').innerHTML = postsData
}

render()

