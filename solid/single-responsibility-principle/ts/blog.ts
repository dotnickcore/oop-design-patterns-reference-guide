class BlogPost {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    createPost() {

    }

    updatePost() {

    }

    deletePost() {

    }
}

class BlogPostDisplay {
    constructor(public blogPost: BlogPost) {}

    displayHTML() {
        return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}

const blogPost = new BlogPost("Test", "here is the content");
const display = new BlogPostDisplay(blogPost);
console.log(display.displayHTML());