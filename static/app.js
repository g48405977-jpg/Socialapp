function createPost() {
    const input = document.getElementById("postText");
    const text = input.value.trim();

    if (text === "") {
        alert("Please write something first!");
        return;
    }

    const feed = document.getElementById("feed");

    const post = document.createElement("article");
    post.className = "post";

    post.innerHTML = `
        <div class="user">
            <div class="avatar">G</div>
            <strong>Getaneh</strong>
        </div>

        <p>${escapeHTML(text)}</p>

        <div class="actions">
            <button onclick="likePost(this)">
                ❤️ Like <span>0</span>
            </button>
            <button>💬 Comment</button>
            <button>↗️ Share</button>
        </div>
    `;

    feed.prepend(post);
    input.value = "";
}

function likePost(button) {
    const count = button.querySelector("span");
    let likes = Number(count.textContent);

    if (button.dataset.liked === "true") {
        likes--;
        button.dataset.liked = "false";
    } else {
        likes++;
        button.dataset.liked = "true";
    }

    count.textContent = likes;
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}
