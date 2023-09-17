import PostList from "./PostList";
import Search from "./Search";

function Home() {
    return (
        <>
            <h1>Blog</h1>
            <Search />
            <PostList />
        </>
    );
}

export default Home;